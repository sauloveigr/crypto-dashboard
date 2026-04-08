"use client";

import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrendingCoins } from "@/components/dashboard/TrendingCoins";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { MarketMovers } from "@/components/dashboard/MarketMovers";
import { LoadingSpinner, ErrorMessage } from "@/components/ui";
import { 
  useTopCryptos, 
  useCryptoChart, 
  useTopCryptosByMarketCap,
  useTrendingCoins,
  useMarketMovers,
} from "@/hooks/useCryptoData";
import { useDashboardStore } from "@/stores/dashboardStore";
import { DollarSign, TrendingUp, Activity, Users } from "lucide-react";
import { formatCurrency, formatCompactNumber } from "@/lib/utils";

export default function DashboardPage() {
  const { selectedCrypto, timeRange } = useDashboardStore();
  
  const {
    data: topCryptos,
    isLoading: isLoadingCryptos,
    error: cryptosError,
    refetch: refetchCryptos,
  } = useTopCryptos();

  const {
    data: chartData,
    isLoading: isLoadingChart,
    error: chartError,
    refetch: refetchChart,
  } = useCryptoChart(selectedCrypto, timeRange);

  const {
    data: topCryptosByMarketCap,
    isLoading: isLoadingTopCryptos,
    error: topCryptosError,
    refetch: refetchTopCryptos,
  } = useTopCryptosByMarketCap(5);

  const {
    data: trendingCoins,
    isLoading: isLoadingTrending,
    error: trendingError,
    refetch: refetchTrending,
  } = useTrendingCoins();

  const {
    data: marketMovers,
    isLoading: isLoadingMovers,
    error: moversError,
    refetch: refetchMovers,
  } = useMarketMovers();

  if (isLoadingCryptos || isLoadingChart) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const cryptoMetrics = topCryptos
    ? topCryptos.map((crypto) => ({
        id: crypto.id,
        title: crypto.name,
        value: formatCurrency(crypto.current_price),
        change: crypto.price_change_percentage_24h,
        icon:
          crypto.id === "bitcoin"
            ? DollarSign
            : crypto.id === "ethereum"
            ? TrendingUp
            : crypto.id === "binancecoin"
            ? Activity
            : Users,
      }))
    : [];

  const topProducts = topCryptosByMarketCap
    ? topCryptosByMarketCap.map((crypto) => ({
        id: crypto.id,
        name: crypto.name,
        sales: `${formatCompactNumber(crypto.total_volume)} Vol`,
        revenue: formatCurrency(crypto.current_price),
      }))
    : [];

  return (
    <div className="w-full space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Crypto Dashboard</h1>
        <p className="text-xs text-muted-foreground">
          Real-time cryptocurrency market data powered by CoinGecko API.
        </p>
      </header>

      {cryptosError ? (
        <ErrorMessage
          message={cryptosError.message || "Failed to load crypto data"}
          onRetry={refetchCryptos}
        />
      ) : (
        <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cryptoMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      )}

      {chartError ? (
        <ErrorMessage
          message={chartError.message || "Failed to load chart data"}
          onRetry={refetchChart}
        />
      ) : (
        <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <RevenueChart data={chartData || []} isLoading={isLoadingChart} />
          </div>
          <div className="lg:col-span-3">
            {trendingError ? (
              <ErrorMessage
                message={trendingError.message || "Failed to load trending coins"}
                onRetry={refetchTrending}
              />
            ) : (
              <TrendingCoins coins={trendingCoins || []} isLoading={isLoadingTrending} />
            )}
          </div>
        </div>
      )}

      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
        {topCryptosError ? (
          <ErrorMessage
            message={topCryptosError.message || "Failed to load top cryptos"}
            onRetry={refetchTopCryptos}
          />
        ) : (
          <TopProducts products={topProducts} isLoading={isLoadingTopCryptos} />
        )}
        
        {moversError ? (
          <ErrorMessage
            message={moversError.message || "Failed to load market movers"}
            onRetry={refetchMovers}
          />
        ) : (
          <MarketMovers movers={marketMovers || []} isLoading={isLoadingMovers} />
        )}
      </div>
    </div>
  );
}
