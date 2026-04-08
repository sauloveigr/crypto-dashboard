import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "default" | "success" | "error" | "warning" | "secondary";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  size = "sm",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        {
          "bg-foreground text-background": variant === "default",
          "bg-emerald-100 text-emerald-600": variant === "success",
          "bg-red-100 text-red-600": variant === "error",
          "bg-orange-100 text-orange-600": variant === "warning",
          "bg-secondary text-foreground": variant === "secondary",
        },
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-2.5 py-1 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
