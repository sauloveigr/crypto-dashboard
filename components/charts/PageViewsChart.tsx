"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { VolumeData } from "@/types/crypto";
import { Card, LoadingSpinner } from "@/components/ui";

interface PageViewsChartProps {
  data: VolumeData[];
  isLoading?: boolean;
  title?: string;
  description?: string;
}

export function PageViewsChart({ 
  data, 
  isLoading,
  title = "Top Pages",
  description,
}: PageViewsChartProps) {
  return (
    <Card as="section">
      <div className="mb-6">
        <h2 className="text-base font-semibold">{title}</h2>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="h-64 sm:h-80">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : data.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-muted-foreground">No data available</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(0, 0%, 45%)", fontSize: 11 }}
                tickFormatter={(value) => `$${(value / 1000000000).toFixed(1)}B`}
                dx={-10}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
                        <p className="text-xs font-medium text-muted-foreground">
                          {payload[0].payload.name}
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          ${(payload[0].value as number / 1000000000).toFixed(2)}B
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={{ fill: "hsl(0, 0%, 96%)" }}
              />
              <Bar dataKey="volume" fill="hsl(0, 0%, 9%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
}
