import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import type {
  Metric,
  RevenueData,
  Transaction,
  Product,
  Activity,
} from "@/types";

/**
 * Mock metrics data for dashboard KPI cards
 */
export const mockMetrics: Metric[] = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "$45,231",
    change: 12.5,
    icon: DollarSign,
  },
  {
    id: "users",
    title: "Active Users",
    value: "2,345",
    change: 8.2,
    icon: Users,
  },
  {
    id: "orders",
    title: "Orders",
    value: "1,234",
    change: -3.1,
    icon: ShoppingCart,
  },
  {
    id: "growth",
    title: "Growth",
    value: "23.5%",
    change: 5.4,
    icon: TrendingUp,
  },
];

/**
 * Mock revenue data for time-series chart
 */
export const mockRevenueData: RevenueData[] = [
  { month: "Jan", revenue: 24500, previousYear: 20000 },
  { month: "Feb", revenue: 32000, previousYear: 24000 },
  { month: "Mar", revenue: 28000, previousYear: 22000 },
  { month: "Apr", revenue: 42000, previousYear: 32000 },
  { month: "May", revenue: 35000, previousYear: 28000 },
  { month: "Jun", revenue: 45231, previousYear: 35000 },
];

/**
 * Mock recent activity data
 */
export const mockActivities: Activity[] = [
  {
    id: "1",
    user: "Sarah Johnson",
    action: "completed a purchase",
    time: "2 minutes ago",
    color: "bg-green-500",
  },
  {
    id: "2",
    user: "Mike Smith",
    action: "signed up",
    time: "15 minutes ago",
    color: "bg-blue-500",
  },
  {
    id: "3",
    user: "Emma Davis",
    action: "left a review",
    time: "1 hour ago",
    color: "bg-purple-500",
  },
  {
    id: "4",
    user: "James Wilson",
    action: "updated profile",
    time: "2 hours ago",
    color: "bg-orange-500",
  },
  {
    id: "5",
    user: "Lisa Brown",
    action: "completed a purchase",
    time: "3 hours ago",
    color: "bg-green-500",
  },
];

/**
 * Mock top products data
 */
export const mockProducts: Product[] = [
  { id: "1", name: "Premium Plan", sales: 234, revenue: "$12,340" },
  { id: "2", name: "Basic Plan", sales: 189, revenue: "$9,450" },
  { id: "3", name: "Enterprise Plan", sales: 78, revenue: "$15,600" },
  { id: "4", name: "Starter Pack", sales: 156, revenue: "$3,120" },
];

/**
 * Mock recent transactions data
 */
export const mockTransactions: Transaction[] = [
  {
    id: "1",
    customer: "John Smith",
    product: "Premium Plan",
    amount: 299,
    status: "completed",
    time: "2 min ago",
  },
  {
    id: "2",
    customer: "Sarah Johnson",
    product: "Basic Plan",
    amount: 99,
    status: "completed",
    time: "15 min ago",
  },
  {
    id: "3",
    customer: "Mike Wilson",
    product: "Enterprise Plan",
    amount: 599,
    status: "completed",
    time: "1 hour ago",
  },
  {
    id: "4",
    customer: "Emma Davis",
    product: "Premium Plan",
    amount: 299,
    status: "pending",
    time: "2 hours ago",
  },
  {
    id: "5",
    customer: "James Brown",
    product: "Starter Pack",
    amount: 49,
    status: "completed",
    time: "3 hours ago",
  },
];
