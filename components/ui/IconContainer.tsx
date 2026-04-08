import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconContainerProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "muted" | "colored";
  color?: string;
  className?: string;
}

export function IconContainer({
  icon: Icon,
  size = "md",
  variant = "muted",
  color,
  className,
}: IconContainerProps) {
  const containerSizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  };

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const containerStyles = {
    muted: "bg-muted/50",
    colored: color || "bg-primary",
  };

  const iconStyles = {
    muted: "text-muted-foreground",
    colored: "text-white",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg",
        containerSizes[size],
        variant === "muted" ? containerStyles.muted : "",
        className
      )}
      style={
        variant === "colored" && color ? { backgroundColor: color } : undefined
      }
    >
      <Icon
        className={cn(
          iconSizes[size],
          variant === "muted" ? iconStyles.muted : iconStyles.colored
        )}
        aria-hidden="true"
      />
    </div>
  );
}
