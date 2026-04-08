import { cn } from "@/lib/utils";

export interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded bg-background px-1.5 font-mono text-xs font-medium text-muted-foreground ring-1 ring-border",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </kbd>
  );
}
