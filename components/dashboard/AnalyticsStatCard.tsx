import type { AnalyticsStat } from "@/types";
import { Card, IconContainer } from "@/components/ui";

interface AnalyticsStatCardProps {
  stat: AnalyticsStat;
}

export function AnalyticsStatCard({ stat }: AnalyticsStatCardProps) {
  return (
    <Card as="article" hover padding="sm">
      <div className="space-y-3">
        <IconContainer icon={stat.icon} size="md" variant="muted" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">
            {stat.label}
          </p>
          <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
        </div>
      </div>
    </Card>
  );
}
