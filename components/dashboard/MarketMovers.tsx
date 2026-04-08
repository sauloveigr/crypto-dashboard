import type { PriceChange } from "@/types/crypto";
import { Card, LoadingSpinner, CryptoListItem } from "@/components/ui";
import { formatCurrency, formatPercentage } from "@/lib/utils";

interface MarketMoversProps {
  movers: PriceChange[];
  isLoading?: boolean;
}

export function MarketMovers({ movers, isLoading }: MarketMoversProps) {
  return (
    <Card as="section">
      <h2 className="mb-4 text-base font-semibold">Market Movers (24h)</h2>
      
      {isLoading ? (
        <div className="flex h-48 items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : movers.length === 0 ? (
        <div className="flex h-48 items-center justify-center">
          <p className="text-sm text-muted-foreground">No data available</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {movers.map((mover) => {
            const isPositive = mover.price_change_percentage_24h > 0;
            
            return (
              <CryptoListItem
                key={mover.id}
                name={mover.name}
                subtitle={mover.symbol}
                value={formatCurrency(mover.current_price)}
                valueSubtext={formatPercentage(mover.price_change_percentage_24h, 2)}
                icon={isPositive ? "up" : "down"}
                variant={isPositive ? "positive" : "negative"}
              />
            );
          })}
        </ul>
      )}
    </Card>
  );
}
