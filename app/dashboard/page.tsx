import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import {
  mockMetrics,
  mockRevenueData,
  mockActivities,
  mockProducts,
  mockTransactions,
} from "@/data/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="w-full space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-xs text-muted-foreground">
          Monitor your business performance and key metrics.
        </p>
      </header>

      <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueChart data={mockRevenueData} />
        </div>
        <div className="lg:col-span-3">
          <RecentActivity activities={mockActivities} />
        </div>
      </div>

      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
        <TopProducts products={mockProducts} />
        <RecentTransactions transactions={mockTransactions} />
      </div>
    </div>
  );
}
