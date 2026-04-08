import { AlertCircle } from "lucide-react";
import { Card, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({ message, onRetry, className }: ErrorMessageProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center",
        className
      )}
    >
      <AlertCircle className="h-8 w-8 text-red-500 mb-3" />
      <p className="text-sm text-muted-foreground mb-3">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} size="sm" variant="ghost">
          Try again
        </Button>
      )}
    </Card>
  );
}
