import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import type { TrafficSource, PageView, AnalyticsStat } from "@/types";

/**
 * Mock analytics statistics
 */
export const mockAnalyticsStats: AnalyticsStat[] = [
  { label: "Page Views", value: "124,592", icon: Eye },
  { label: "Visitors", value: "43,291", icon: Users },
  { label: "Conversion Rate", value: "3.24%", icon: TrendingUp },
  { label: "Avg. Session", value: "4m 32s", icon: BarChart3 },
];

/**
 * Mock traffic source data for pie chart
 */
export const mockTrafficData: TrafficSource[] = [
  { source: "Organic Search", value: 45, color: "hsl(217, 91%, 60%)" },
  { source: "Direct", value: 30, color: "hsl(142, 71%, 45%)" },
  { source: "Social Media", value: 15, color: "hsl(262, 83%, 58%)" },
  { source: "Referral", value: 10, color: "hsl(25, 95%, 53%)" },
];

/**
 * Mock page views data for bar chart
 */
export const mockPageViewsData: PageView[] = [
  { page: "Home", views: 3245 },
  { page: "Products", views: 2891 },
  { page: "About", views: 1678 },
  { page: "Contact", views: 1234 },
  { page: "Blog", views: 987 },
  { page: "Pricing", views: 765 },
];
