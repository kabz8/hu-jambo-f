import { cn } from "@/lib/utils";

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

  // Use the exact uploaded logo from the public folder to respect branding.
  const src = "/logo.png";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={src}
        alt="Biblical Financial Courses logo"
        className={cn(sizeClass, "w-auto select-none")}
        draggable={false}
      />
    </div>
  );
}

