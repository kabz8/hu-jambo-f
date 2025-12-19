import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useAuth } from "@/hooks/useAuth";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  LineChart,
  PlayCircle,
  Star,
} from "lucide-react";

const COURSES = [
  {
    id: "foundations",
    title: "Biblical Money Foundations",
    level: "Beginner",
    duration: "4 weeks",
    modules: 6,
    focus: "Budgeting, debt, and contentment",
  },
  {
    id: "generosity",
    title: "Generosity & Legacy",
    level: "Intermediate",
    duration: "6 weeks",
    modules: 8,
    focus: "Giving rhythms, tithing, and legacy planning",
  },
  {
    id: "calling",
    title: "Career & Calling",
    level: "Intermediate",
    duration: "4 weeks",
    modules: 5,
    focus: "Work, salary, and stewardship of skills",
  },
  {
    id: "family-finance",
    title: "Family & Faithful Finances",
    level: "All levels",
    duration: "3 weeks",
    modules: 4,
    focus: "Household budgeting and family discipleship",
  },
];

export default function Courses() {
  const { progressMap, updateCourse } = useCourseProgress();
  const { user } = useAuth();

  const activeCourses = COURSES.filter((c) => progressMap[c.id]?.status !== "not_started");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-10 lg:p-12 backdrop-blur-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-4">
                <p className="section-eyebrow text-white/80">Courses · Guided Learning</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  Learn biblical stewardship step by step
                </h1>
                <p className="text-lg text-white/85 max-w-2xl">
                  Follow structured tracks with clear lessons, reflective prompts, and simple next actions. Your
                  progress is saved on this device so you can pick up where you left off.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="stat-pill inline-flex items-center gap-2 text-sm">
                    <Layers className="w-4 h-4" />
                    {COURSES.length} tracks
                  </div>
                  <div className="stat-pill inline-flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    3–6 weeks each
                  </div>
                  <div className="stat-pill inline-flex items-center gap-2 text-sm">
                    <LineChart className="w-4 h-4" />
                    Progress saved locally
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-3xl bg-black/20 border border-white/15 p-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  Your learning snapshot
                </h2>
                <p className="text-sm text-white/80">
                  Signed in as{" "}
                  <span className="font-semibold">
                    {user?.firstName ? `${user.firstName} ${user.lastName ?? ""}`.trim() : "Guest learner"}
                  </span>
                  .
                </p>
                {activeCourses.length === 0 ? (
                  <p className="text-sm text-white/70">
                    You have not started any courses yet. Select a track below and choose{" "}
                    <span className="font-semibold">Start Course</span> to begin.
                  </p>
                ) : (
                  <ul className="space-y-3 text-sm">
                    {activeCourses.map((course) => {
                      const progress = progressMap[course.id];
                      return (
                        <li key={course.id} className="bg-white/10 rounded-2xl px-3 py-2.5">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <span className="font-semibold text-sm">{course.title}</span>
                            <span className="text-xs text-white/70">{progress.percentComplete}% complete</span>
                          </div>
                          <Progress value={progress.percentComplete} className="h-1.5 bg-white/20" />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses + Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="catalog" className="space-y-8">
          <TabsList className="w-full max-w-md mx-auto mb-2">
            <TabsTrigger value="catalog" className="flex-1">
              Course catalog
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex-1">
              My dashboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="faith-title">Browse courses</h2>
                <p className="faith-subtitle">
                  Choose a track to begin. You can switch courses at any time—your progress will be remembered.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES.map((course) => {
                const progress = progressMap[course.id];
                const status = progress?.status ?? "not_started";
                const percent = progress?.percentComplete ?? 0;

                return (
                  <Card key={course.id} className="card-hover h-full flex flex-col justify-between">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge variant="secondary" className="text-[0.6rem] tracking-[0.18em]">
                          {course.level}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                      </div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#9c7554]" />
                        {course.title}
                      </CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{course.focus}</p>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{course.modules} modules</span>
                        {status !== "not_started" && (
                          <span className="inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {status === "completed" ? "Completed" : "In progress"}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Progress value={percent} className="h-1.5" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{percent}% complete</span>
                          {status === "not_started" && <span>Not started</span>}
                        </div>
                      </div>
                      <Button
                        className="w-full mt-1"
                        onClick={() =>
                          updateCourse(
                            course.id,
                            status === "not_started" ? "in_progress" : status === "in_progress" ? "completed" : "completed",
                          )
                        }
                      >
                        <PlayCircle className="w-4 h-4 mr-1" />
                        {status === "not_started"
                          ? "Start course"
                          : status === "in_progress"
                          ? "Mark as completed"
                          : "Review course"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-6">
            <section className="space-y-4">
              <h2 className="faith-title">My learning dashboard</h2>
              <p className="faith-subtitle max-w-2xl">
                This dashboard summarizes your activity on this device. Use it to track which courses you have started
                and how far along you are.
              </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Active courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeCourses.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      You do not have any active courses yet. Start a track from the <strong>Course catalog</strong>{" "}
                      tab to see it here.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {activeCourses.map((course) => {
                        const progress = progressMap[course.id];
                        return (
                          <div
                            key={course.id}
                            className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                          >
                            <div>
                              <p className="font-semibold text-sm">{course.title}</p>
                              <p className="text-xs text-muted-foreground">{course.focus}</p>
                            </div>
                            <div className="w-full sm:w-64 space-y-1">
                              <Progress value={progress.percentComplete} className="h-1.5" />
                              <div className="flex items-center justify-between text-[0.7rem] text-muted-foreground">
                                <span>{progress.percentComplete}% complete</span>
                                <span className="inline-flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  {progress.status === "completed" ? "Completed" : "In progress"}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile snapshot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">
                      {user?.firstName
                        ? `${user.firstName} ${user.lastName ?? ""}`.trim()
                        : "Guest learner"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {user?.email ?? "Progress is stored privately in this browser."}
                    </p>
                  </div>
                  <div className="border-t border-border/60 pt-3 space-y-1 text-xs text-muted-foreground">
                    <p>
                      <strong>{activeCourses.length}</strong> active course
                      {activeCourses.length === 1 ? "" : "s"}
                    </p>
                    <p className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Mark modules complete as you go to see your progress grow.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}


