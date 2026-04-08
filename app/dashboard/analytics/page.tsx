"use client";

import { AnalyticsStatCard } from "@/components/dashboard/AnalyticsStatCard";
import { TrafficPieChart } from "@/components/charts/TrafficPieChart";
import { PageViewsChart } from "@/components/charts/PageViewsChart";
import { LoadingSpinner, ErrorMessage } from "@/components/ui";
import {
  useGlobalMarketData,
  useMarketShareData,
  useVolumeData,
} from "@/hooks/useCryptoData";
import { TrendingUp, DollarSign, Activity, Globe } from "lucide-react";
import { formatCurrency, formatCompactNumber, formatPercentage } from "@/lib/utils";

export default function AnalyticsPage() {
  const {
    data: globalData,
    isLoading: isLoadingGlobal,
    error: globalError,
    refetch: refetchGlobal,
  } = useGlobalMarketData();

  const {
    data: marketShareData,
    isLoading: isLoadingMarketShare,
    error: marketShareError,
    refetch: refetchMarketShare,
  } = useMarketShareData();

  const {
    data: volumeData,
    isLoading: isLoadingVolume,
    error: volumeError,
    refetch: refetchVolume,
  } = useVolumeData();

  if (isLoadingGlobal || isLoadingMarketShare || isLoadingVolume) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const analyticsStats = globalData
    ? [
        {
          label: "Total Market Cap",
          value: formatCompactNumber(globalData.data.total_market_cap.usd),
          icon: DollarSign,
        },
        {
          label: "24h Trading Volume",
          value: formatCompactNumber(globalData.data.total_volume.usd),
          icon: Activity,
        },
        {
          label: "BTC Dominance",
          value: `${globalData.data.market_cap_percentage.btc.toFixed(1)}%`,
          icon: TrendingUp,
        },
        {
          label: "Active Cryptocurrencies",
          value: globalData.data.active_cryptocurrencies.toLocaleString(),
          icon: Globe,
        },
      ]
    : [];

  return (
    <div className="w-full space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          Market Analytics
        </h1>
        <p className="text-xs text-muted-foreground">
          Global cryptocurrency market data and statistics powered by CoinGecko.
        </p>
      </header>

      {globalError ? (
        <ErrorMessage
          message={globalError.message || "Failed to load global market data"}
          onRetry={refetchGlobal}
        />
      ) : (
        <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsStats.map((stat, i) => (
            <AnalyticsStatCard key={i} stat={stat} />
          ))}
        </div>
      )}

      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
        {marketShareError ? (
          <ErrorMessage
            message={marketShareError.message || "Failed to load market share data"}
            onRetry={refetchMarketShare}
          />
        ) : (
          <TrafficPieChart
            data={marketShareData || []}
            isLoading={isLoadingMarketShare}
            title="Market Share"
            description="Top 5 cryptocurrencies by market cap"
          />
        )}

        {volumeError ? (
          <ErrorMessage
            message={volumeError.message || "Failed to load volume data"}
            onRetry={refetchVolume}
          />
        ) : (
          <PageViewsChart
            data={volumeData || []}
            isLoading={isLoadingVolume}
            title="24h Trading Volume"
            description="Top cryptocurrencies by volume"
          />
        )}
      </div>
    </div>
  );
}
