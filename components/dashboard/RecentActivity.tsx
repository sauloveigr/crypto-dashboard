import type { Activity } from "@/types";
import { Card } from "@/components/ui";

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card as="section">
      <h2 className="mb-4 text-base font-semibold">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <div
              className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${activity.color}`}
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-xs">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>
              </p>
              <time className="mt-0.5 text-xs text-muted-foreground">
                {activity.time}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
