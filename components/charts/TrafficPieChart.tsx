"use client";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { TrafficSource } from "@/types";
import { Card } from "@/components/ui";

interface TrafficPieChartProps {
  data: TrafficSource[];
}

export function TrafficPieChart({ data }: TrafficPieChartProps) {
  return (
    <Card as="section">
      <h2 className="mb-6 text-base font-semibold">Traffic Sources</h2>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border border-border bg-background p-3 shadow-lg">
                      <p className="text-xs font-medium">{payload[0].name}</p>
                      <p className="mt-1 text-sm font-semibold">
                        {payload[0].value}%
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              content={({ payload }) => (
                <ul className="mt-4 flex flex-wrap justify-center gap-4">
                  {payload?.map((entry, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {entry.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
