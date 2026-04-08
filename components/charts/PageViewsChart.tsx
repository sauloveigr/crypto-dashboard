"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PageView } from "@/types";
import { Card } from "@/components/ui";

interface PageViewsChartProps {
  data: PageView[];
}

export function PageViewsChart({ data }: PageViewsChartProps) {
  return (
    <Card as="section">
      <h2 className="mb-6 text-base font-semibold">Top Pages</h2>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="page"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
              dx={-10}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
                      <p className="text-xs font-medium text-muted-foreground">
                        {payload[0].payload.page}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {payload[0].value?.toLocaleString()} views
                      </p>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ fill: "hsl(0, 0%, 96%)" }}
            />
            <Bar dataKey="views" fill="hsl(0, 0%, 9%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
