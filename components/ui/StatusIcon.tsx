import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatusIconProps {
  icon: LucideIcon;
  status: "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusIcon({
  icon: Icon,
  status,
  size = "md",
  className,
}: StatusIconProps) {
  const containerSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const statusStyles = {
    success: "bg-emerald-100 text-emerald-600",
    warning: "bg-orange-100 text-orange-600",
    error: "bg-red-100 text-red-600",
    info: "bg-blue-100 text-blue-600",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        containerSizes[size],
        statusStyles[status],
        className
      )}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
    </div>
  );
}
