import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export type CourseStatus = "not_started" | "in_progress" | "completed";

export interface CourseProgress {
  courseId: string;
  status: CourseStatus;
  percentComplete: number; // 0-100
  lastTouched: string; // ISO date string
}

type ProgressMap = Record<string, CourseProgress>;

const STORAGE_KEY = "bfc_course_progress";

function loadProgress(userKey: string): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}:${userKey}`);
    if (!raw) return {};
    return JSON.parse(raw) as ProgressMap;
  } catch {
    return {};
  }
}

function saveProgress(userKey: string, map: ProgressMap) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_KEY}:${userKey}`, JSON.stringify(map));
  } catch {
    // ignore
  }
}

export function useCourseProgress() {
  const { user } = useAuth();
  const userKey = user?.id ?? "guest";

  const [progressMap, setProgressMap] = useState<ProgressMap>(() => loadProgress(userKey));

  // Reload if user changes
  useEffect(() => {
    setProgressMap(loadProgress(userKey));
  }, [userKey]);

  const updateCourse = (courseId: string, status: CourseStatus, percentComplete?: number) => {
    setProgressMap((current) => {
      const existing = current[courseId];
      const nextPercent =
        typeof percentComplete === "number"
          ? Math.min(100, Math.max(0, percentComplete))
          : existing?.percentComplete ?? (status === "completed" ? 100 : status === "in_progress" ? 20 : 0);

      const updated: ProgressMap = {
        ...current,
        [courseId]: {
          courseId,
          status,
          percentComplete: nextPercent,
          lastTouched: new Date().toISOString(),
        },
      };

      saveProgress(userKey, updated);
      return updated;
    });
  };

  const clearAll = () => {
    setProgressMap({});
    saveProgress(userKey, {});
  };

  return {
    progressMap,
    updateCourse,
    clearAll,
  };
}


