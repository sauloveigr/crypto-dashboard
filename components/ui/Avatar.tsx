import { cn } from "@/lib/utils";

export interface AvatarProps {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

export function Avatar({
  size = "md",
  src,
  alt = "Avatar",
  fallback,
  className,
}: AvatarProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-7 w-7",
    lg: "h-8 w-8",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "shrink-0 rounded-full object-cover",
          sizeClasses[size],
          className
        )}
      />
    );
  }

  if (fallback) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
          sizeClasses[size],
          className
        )}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "shrink-0 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
