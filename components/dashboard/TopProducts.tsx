import type { Product } from "@/types";
import { Card } from "@/components/ui";

interface TopProductsProps {
  products: Product[];
}

export function TopProducts({ products }: TopProductsProps) {
  return (
    <Card as="section">
      <h2 className="mb-4 text-base font-semibold">Top Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between rounded-lg bg-muted/20 p-3.5 ring-1 ring-border transition-colors hover:bg-muted/40"
          >
            <div>
              <p className="text-xs font-medium">{product.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {product.sales} sales
              </p>
            </div>
            <span className="text-sm font-semibold">{product.revenue}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
