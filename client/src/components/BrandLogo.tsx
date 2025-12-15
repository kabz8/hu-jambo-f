import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo-full.svg";
import logoMark from "@/assets/logo-mark.svg";

interface BrandLogoProps {
  className?: string;
  withText?: boolean;
  textColor?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Renders the official Biblical Financial Courses logo.
 * Uses the provided SVG assets (full wordmark or mark-only).
 */
export function BrandLogo({ className, withText = true, textColor, size = "md" }: BrandLogoProps) {
  const sizeClass =
    size === "lg" ? "h-16" : size === "sm" ? "h-10" : "h-12";

  const src = withText ? logoFull : logoMark;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={src}
        alt="Biblical Financial Courses logo"
        className={cn(sizeClass, "w-auto select-none")}
        draggable={false}
      />
      {!withText && (
        <div className="leading-tight">
          <div className={cn("text-lg font-semibold tracking-tight", textColor ?? "text-white")}>
            Biblical Financial
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#a47551]">Courses</div>
        </div>
      )}
    </div>
  );
}

