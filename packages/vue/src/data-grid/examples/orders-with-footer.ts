import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type SortingState,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import { computed, defineComponent, h, ref } from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function" ? (updater as (old: T) => T)(current) : updater;
}

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

const DataGridShell = defineComponent({
  name: "DataGridShell",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "flex w-full flex-col gap-3" }, () =>
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () => slots.default?.()),
      );
  },
});

const OrdersTableFooter = defineComponent({
  name: "OrdersTableFooter",
  setup() {
    return () => {
      const table = useDataGrid<Order>();
      const rows = table.getFilteredRowModel().rows;
      const total = rows.reduce((sum, row) => sum + row.original.amount, 0);

      return h(Table.Footer, null, () =>
        h(Table.Row, null, () => [
          h(
            Table.Cell as ArkPart,
            { class: "font-medium", colSpan: 4 },
            () => `Total (${rows.length} orders)`,
          ),
          h(Table.Cell as ArkPart, { class: "font-medium tabular-nums" }, () =>
            formatCurrency(total),
          ),
          h(Table.Cell),
        ]),
      );
    };
  },
});

export function OrdersWithFooter() {
  return {
    components: { DataGrid, DataGridShell, OrdersTableFooter, Table },
    setup() {
      const sorting = ref<SortingState>([]);

      const columns: ColumnDef<Order>[] = [
        { accessorKey: "id", header: "Order" },
        { accessorKey: "customer", header: "Customer" },
        { accessorKey: "product", header: "Product" },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<Order, unknown>) =>
            h(
              Badge as ArkPart,
              { class: "capitalize", variant: orderStatusVariants[row.original.status] },
              () => row.original.status,
            ),
          header: "Status",
        },
        {
          accessorKey: "amount",
          cell: ({ row }: CellContext<Order, unknown>) => formatCurrency(row.original.amount),
          header: "Amount",
        },
        {
          accessorKey: "placedAt",
          cell: ({ row }: CellContext<Order, unknown>) => formatDate(row.original.placedAt),
          header: "Placed",
        },
      ];

      const handleSortingChange = (
        updater: SortingState | ((old: SortingState) => SortingState),
      ) => {
        sorting.value = applyUpdater(sorting.value, updater);
      };

      const data = orders.slice(0, 12);
      const state = computed(() => ({ sorting: sorting.value }));

      return { columns, data, handleSortingChange, state };
    },
    template: `
        <DataGridShell>
          <DataGrid
            :columns="columns"
            :data="data"
            :onSortingChange="handleSortingChange"
            :state="state"
          >
            <DataGrid.Toolbar>
              <p class="font-medium text-sm">Sales orders with footer totals</p>
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
                <DataGrid.Body>
                  <DataGrid.Row>
                    <DataGrid.Cell />
                  </DataGrid.Row>
                </DataGrid.Body>
              </Table.Body>
              <OrdersTableFooter />
            </Table>
          </DataGrid>
        </DataGridShell>
      `,
  };
}
