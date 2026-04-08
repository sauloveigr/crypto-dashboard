"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenueData } from "@/types";
import { Card } from "@/components/ui";

interface RevenueChartProps {
  data: RevenueData[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card as="section">
      <header className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-base font-semibold">Revenue Overview</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Monthly performance compared to last year
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-foreground" />
            <span className="text-muted-foreground">Current Year</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="text-muted-foreground">Previous Year</span>
          </div>
        </div>
      </header>
      
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 0%, 9%)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="hsl(0, 0%, 9%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 0%, 45%)" stopOpacity={0.05} />
                <stop offset="95%" stopColor="hsl(0, 0%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              dx={-10}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        {payload[0].payload.month}
                      </p>
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >
                          <span className="text-xs text-muted-foreground">
                            {entry.name === "revenue" ? "Current" : "Previous"}
                          </span>
                          <span className="text-xs font-semibold">
                            ${entry.value?.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="previousYear"
              stroke="hsl(0, 0%, 45%)"
              strokeWidth={1.5}
              fill="url(#colorPrevious)"
              fillOpacity={1}
              name="previousYear"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(0, 0%, 9%)"
              strokeWidth={2}
              fill="url(#colorRevenue)"
              fillOpacity={1}
              name="revenue"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
