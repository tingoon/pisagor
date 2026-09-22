import type { BadgeVariant } from "@pisagor/react";
import { Badge, Table } from "@pisagor/react";
import { type ReactNode, useMemo, useState } from "react";
import type { ColumnDef, SortingState } from "..";
import { DataGrid, useDataGrid } from "..";

interface Order {
  amount: number;
  customer: string;
  id: string;
  placedAt: string;
  product: string;
  status: "cancelled" | "delivered" | "pending" | "shipped";
}

const FIRST_NAMES = [
  "Alice",
  "Bruno",
  "Clara",
  "David",
  "Elena",
  "Felix",
  "Grace",
  "Hugo",
  "Iris",
  "Jonas",
  "Kira",
  "Leo",
  "Maya",
  "Noah",
  "Olivia",
];

const orderStatusVariants: Record<Order["status"], BadgeVariant> = {
  cancelled: "destructive",
  delivered: "success",
  pending: "warning",
  shipped: "info",
};

const ORDER_PRODUCTS = [
  "MacBook Pro",
  "AirPods Max",
  "Studio Display",
  "Magic Keyboard",
  "iPad Air",
] as const;

const ORDER_STATUSES = ["pending", "shipped", "delivered", "cancelled"] as const;

const orders: Order[] = Array.from({ length: 32 }, (_, index) => ({
  amount: 49 + ((index * 17) % 450),
  customer: `${FIRST_NAMES[index % FIRST_NAMES.length] ?? "Alex"} ${String.fromCharCode(65 + (index % 26))}.`,
  id: `ORD-${String(index + 1).padStart(4, "0")}`,
  placedAt: new Date(2024, index % 12, (index % 28) + 1).toISOString(),
  product: ORDER_PRODUCTS[index % ORDER_PRODUCTS.length] ?? ORDER_PRODUCTS[0],
  status: ORDER_STATUSES[index % ORDER_STATUSES.length] ?? "pending",
}));

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function DataGridShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="rounded-xl border bg-muted/20 p-3">{children}</div>
    </div>
  );
}

function OrdersTableFooter() {
  const table = useDataGrid();
  const rows = table.getFilteredRowModel().rows;
  const total = rows.reduce((sum, row) => {
    const amount = Number((row.original as { amount?: number }).amount ?? 0);
    return sum + amount;
  }, 0);
  return (
    <Table.Footer>
      <Table.Row>
        <Table.Cell
          className="font-medium"
          colSpan={Math.max(table.getVisibleLeafColumns().length - 1, 1)}
        >
          Total
        </Table.Cell>
        <Table.Cell className="text-right font-medium tabular-nums">
          {total.toLocaleString(undefined, { currency: "USD", style: "currency" })}
        </Table.Cell>
      </Table.Row>
    </Table.Footer>
  );
}

export function OrdersWithFooter() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Order>[]>(
    () => [
      { accessorKey: "id", header: "Order" },
      { accessorKey: "customer", header: "Customer" },
      { accessorKey: "product", header: "Product" },
      {
        accessorKey: "status",
        cell: ({ row }) => (
          <Badge className="capitalize" variant={orderStatusVariants[row.original.status]}>
            {row.original.status}
          </Badge>
        ),
        header: "Status",
      },
      {
        accessorKey: "amount",
        cell: ({ row }) => formatCurrency(row.original.amount),
        header: "Amount",
      },
      {
        accessorKey: "placedAt",
        cell: ({ row }) => formatDate(row.original.placedAt),
        header: "Placed",
      },
    ],
    [],
  );

  return (
    <DataGridShell>
      <DataGrid<Order>
        columns={columns}
        data={orders.slice(0, 12)}
        onSortingChange={setSorting}
        state={{ sorting }}
      >
        <DataGrid.Toolbar>
          <p className="font-medium text-sm">Sales orders with footer totals</p>
        </DataGrid.Toolbar>
        <Table>
          <Table.Header>
            <DataGrid.Header>
              <DataGrid.HeaderRow>
                <DataGrid.Head />
              </DataGrid.HeaderRow>
            </DataGrid.Header>
          </Table.Header>
          <Table.Body>
            <DataGrid.Body empty={<DataGrid.Empty colSpan={6} />}>
              <DataGrid.Row>
                <DataGrid.Cell />
              </DataGrid.Row>
            </DataGrid.Body>
          </Table.Body>
          <OrdersTableFooter />
        </Table>
      </DataGrid>
    </DataGridShell>
  );
}
