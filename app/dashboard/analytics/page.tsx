import { AnalyticsStatCard } from "@/components/dashboard/AnalyticsStatCard";
import { TrafficPieChart } from "@/components/charts/TrafficPieChart";
import { PageViewsChart } from "@/components/charts/PageViewsChart";
import {
  mockAnalyticsStats,
  mockTrafficData,
  mockPageViewsData,
} from "@/data/analytics-data";

export default function AnalyticsPage() {
  return (
    <div className="w-full space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="text-xs text-muted-foreground">
          Track performance metrics and user behavior insights.
        </p>
      </header>

      <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mockAnalyticsStats.map((stat, i) => (
          <AnalyticsStatCard key={i} stat={stat} />
        ))}
      </div>

      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
        <TrafficPieChart data={mockTrafficData} />
        <PageViewsChart data={mockPageViewsData} />
      </div>
    </div>
  );
}
