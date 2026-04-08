import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "section";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    { className, as = "div", hover = false, padding = "md", children, ...props },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref as any}
        className={cn(
          "rounded-xl bg-background ring-1 ring-border",
          {
            "transition-all hover:ring-foreground/20": hover,
            "p-0": padding === "none",
            "p-4 sm:p-5": padding === "sm",
            "p-4 sm:p-6": padding === "md",
            "p-5 sm:p-7": padding === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
