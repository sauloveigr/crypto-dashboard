import { LucideIcon } from "lucide-react";

/**
 * Metric card data structure for dashboard KPIs
 */
export interface Metric {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
}

/**
 * Revenue data for time-series charts
 */
export interface RevenueData {
  month: string;
  revenue: number;
  previousYear: number;
}

/**
 * Transaction status types
 */
export type TransactionStatus = "completed" | "pending" | "failed";

/**
 * Transaction data structure
 */
export interface Transaction {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: TransactionStatus;
  time: string;
}

/**
 * Product data structure
 */
export interface Product {
  id: string;
  name: string;
  sales: number;
  revenue: string;
}

/**
 * Activity item for recent activity feed
 */
export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  color: string;
}

/**
 * Traffic source data for analytics
 */
export interface TrafficSource {
  source: string;
  value: number;
  color: string;
}

/**
 * Page views data for analytics
 */
export interface PageView {
  page: string;
  views: number;
}

/**
 * Analytics stat card data
 */
export interface AnalyticsStat {
  label: string;
  value: string;
  icon: LucideIcon;
}
