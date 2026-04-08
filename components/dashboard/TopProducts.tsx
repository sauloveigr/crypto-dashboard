import type { Product } from "@/types";
import { Card, LoadingSpinner, CryptoListItem } from "@/components/ui";

interface TopProductsProps {
  products: Product[];
  isLoading?: boolean;
}

export function TopProducts({ products, isLoading }: TopProductsProps) {
  return (
    <Card as="section">
      <h2 className="mb-4 text-base font-semibold">Top Cryptocurrencies</h2>
      
      {isLoading ? (
        <div className="flex h-48 items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : products.length === 0 ? (
        <div className="flex h-48 items-center justify-center">
          <p className="text-sm text-muted-foreground">No data available</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {products.map((product, index) => (
            <CryptoListItem
              key={product.id}
              name={product.name}
              subtitle={typeof product.sales === 'string' ? product.sales : `${product.sales} sales`}
              value={product.revenue}
              icon="rank"
              rank={index + 1}
            />
          ))}
        </ul>
      )}
    </Card>
  );
}
