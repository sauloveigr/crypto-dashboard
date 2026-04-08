/**
 * Dashboard-specific configuration
 */
export const dashboardConfig = {
  /**
   * Chart configuration
   */
  charts: {
    defaultHeight: 320,
    mobileHeight: 256,
    colors: {
      primary: "hsl(0, 0%, 9%)",
      secondary: "hsl(0, 0%, 45%)",
      success: "hsl(142, 71%, 45%)",
      warning: "hsl(25, 95%, 53%)",
      error: "hsl(0, 84%, 60%)",
    },
    animationDuration: 300,
  },

  /**
   * Metrics configuration
   */
  metrics: {
    refreshInterval: 30000, // 30 seconds
    currencySymbol: "$",
    numberFormat: "en-US",
  },

  /**
   * Pagination and limits
   */
  limits: {
    recentActivities: 5,
    recentTransactions: 5,
    topProducts: 4,
  },
} as const;
