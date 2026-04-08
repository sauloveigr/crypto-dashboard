import { CheckCircle2, Clock } from "lucide-react";
import type { Transaction } from "@/types";
import { Card, StatusIcon } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card as="section">
      <h2 className="mb-4 text-base font-semibold">Recent Transactions</h2>
      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex items-center justify-between rounded-lg bg-muted/20 p-3 ring-1 ring-border"
          >
            <div className="flex items-center gap-3">
              <StatusIcon
                icon={transaction.status === "completed" ? CheckCircle2 : Clock}
                status={transaction.status === "completed" ? "success" : "warning"}
                size="md"
              />
              <div>
                <p className="text-xs font-medium">{transaction.customer}</p>
                <p className="text-xs text-muted-foreground">
                  {transaction.product}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold">
                {formatCurrency(transaction.amount)}
              </p>
              <time className="text-xs text-muted-foreground">
                {transaction.time}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
