import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { Metric } from "@/types";
import { Card, IconContainer, Badge } from "@/components/ui";

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const { title, value, change, icon } = metric;
  const isPositive = change >= 0;

  return (
    <Card as="article" hover padding="sm" className="group relative">
      <div className="space-y-3">
        <header className="flex items-center justify-between">
          <IconContainer icon={icon} size="md" variant="muted" />
          
          <Badge variant={isPositive ? "success" : "error"} size="sm">
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            <span>{Math.abs(change)}%</span>
          </Badge>
        </header>

        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
      </div>
    </Card>
  );
}
