import {
  PhCaretDown,
  PhCaretRight,
  PhCaretUp,
  PhDotsThreeVertical,
  PhEye,
  PhFunnel,
  PhMagnifyingGlass,
  PhX,
} from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  InputGroup,
  Pagination,
  Select,
  Skeleton,
  Sortable,
  Spinner,
  Table,
} from "@pisagor/vue";
import { DataGrid, renderDataGridCell, useDataGrid } from "@pisagor/vue/data-grid";
import {
  type CellContext,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnPinningState,
  type ExpandedState,
  type GroupingState,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type HeaderContext,
  type PaginationState,
  type Row,
  type SortingState,
  type VisibilityState,
} from "@tanstack/vue-table";
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
  type VNodeChild,
} from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function" ? (updater as (old: T) => T)(current) : updater;
}

const meta = preview.meta({
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component: "Displays large or interactive tabular datasets with grid behaviors.",
      },
    },
  },
  subcomponents: {
    Body: DataGrid.Body,
    Cell: DataGrid.Cell,
    ColumnResizer: DataGrid.ColumnResizer,
    Empty: DataGrid.Empty,
    Footer: DataGrid.Footer,
    Head: DataGrid.Head,
    Header: DataGrid.Header,
    HeaderRow: DataGrid.HeaderRow,
    Row: DataGrid.Row,
    RowProvider: DataGrid.RowProvider,
    Toolbar: DataGrid.Toolbar,
    VirtualBody: DataGrid.VirtualBody,
  },
  title: "Components/Data Display/Data Grid",
});

// #region Sample data
interface User {
  email: string;
  id: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
}

interface FullUser {
  department: string;
  email: string;
  id: string;
  joinedAt: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "invited";
}

interface OrgNode {
  budget: number;
  id: string;
  name: string;
  subRows?: OrgNode[];
}

interface Order {
  amount: number;
  customer: string;
  id: string;
  placedAt: string;
  product: string;
  status: "cancelled" | "delivered" | "pending" | "shipped";
}

const users: User[] = [
  { email: "ava@example.com", id: "1", name: "Ava Nguyen", role: "Admin" },
  { email: "ben@example.com", id: "2", name: "Ben Carter", role: "Editor" },
  { email: "cara@example.com", id: "3", name: "Cara Diaz", role: "Viewer" },
  { email: "drew@example.com", id: "4", name: "Drew Kim", role: "Editor" },
];

const ROLES: FullUser["role"][] = ["Admin", "Editor", "Viewer"];
const STATUSES: FullUser["status"][] = ["active", "inactive", "invited"];
const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "Support"] as const;
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

const statusVariants: Record<FullUser["status"], BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};

const allUsers: FullUser[] = Array.from({ length: 48 }, (_, index) => ({
  department: DEPARTMENTS[index % DEPARTMENTS.length] ?? DEPARTMENTS[0] ?? "Engineering",
  email: `user${index + 1}@example.com`,
  id: String(index + 1),
  joinedAt: new Date(2020 + (index % 5), index % 12, (index % 28) + 1).toISOString(),
  name: `${FIRST_NAMES[index % FIRST_NAMES.length] ?? "Alex"} ${String.fromCharCode(65 + (index % 26))}.`,
  role: ROLES[index % ROLES.length] ?? "Viewer",
  status: STATUSES[index % STATUSES.length] ?? "active",
}));

const orgTree: OrgNode[] = [
  {
    budget: 1_200_000,
    id: "eng",
    name: "Engineering",
    subRows: [
      {
        budget: 480_000,
        id: "eng-fe",
        name: "Frontend",
        subRows: [
          { budget: 210_000, id: "eng-fe-ui", name: "UI Systems" },
          { budget: 270_000, id: "eng-fe-app", name: "Applications" },
        ],
      },
      {
        budget: 520_000,
        id: "eng-be",
        name: "Backend",
        subRows: [
          { budget: 300_000, id: "eng-be-api", name: "API Platform" },
          { budget: 220_000, id: "eng-be-data", name: "Data Services" },
        ],
      },
    ],
  },
  {
    budget: 640_000,
    id: "ops",
    name: "Operations",
    subRows: [
      { budget: 280_000, id: "ops-support", name: "Support" },
      { budget: 360_000, id: "ops-success", name: "Customer Success" },
    ],
  },
];

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
// #endregion

// #region Shared helpers
const SortIndicator = defineComponent({
  name: "SortIndicator",
  props: {
    direction: { default: false, type: [Boolean, String] as PropType<false | "asc" | "desc"> },
  },
  setup(props) {
    return () => {
      if (props.direction === "asc") {
        return h(PhCaretUp, { class: "size-3.5" });
      }

      if (props.direction === "desc") {
        return h(PhCaretDown, { class: "size-3.5" });
      }

      return null;
    };
  },
});

const DataGridShell = defineComponent({
  name: "DataGridShell",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "flex w-full flex-col gap-3" }, () =>
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () => slots.default?.()),
      );
  },
});

const ColumnFilterHeader = defineComponent({
  name: "ColumnFilterHeader",
  props: {
    label: { required: true, type: [String, Object] as PropType<VNodeChild> },
  },
  setup(props, { slots }) {
    return () =>
      h("div", { class: "flex w-full min-w-0 flex-col gap-1.5" }, [
        h("span", { class: "truncate" }, () => props.label),
        slots.default?.(),
      ]);
  },
});

const ColumnFilterSelect = defineComponent({
  name: "ColumnFilterSelect",
  props: {
    items: { required: true, type: Array as PropType<string[]> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: string | string[]) => void>,
    },
    value: { required: true, type: Array as PropType<string[]> },
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "w-full min-w-0 **:data-[slot=select-control]:w-full **:data-[slot=select-trigger]:h-7 **:data-[slot=select-trigger]:w-full",
        },
        () =>
          h(Select, {
            items: props.items,
            onValueChange: props.onValueChange,
            value: props.value,
          }),
      );
  },
});

const DataGridView = defineComponent({
  name: "DataGridView",
  props: {
    colSpan: { default: 5, type: Number },
    filterHead: { default: false, type: Boolean },
  },
  setup(props) {
    return () =>
      h(Table, null, () => [
        h(Table.Header, null, () =>
          h(DataGrid.Header, null, () =>
            h(DataGrid.HeaderRow, null, () => h(DataGrid.Head, { filter: props.filterHead })),
          ),
        ),
        h(Table.Body, null, () =>
          h(DataGrid.Body, { empty: h(DataGrid.Empty, { colSpan: props.colSpan }) }, () =>
            h(DataGrid.Row, null, () => h(DataGrid.Cell)),
          ),
        ),
      ]);
  },
});

const DataGridColumnLayoutView = defineComponent({
  name: "DataGridColumnLayoutView",
  props: {
    bodyCells: { required: true, type: Array as PropType<string[]> },
    colSpan: { required: true, type: Number },
    headerCells: { required: true, type: Array as PropType<string[]> },
  },
  setup(props) {
    return () =>
      h(Table, null, () => [
        h(Table.Header, null, () =>
          h(DataGrid.Header, null, () =>
            h(DataGrid.HeaderRow, null, () =>
              props.headerCells.map((columnId) => h(DataGrid.Head, { columnId, key: columnId })),
            ),
          ),
        ),
        h(Table.Body, null, () =>
          h(DataGrid.Body, { empty: h(DataGrid.Empty, { colSpan: props.colSpan }) }, () =>
            h(DataGrid.Row, null, () =>
              props.bodyCells.map((columnId) => h(DataGrid.Cell, { columnId, key: columnId })),
            ),
          ),
        ),
      ]);
  },
});

const DataGridExpandableBody = defineComponent({
  name: "DataGridExpandableBody",
  props: {
    colSpan: { required: true, type: Number },
    // biome-ignore lint/suspicious/noExplicitAny: accepts row renderers for any row shape
    renderDetail: { required: true, type: Function as PropType<(row: Row<any>) => VNodeChild> },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const rows = table.getRowModel().rows;

      if (rows.length === 0) {
        return h(DataGrid.Empty, { colSpan: props.colSpan });
      }

      return rows.flatMap((row) => [
        h(
          Table.Row,
          {
            "aria-selected": row.getIsSelected(),
            "data-part": "row",
            "data-scope": "data-grid",
            "data-state": row.getIsSelected() ? "selected" : undefined,
            key: row.id,
          },
          () =>
            row
              .getVisibleCells()
              .map((cell) =>
                h(
                  Table.Cell,
                  { "data-part": "cell", "data-scope": "data-grid", key: cell.id },
                  () => renderDataGridCell(cell),
                ),
              ),
        ),
        row.getIsExpanded()
          ? h(
              Table.Row as ArkPart,
              { class: "bg-muted/30 hover:bg-muted/30", key: `${row.id}-detail` },
              () =>
                h(Table.Cell as ArkPart, { class: "p-4", colSpan: props.colSpan }, () =>
                  props.renderDetail(row),
                ),
            )
          : null,
      ]);
    };
  },
});

const FilterChipsToolbar = defineComponent({
  name: "FilterChipsToolbar",
  setup() {
    return () => {
      const table = useDataGrid();
      const filters = table.getState().columnFilters;
      const globalFilter = table.getState().globalFilter as string | undefined;

      if (filters.length === 0 && !globalFilter) {
        return null;
      }

      return h("div", { class: "flex flex-wrap items-center gap-2" }, [
        h("span", { class: "text-muted-foreground text-xs" }, "Active filters"),
        globalFilter
          ? h(Badge as ArkPart, { class: "gap-1", variant: "secondary" }, () => [
              `Search: ${globalFilter}`,
              h(
                "button",
                {
                  "aria-label": "Clear search",
                  class: "rounded-sm hover:bg-background/60",
                  onClick: () => table.setGlobalFilter(""),
                  type: "button",
                },
                () => h(PhX, { class: "size-3" }),
              ),
            ])
          : null,
        ...filters.map((filter) =>
          h(
            Badge as ArkPart,
            { class: "gap-1 capitalize", key: filter.id, variant: "secondary" },
            () => [
              `${filter.id}: ${String(filter.value)}`,
              h(
                "button",
                {
                  "aria-label": `Remove ${filter.id} filter`,
                  class: "rounded-sm hover:bg-background/60",
                  onClick: () => table.getColumn(filter.id)?.setFilterValue(undefined),
                  type: "button",
                },
                () => h(PhX, { class: "size-3" }),
              ),
            ],
          ),
        ),
      ]);
    };
  },
});

const DataGridPaginationBar = defineComponent({
  name: "DataGridPaginationBar",
  setup() {
    return () => {
      const table = useDataGrid();
      const { pageIndex, pageSize } = table.getState().pagination;
      const total = table.getFilteredRowModel().rows.length;
      const from = total === 0 ? 0 : pageIndex * pageSize + 1;
      const to = Math.min((pageIndex + 1) * pageSize, total);
      const selectedCount = table.getFilteredSelectedRowModel().rows.length;

      return h(
        "div",
        { class: "flex flex-wrap items-center justify-between gap-3 border-t pt-3" },
        [
          h("p", { class: "text-muted-foreground text-sm" }, [
            `Showing ${from}–${to} of ${total}`,
            selectedCount > 0 ? ` · ${selectedCount} selected` : null,
          ]),
          h(Pagination as ArkPart, {
            class: "mx-0 w-auto justify-end",
            count: total,
            onPageChange: (details: { page: number }) => table.setPageIndex(details.page - 1),
            page: pageIndex + 1,
            pageSize,
          }),
        ],
      );
    };
  },
});

const ColumnVisibilityMenu = defineComponent({
  name: "ColumnVisibilityMenu",
  setup() {
    return () => {
      const table = useDataGrid();

      return h(DropdownMenu, { positioning: { placement: "bottom-end" } }, () => [
        h(DropdownMenu.Trigger, { asChild: true }, () =>
          h(Button, { size: "sm", variant: "outline" }, () => [h(PhEye), "Columns"]),
        ),
        h(DropdownMenu.Content as ArkPart, { class: "min-w-44" }, () =>
          table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) =>
              h(
                DropdownMenu.Item,
                {
                  closeOnSelect: false,
                  key: column.id,
                  onClick: () => column.toggleVisibility(!column.getIsVisible()),
                  value: column.id,
                },
                () => [h(Checkbox, { checked: column.getIsVisible(), tabIndex: -1 }), column.id],
              ),
            ),
        ),
      ]);
    };
  },
});

function sortableHeaderRenderer(label: string) {
  return (ctx: HeaderContext<FullUser, unknown>) =>
    h(
      "button",
      {
        class: "inline-flex items-center gap-1.5 font-medium",
        onClick: () => ctx.column.toggleSorting(ctx.column.getIsSorted() === "asc"),
        type: "button",
      },
      [label, h(SortIndicator, { direction: ctx.column.getIsSorted() })],
    );
}

function userColumns(options?: {
  selectable?: boolean;
  sortable?: boolean;
}): ColumnDef<FullUser>[] {
  const { selectable = false, sortable = false } = options ?? {};
  const columns: ColumnDef<FullUser>[] = [];

  if (selectable) {
    columns.push({
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        h(Checkbox, {
          "aria-label": `Select ${row.original.name}`,
          checked: row.getIsSelected(),
          onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
            row.toggleSelected(details.checked === true),
        }),
      enableHiding: false,
      enableSorting: false,
      header: ({ table }: HeaderContext<FullUser, unknown>) =>
        h(Checkbox, {
          "aria-label": "Select all on page",
          checked: table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? "indeterminate"
              : false,
          onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
            table.toggleAllPageRowsSelected(details.checked === true),
        }),
      id: "select",
      size: 40,
    });
  }

  columns.push(
    {
      accessorKey: "name",
      enableColumnFilter: true,
      enableGrouping: false,
      enableHiding: false,
      header: sortable ? sortableHeaderRenderer("Name") : "Name",
    },
    {
      accessorKey: "email",
      enableColumnFilter: true,
      header: sortable ? sortableHeaderRenderer("Email") : "Email",
    },
    {
      accessorKey: "role",
      enableColumnFilter: true,
      filterFn: "equals",
      header: sortable ? sortableHeaderRenderer("Role") : "Role",
    },
    {
      accessorKey: "department",
      header: sortable ? sortableHeaderRenderer("Department") : "Department",
    },
    {
      accessorKey: "status",
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        h(
          Badge as ArkPart,
          { class: "capitalize", variant: statusVariants[row.original.status] },
          () => row.original.status,
        ),
      enableColumnFilter: true,
      filterFn: "equals",
      header: "Status",
    },
    {
      accessorKey: "joinedAt",
      cell: ({ row }: CellContext<FullUser, unknown>) => formatDate(row.original.joinedAt),
      header: sortable ? sortableHeaderRenderer("Joined") : "Joined",
      sortingFn: "datetime",
    },
  );

  return columns;
}

const SelectionSummary = defineComponent({
  name: "SelectionSummary",
  props: {
    onClear: { required: true, type: Function as PropType<() => void> },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const selected = table.getFilteredSelectedRowModel().rows.length;
      const total = table.getFilteredRowModel().rows.length;

      if (selected === 0) {
        return null;
      }

      return h(
        "div",
        {
          class:
            "flex items-center justify-between gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2",
        },
        [
          h(
            "p",
            { class: "font-medium text-sm" },
            `${selected} of ${total} row${total === 1 ? "" : "s"} selected`,
          ),
          h(
            Button,
            { onClick: props.onClear, size: "sm", variant: "ghost" },
            () => "Clear selection",
          ),
        ],
      );
    };
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

const ManualPaginationBar = defineComponent({
  name: "ManualPaginationBar",
  props: {
    total: { required: true, type: Number },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const { pageIndex, pageSize } = table.getState().pagination;
      const from = props.total === 0 ? 0 : pageIndex * pageSize + 1;
      const to = Math.min((pageIndex + 1) * pageSize, props.total);

      return h(
        "div",
        { class: "flex flex-wrap items-center justify-between gap-3 border-t pt-3" },
        [
          h(
            "p",
            { class: "text-muted-foreground text-sm" },
            `Showing ${from}–${to} of ${props.total}`,
          ),
          h(Pagination as ArkPart, {
            class: "mx-0 w-auto justify-end",
            count: props.total,
            onPageChange: (details: { page: number }) => table.setPageIndex(details.page - 1),
            page: pageIndex + 1,
            pageSize,
          }),
        ],
      );
    };
  },
});

const GlobalSelectionSummary = defineComponent({
  name: "GlobalSelectionSummary",
  props: {
    onClear: { required: true, type: Function as PropType<() => void> },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const selected = table.getSelectedRowModel().rows.length;
      const total = table.getCoreRowModel().rows.length;

      if (selected === 0) {
        return h("p", { class: "text-muted-foreground text-sm" }, [
          "Select rows across pages — selection persists via ",
          h("code", { class: "text-xs" }, "getRowId"),
          ".",
        ]);
      }

      return h(
        "div",
        {
          class:
            "flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-3 py-2",
        },
        [
          h(
            "p",
            { class: "font-medium text-sm" },
            `${selected} of ${total} users selected across all pages`,
          ),
          h(Button, { onClick: props.onClear, size: "sm", variant: "outline" }, () => "Clear all"),
        ],
      );
    };
  },
});

const PageSizeSelect = defineComponent({
  name: "PageSizeSelect",
  props: {
    onChange: { required: true, type: Function as PropType<(pageSize: number) => void> },
    value: { required: true, type: Number },
  },
  setup(props) {
    return () =>
      h("div", { class: "flex items-center gap-2" }, [
        h("span", { class: "text-muted-foreground text-sm" }, "Rows per page"),
        h(Select, {
          items: ["5", "8", "12", "20"],
          onValueChange: (next: string | string[]) =>
            props.onChange(Number(Array.isArray(next) ? next[0] : next)),
          value: [String(props.value)],
        }),
      ]);
  },
});

function countLeaves(row: Row<unknown>): number {
  if (!row.subRows.length) {
    return 1;
  }

  return row.subRows.reduce((total, subRow) => total + countLeaves(subRow), 0);
}
// #endregion

export const Default = meta.story({
  render: () => ({
    components: { Badge, DataGrid: DataGrid as unknown as typeof DataGrid, Table },
    setup() {
      const columns = [
        { accessorKey: "name", header: "Name", id: "name" },
        { accessorKey: "email", header: "Email", id: "email" },
        {
          accessorKey: "role",
          cell: (ctx: { getValue: (column: unknown) => unknown; column: unknown }) => {
            const role = ctx.getValue(ctx.column) as User["role"];
            const variant: "success" | "secondary" | "info" =
              role === "Admin" ? "success" : role === "Editor" ? "secondary" : "info";
            return h(Badge as ArkPart, { class: "capitalize", variant }, () => role);
          },
          header: "Role",
          id: "role",
        },
      ];

      return { columns, users };
    },
    template: `
      <DataGrid :columns="columns" :data="users" :getRowId="(row) => row.id">
        <DataGrid.Toolbar>
          <p class="text-muted-foreground text-sm">Basic grid layout.</p>
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
        </Table>
      </DataGrid>
    `,
  }),
});

export const FilterHead = meta.story({
  render: () => ({
    components: { DataGrid: DataGrid as unknown as typeof DataGrid, Table },
    setup() {
      const columns = [
        { accessorKey: "name", header: "Name", id: "name" },
        { accessorKey: "email", header: "Email", id: "email" },
      ];

      return { columns, users };
    },
    template: `
      <DataGrid :columns="columns" :data="users" :getRowId="(row) => row.id">
        <Table>
          <Table.Header>
            <DataGrid.Header>
              <DataGrid.HeaderRow>
                <DataGrid.Head filter />
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
        </Table>
      </DataGrid>
    `,
  }),
});

export const Sorting = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView },
    setup() {
      const sorting = ref<SortingState>([{ desc: false, id: "name" }]);
      const columns = userColumns({ sortable: true });
      const data = allUsers.slice(0, 12);
      const sortedRowModel = getSortedRowModel();
      const isMultiSortEvent = (event: unknown) => (event as MouseEvent).shiftKey;

      const handleSortingChange = (
        updater: SortingState | ((old: SortingState) => SortingState),
      ) => {
        sorting.value = applyUpdater(sorting.value, updater);
      };

      const state = computed(() => ({ sorting: sorting.value }));

      return { columns, data, handleSortingChange, isMultiSortEvent, sortedRowModel, state };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :enableMultiSort="true"
          :getSortedRowModel="sortedRowModel"
          :isMultiSortEvent="isMultiSortEvent"
          :onSortingChange="handleSortingChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Multi-sort enabled — shift-click column headers to add secondary sorts.
            </p>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const Paginated = meta.story({
  render: () => ({
    components: { DataGrid, DataGridPaginationBar, DataGridShell, DataGridView, PageSizeSelect },
    setup() {
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 8 });
      const columns = userColumns({ sortable: true });
      const paginationRowModel = getPaginationRowModel();
      const sortedRowModel = getSortedRowModel();

      const handlePaginationChange = (
        updater: PaginationState | ((old: PaginationState) => PaginationState),
      ) => {
        pagination.value = applyUpdater(pagination.value, updater);
      };

      const handlePageSizeChange = (pageSize: number) => {
        pagination.value = { ...pagination.value, pageIndex: 0, pageSize };
      };

      const state = computed(() => ({ pagination: pagination.value }));

      return {
        allUsers,
        columns,
        handlePageSizeChange,
        handlePaginationChange,
        paginationRowModel,
        sortedRowModel,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="allUsers"
          :getPaginationRowModel="paginationRowModel"
          :getSortedRowModel="sortedRowModel"
          :onPaginationChange="handlePaginationChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <p class="font-medium text-sm">Paginated directory</p>
              <PageSizeSelect :onChange="handlePageSizeChange" :value="state.pagination.pageSize" />
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" />
          <DataGridPaginationBar />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ColumnFilters = meta.story({
  render: () => ({
    components: {
      Button,
      ColumnFilterHeader,
      ColumnFilterSelect,
      DataGrid,
      DataGridPaginationBar,
      DataGridShell,
      DataGridView,
      InputGroup,
      PhFunnel,
      PhMagnifyingGlass,
    },
    setup() {
      const columnFilters = ref<ColumnFiltersState>([]);
      const globalFilter = ref("");
      const baseColumns = userColumns();

      const columnsWithFilters = baseColumns.map((column) => {
        if (!("accessorKey" in column)) {
          return column;
        }

        if (column.accessorKey === "role" || column.accessorKey === "status") {
          return {
            ...column,
            header: ({ column: tableColumn }: HeaderContext<FullUser, unknown>) => {
              const values = Array.from(
                tableColumn.getFacetedUniqueValues()?.keys() ?? [],
              ).sort() as string[];

              return h(ColumnFilterHeader, { label: column.header as string }, () =>
                h(ColumnFilterSelect, {
                  items: ["All", ...values],
                  onValueChange: (value: string | string[]) => {
                    const next = Array.isArray(value) ? value[0] : value;
                    tableColumn.setFilterValue(next === "All" ? undefined : next);
                  },
                  value: [(tableColumn.getFilterValue() as string | undefined) ?? "All"],
                }),
              );
            },
          };
        }

        if (column.accessorKey === "name" || column.accessorKey === "email") {
          return {
            ...column,
            header: ({ column: tableColumn }: HeaderContext<FullUser, unknown>) =>
              h(ColumnFilterHeader, { label: column.header as string }, () =>
                h("input", {
                  "aria-label": `Filter ${String(column.accessorKey)}`,
                  class:
                    "h-7 w-full min-w-0 rounded-md border bg-transparent px-2 text-sm outline-none focus:ring-1 focus:ring-primary",
                  onInput: (event: Event) =>
                    tableColumn.setFilterValue((event.target as HTMLInputElement).value),
                  placeholder: "Filter…",
                  value: (tableColumn.getFilterValue() as string | undefined) ?? "",
                }),
              ),
          };
        }

        if (column.accessorKey === "department" || column.accessorKey === "joinedAt") {
          return {
            ...column,
            header: () => h(ColumnFilterHeader, { label: column.header as string }),
          };
        }

        return column;
      });

      const facetedRowModel = getFacetedRowModel();
      const facetedUniqueValues = getFacetedUniqueValues();
      const filteredRowModel = getFilteredRowModel();
      const paginationRowModel = getPaginationRowModel();
      const initialState = { pagination: { pageIndex: 0, pageSize: 8 } };

      const handleColumnFiltersChange = (
        updater: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState),
      ) => {
        columnFilters.value = applyUpdater(columnFilters.value, updater);
      };

      const handleGlobalFilterChange = (updater: string | ((old: string) => string)) => {
        globalFilter.value = applyUpdater(globalFilter.value, updater);
      };

      const handleGlobalInput = (value: string) => {
        globalFilter.value = value;
      };

      const clearFilters = () => {
        columnFilters.value = [];
        globalFilter.value = "";
      };

      const state = computed(() => ({
        columnFilters: columnFilters.value,
        globalFilter: globalFilter.value,
      }));

      return {
        allUsers,
        clearFilters,
        columnsWithFilters,
        facetedRowModel,
        facetedUniqueValues,
        filteredRowModel,
        globalFilter,
        handleColumnFiltersChange,
        handleGlobalFilterChange,
        handleGlobalInput,
        initialState,
        paginationRowModel,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columnsWithFilters"
          :data="allUsers"
          :getFacetedRowModel="facetedRowModel"
          :getFacetedUniqueValues="facetedUniqueValues"
          :getFilteredRowModel="filteredRowModel"
          :getPaginationRowModel="paginationRowModel"
          :initialState="initialState"
          :onColumnFiltersChange="handleColumnFiltersChange"
          :onGlobalFilterChange="handleGlobalFilterChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <div class="flex flex-wrap items-center gap-2">
              <InputGroup>
                <InputGroup.Addon>
                  <PhMagnifyingGlass />
                </InputGroup.Addon>
                <InputGroup.Input
                  aria-label="Search all columns"
                  :onValueChange="handleGlobalInput"
                  placeholder="Global search…"
                  :value="globalFilter"
                />
              </InputGroup>
              <Button @click="clearFilters" size="sm" variant="outline">
                <PhFunnel />
                Clear filters
              </Button>
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" filterHead />
          <DataGridPaginationBar />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ColumnVisibility = meta.story({
  render: () => ({
    components: { ColumnVisibilityMenu, DataGrid, DataGridShell, DataGridView },
    setup() {
      const columnVisibility = ref<VisibilityState>({ department: false, joinedAt: false });
      const columns = userColumns();

      const handleColumnVisibilityChange = (
        updater: VisibilityState | ((old: VisibilityState) => VisibilityState),
      ) => {
        columnVisibility.value = applyUpdater(columnVisibility.value, updater);
      };

      const state = computed(() => ({ columnVisibility: columnVisibility.value }));
      const data = allUsers.slice(0, 10);

      return { columns, data, handleColumnVisibilityChange, state };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :onColumnVisibilityChange="handleColumnVisibilityChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <div class="flex items-center justify-between gap-3">
              <p class="text-muted-foreground text-sm">
                Department and Joined columns start hidden — toggle from the menu.
              </p>
              <ColumnVisibilityMenu />
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const RowSelection = meta.story({
  render: () => ({
    components: { DataGrid, DataGridPaginationBar, DataGridShell, DataGridView, SelectionSummary },
    setup() {
      const rowSelection = ref<Record<string, boolean>>({});
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 6 });
      const columns = userColumns({ selectable: true });
      const paginationRowModel = getPaginationRowModel();

      const handlePaginationChange = (
        updater: PaginationState | ((old: PaginationState) => PaginationState),
      ) => {
        pagination.value = applyUpdater(pagination.value, updater);
      };

      const handleRowSelectionChange = (
        updater:
          | Record<string, boolean>
          | ((old: Record<string, boolean>) => Record<string, boolean>),
      ) => {
        rowSelection.value = applyUpdater(rowSelection.value, updater);
      };

      const clearSelection = () => {
        rowSelection.value = {};
      };

      const state = computed(() => ({
        pagination: pagination.value,
        rowSelection: rowSelection.value,
      }));

      return {
        allUsers,
        clearSelection,
        columns,
        handlePaginationChange,
        handleRowSelectionChange,
        paginationRowModel,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="allUsers"
          :enableRowSelection="true"
          :getPaginationRowModel="paginationRowModel"
          :onPaginationChange="handlePaginationChange"
          :onRowSelectionChange="handleRowSelectionChange"
          :state="state"
        >
          <DataGridView :colSpan="7" />
          <DataGridPaginationBar />
          <DataGrid.Footer>
            <SelectionSummary :onClear="clearSelection" />
          </DataGrid.Footer>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ExpandingRows = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView },
    setup() {
      const expanded = ref<ExpandedState>({ eng: true });

      const columns: ColumnDef<OrgNode>[] = [
        {
          cell: ({ row }: CellContext<OrgNode, unknown>) =>
            h(
              "div",
              {
                class: "flex items-center gap-2",
                style: { paddingInlineStart: `${row.depth * 1.25}rem` },
              },
              [
                row.getCanExpand()
                  ? h(
                      "button",
                      {
                        "aria-label": row.getIsExpanded() ? "Collapse" : "Expand",
                        class:
                          "inline-flex size-6 items-center justify-center rounded-md hover:bg-muted",
                        onClick: row.getToggleExpandedHandler(),
                        type: "button",
                      },
                      () =>
                        row.getIsExpanded()
                          ? h(PhCaretDown, { class: "size-3.5" })
                          : h(PhCaretRight, { class: "size-3.5" }),
                    )
                  : h("span", { class: "inline-block size-6" }),
                h(
                  "span",
                  { class: row.subRows?.length ? "font-medium" : undefined },
                  row.original.name,
                ),
              ],
            ),
          header: "Department",
          id: "name",
        },
        {
          accessorKey: "budget",
          cell: ({ row }: CellContext<OrgNode, unknown>) => formatCurrency(row.original.budget),
          header: "Budget",
        },
        {
          cell: ({ row }: CellContext<OrgNode, unknown>) => {
            const leafCount = countLeaves(row as Row<unknown>);
            return h(
              "span",
              { class: "text-muted-foreground tabular-nums" },
              row.subRows?.length ? `${row.subRows.length} teams · ${leafCount} units` : "Leaf",
            );
          },
          header: "Structure",
          id: "structure",
        },
      ];

      const expandedRowModel = getExpandedRowModel();
      const getRowId = (row: OrgNode) => row.id;
      const getSubRows = (row: OrgNode) => row.subRows;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const state = computed(() => ({ expanded: expanded.value }));

      return {
        columns,
        expandedRowModel,
        getRowId,
        getSubRows,
        handleExpandedChange,
        orgTree,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="orgTree"
          :getExpandedRowModel="expandedRowModel"
          :getRowId="getRowId"
          :getSubRows="getSubRows"
          :onExpandedChange="handleExpandedChange"
          :paginateExpandedRows="false"
          :state="state"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Hierarchical rows via <code class="text-xs">getSubRows</code> and
              <code class="text-xs">getExpandedRowModel</code>.
            </p>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="3" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const GroupedRows = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView, Select },
    setup() {
      const grouping = ref<GroupingState>(["role"]);
      const expanded = ref<ExpandedState>(true);

      const columns: ColumnDef<FullUser>[] = [
        {
          accessorKey: "role",
          aggregatedCell: ({ getValue }) => `${getValue()} members`,
          aggregationFn: "count",
          cell: ({ row }: CellContext<FullUser, unknown>) => {
            if (row.getIsGrouped()) {
              return h(
                "button",
                {
                  class: "inline-flex items-center gap-1.5 font-medium",
                  onClick: row.getToggleExpandedHandler(),
                  type: "button",
                },
                [
                  row.getIsExpanded()
                    ? h(PhCaretDown, { class: "size-3.5" })
                    : h(PhCaretRight, { class: "size-3.5" }),
                  row.groupingValue as string,
                ],
              );
            }

            return row.original.role;
          },
          header: "Role",
        },
        {
          accessorKey: "name",
          aggregatedCell: () => null,
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped() ? null : row.original.name,
          header: "Name",
        },
        {
          accessorKey: "department",
          aggregatedCell: ({ getValue }) => `${getValue()} depts`,
          aggregationFn: "uniqueCount",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped() ? null : row.original.department,
          header: "Department",
        },
        {
          accessorKey: "status",
          aggregatedCell: ({ getValue }) => `${getValue()} rows`,
          aggregationFn: "count",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped()
              ? null
              : h(
                  Badge as ArkPart,
                  { class: "capitalize", variant: statusVariants[row.original.status] },
                  () => row.original.status,
                ),
          header: "Status",
        },
      ];

      const expandedRowModel = getExpandedRowModel();
      const groupedRowModel = getGroupedRowModel();
      const getRowId = (row: FullUser) => row.id;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const handleGroupingChange = (
        updater: GroupingState | ((old: GroupingState) => GroupingState),
      ) => {
        grouping.value = applyUpdater(grouping.value, updater);
      };

      const handleGroupByChange = (value: string | string[]) => {
        const next = Array.isArray(value) ? value[0] : value;
        grouping.value = [next ?? "role"];
      };

      const data = allUsers.slice(0, 24);
      const state = computed(() => ({ expanded: expanded.value, grouping: grouping.value }));

      return {
        columns,
        data,
        expandedRowModel,
        getRowId,
        groupedRowModel,
        grouping,
        handleExpandedChange,
        handleGroupByChange,
        handleGroupingChange,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :getExpandedRowModel="expandedRowModel"
          :getGroupedRowModel="groupedRowModel"
          :getRowId="getRowId"
          :onExpandedChange="handleExpandedChange"
          :onGroupingChange="handleGroupingChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-muted-foreground text-sm">Group by</span>
              <Select
                :items="['role', 'department', 'status']"
                :onValueChange="handleGroupByChange"
                :value="[grouping[0] ?? 'role']"
              />
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="4" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ColumnLayout = meta.story({
  render: () => ({
    components: { DataGrid, DataGridColumnLayoutView, DataGridShell },
    setup() {
      const columns = userColumns();
      const bodyCells = ["status", "name", "email", "role", "department", "joinedAt"];
      const headerCells = ["status", "name", "email", "role", "department", "joinedAt"];
      const data = allUsers.slice(0, 8);

      return { bodyCells, columns, data, headerCells };
    },
    template: `
      <DataGridShell>
        <DataGrid :columns="columns" :data="data">
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Explicit <code class="text-xs">columnId</code> on each Head/Cell for custom order and
              styling.
            </p>
          </DataGrid.Toolbar>
          <DataGridColumnLayoutView :bodyCells="bodyCells" :colSpan="6" :headerCells="headerCells" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const RichCells = meta.story({
  render: () => ({
    components: { Avatar, DataGrid, DataGridShell, DataGridView },
    setup() {
      const columns: ColumnDef<FullUser>[] = [
        {
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h("div", { class: "flex items-center gap-3" }, [
              h(Avatar, {
                fallback: row.original.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2),
                size: "sm",
              }),
              h("div", { class: "min-w-0" }, [
                h("p", { class: "truncate font-medium" }, row.original.name),
                h("p", { class: "truncate text-muted-foreground text-xs" }, row.original.email),
              ]),
            ]),
          header: "Member",
          id: "member",
        },
        {
          accessorKey: "role",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(Badge, { variant: "secondary" }, () => row.original.role),
          header: "Role",
        },
        {
          accessorKey: "department",
          header: "Department",
        },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              Badge as ArkPart,
              { class: "capitalize", variant: statusVariants[row.original.status] },
              () => row.original.status,
            ),
          header: "Status",
        },
        {
          accessorKey: "joinedAt",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              "span",
              { class: "text-muted-foreground tabular-nums" },
              formatDate(row.original.joinedAt),
            ),
          header: "Joined",
        },
      ];

      const data = allUsers.slice(0, 10);

      return { columns, data };
    },
    template: `
      <DataGridShell>
        <DataGrid :columns="columns" :data="data">
          <DataGridView :colSpan="5" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const RowDetails = meta.story({
  render: () => ({
    components: { DataGrid, DataGridExpandableBody, DataGridShell, Table },
    setup() {
      const expanded = ref<ExpandedState>({ "1": true });

      const columns: ColumnDef<FullUser>[] = [
        {
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              "button",
              {
                "aria-label": row.getIsExpanded() ? "Collapse details" : "Expand details",
                class: "inline-flex size-6 items-center justify-center rounded-md hover:bg-muted",
                onClick: row.getToggleExpandedHandler(),
                type: "button",
              },
              () =>
                row.getIsExpanded()
                  ? h(PhCaretDown, { class: "size-3.5" })
                  : h(PhCaretRight, { class: "size-3.5" }),
            ),
          header: "",
          id: "expander",
          size: 40,
        },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "role", header: "Role" },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              Badge as ArkPart,
              { class: "capitalize", variant: statusVariants[row.original.status] },
              () => row.original.status,
            ),
          header: "Status",
        },
      ];

      const getRowCanExpand = () => true;
      const getRowId = (row: FullUser) => row.id;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const data = allUsers.slice(0, 8);
      const state = computed(() => ({ expanded: expanded.value }));

      const renderDetail = (row: Row<FullUser>) =>
        h("div", { class: "grid gap-3 sm:grid-cols-2" }, [
          h("div", null, [
            h("p", { class: "font-medium text-sm" }, "Profile"),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.name),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.email),
          ]),
          h("div", null, [
            h("p", { class: "font-medium text-sm" }, "Organization"),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.department),
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              `Joined ${formatDate(row.original.joinedAt)}`,
            ),
          ]),
        ]);

      return {
        columns,
        data,
        getRowCanExpand,
        getRowId,
        handleExpandedChange,
        renderDetail,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :getRowCanExpand="getRowCanExpand"
          :getRowId="getRowId"
          :onExpandedChange="handleExpandedChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Expand rows for inline detail panels — custom body via
              <code class="text-xs">useDataGrid</code> + <code class="text-xs">flexRender</code>.
            </p>
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
              <DataGridExpandableBody :colSpan="5" :renderDetail="renderDetail" />
            </Table.Body>
          </Table>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const OrdersWithFooter = meta.story({
  render: () => ({
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

      const sortedRowModel = getSortedRowModel();

      const handleSortingChange = (
        updater: SortingState | ((old: SortingState) => SortingState),
      ) => {
        sorting.value = applyUpdater(sorting.value, updater);
      };

      const data = orders.slice(0, 12);
      const state = computed(() => ({ sorting: sorting.value }));

      return { columns, data, handleSortingChange, sortedRowModel, state };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :getSortedRowModel="sortedRowModel"
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
  }),
});

export const ManualPagination = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView, ManualPaginationBar, Spinner },
    setup() {
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 6 });
      const sorting = ref<SortingState>([{ desc: false, id: "name" }]);
      const isFetching = ref(false);
      const columns = userColumns({ sortable: true });

      const sortedData = computed(() => {
        const next = [...allUsers];
        const sort = sorting.value[0];

        if (!sort) {
          return next;
        }

        next.sort((left, right) => {
          const leftValue = left[sort.id as keyof FullUser];
          const rightValue = right[sort.id as keyof FullUser];
          const comparison = String(leftValue).localeCompare(String(rightValue));
          return sort.desc ? -comparison : comparison;
        });

        return next;
      });

      const pageCount = computed(() =>
        Math.ceil(sortedData.value.length / pagination.value.pageSize),
      );
      const pageData = computed(() =>
        sortedData.value.slice(
          pagination.value.pageIndex * pagination.value.pageSize,
          (pagination.value.pageIndex + 1) * pagination.value.pageSize,
        ),
      );

      let fetchTimer: number | undefined;

      const simulateFetch = () => {
        isFetching.value = true;
        window.clearTimeout(fetchTimer);
        fetchTimer = window.setTimeout(() => {
          isFetching.value = false;
        }, 450);
      };

      onMounted(simulateFetch);
      onBeforeUnmount(() => window.clearTimeout(fetchTimer));

      const handlePaginationChange = (
        updater: PaginationState | ((old: PaginationState) => PaginationState),
      ) => {
        pagination.value = applyUpdater(pagination.value, updater);
        simulateFetch();
      };

      const handleSortingChange = (
        updater: SortingState | ((old: SortingState) => SortingState),
      ) => {
        sorting.value = applyUpdater(sorting.value, updater);
        simulateFetch();
      };

      const state = computed(() => ({ pagination: pagination.value, sorting: sorting.value }));

      return {
        columns,
        handlePaginationChange,
        handleSortingChange,
        isFetching,
        pageCount,
        pageData,
        sortedData,
        state,
      };
    },
    template: `
      <DataGridShell>
        <div class="relative">
          <div
            v-if="isFetching"
            class="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/70"
          >
            <Spinner />
          </div>
          <DataGrid
            :columns="columns"
            :data="pageData"
            :manualPagination="true"
            :manualSorting="true"
            :onPaginationChange="handlePaginationChange"
            :onSortingChange="handleSortingChange"
            :pageCount="pageCount"
            :state="state"
          >
            <DataGrid.Toolbar>
              <p class="text-muted-foreground text-sm">
                Server-style table: <code class="text-xs">manualPagination</code> +
                <code class="text-xs">manualSorting</code> with a simulated fetch delay.
              </p>
            </DataGrid.Toolbar>
            <DataGridView :colSpan="6" />
            <ManualPaginationBar :total="sortedData.length" />
          </DataGrid>
        </div>
      </DataGridShell>
    `,
  }),
});

export const GlobalSelection = meta.story({
  render: () => ({
    components: {
      DataGrid,
      DataGridPaginationBar,
      DataGridShell,
      DataGridView,
      GlobalSelectionSummary,
    },
    setup() {
      const rowSelection = ref<Record<string, boolean>>({ "2": true, "5": true });
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 6 });
      const columns = userColumns({ selectable: true });
      const paginationRowModel = getPaginationRowModel();
      const getRowId = (row: FullUser) => row.id;

      const handlePaginationChange = (
        updater: PaginationState | ((old: PaginationState) => PaginationState),
      ) => {
        pagination.value = applyUpdater(pagination.value, updater);
      };

      const handleRowSelectionChange = (
        updater:
          | Record<string, boolean>
          | ((old: Record<string, boolean>) => Record<string, boolean>),
      ) => {
        rowSelection.value = applyUpdater(rowSelection.value, updater);
      };

      const clearSelection = () => {
        rowSelection.value = {};
      };

      const state = computed(() => ({
        pagination: pagination.value,
        rowSelection: rowSelection.value,
      }));

      return {
        allUsers,
        clearSelection,
        columns,
        getRowId,
        handlePaginationChange,
        handleRowSelectionChange,
        paginationRowModel,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="allUsers"
          :enableRowSelection="true"
          :getPaginationRowModel="paginationRowModel"
          :getRowId="getRowId"
          :onPaginationChange="handlePaginationChange"
          :onRowSelectionChange="handleRowSelectionChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <GlobalSelectionSummary :onClear="clearSelection" />
          </DataGrid.Toolbar>
          <DataGridView :colSpan="7" />
          <DataGridPaginationBar />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const LoadingState = meta.story({
  render: () => ({
    components: { Button, DataGrid, DataGridShell, DataGridView, Skeleton, Table },
    setup() {
      const isLoading = ref(true);
      const columns = userColumns();
      let loadTimer: number | undefined;

      const reload = () => {
        isLoading.value = true;
        window.clearTimeout(loadTimer);
        loadTimer = window.setTimeout(() => {
          isLoading.value = false;
        }, 1200);
      };

      onMounted(reload);
      onBeforeUnmount(() => window.clearTimeout(loadTimer));

      const skeletonRows = Array.from({ length: 6 }, (_, index) => `skeleton-row-${index}`);
      const skeletonLabels = ["Name", "Email", "Role", "Department", "Status", "Joined"];
      const data = allUsers.slice(0, 8);

      return { columns, data, isLoading, reload, skeletonLabels, skeletonRows };
    },
    template: `
      <DataGridShell>
        <template v-if="isLoading">
          <div class="mb-3 flex items-center justify-between gap-3">
            <p class="font-medium text-sm">Initial data load</p>
            <Button @click="reload" size="sm" variant="outline">Reload</Button>
          </div>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head v-for="label in skeletonLabels" :key="label">{{ label }}</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row v-for="rowKey in skeletonRows" :key="rowKey">
                <Table.Cell>
                  <div class="flex items-center gap-3">
                    <Skeleton.Circle class="size-8" />
                    <div class="flex flex-1 flex-col gap-1.5">
                      <Skeleton class="h-3 w-28" />
                      <Skeleton class="h-3 w-40" />
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell><Skeleton class="h-3 w-16" /></Table.Cell>
                <Table.Cell><Skeleton class="h-3 w-24" /></Table.Cell>
                <Table.Cell><Skeleton class="h-5 w-16 rounded-full" /></Table.Cell>
                <Table.Cell><Skeleton class="h-3 w-20" /></Table.Cell>
                <Table.Cell><Skeleton class="h-3 w-24" /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </template>
        <DataGrid v-else :columns="columns" :data="data">
          <DataGrid.Toolbar>
            <div class="flex items-center justify-between gap-3">
              <p class="font-medium text-sm">Initial data load</p>
              <Button @click="reload" size="sm" variant="outline">Reload</Button>
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const StripedVariant = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, Table },
    setup() {
      const columns = userColumns({ sortable: true });
      const data = allUsers.slice(0, 10);

      return { columns, data };
    },
    template: `
      <DataGridShell>
        <DataGrid :columns="columns" :data="data">
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">Striped rows via Table variant.</p>
          </DataGrid.Toolbar>
          <Table isHoverable variant="striped">
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
          </Table>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ColumnPinning = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, PhDotsThreeVertical, Table },
    setup() {
      const columnPinning = ref<ColumnPinningState>({ left: ["name"], right: ["actions"] });

      const columns: (ColumnDef<FullUser> & {
        id: string;
        meta?: { pinned?: "left" | "right" };
      })[] = [
        {
          accessorKey: "name",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h("span", { class: "font-medium" }, row.original.name),
          header: "Name",
          id: "name",
          meta: { pinned: "left" },
        },
        { accessorKey: "email", header: "Email", id: "email" },
        { accessorKey: "role", header: "Role", id: "role" },
        { accessorKey: "department", header: "Department", id: "department" },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              Badge as ArkPart,
              { class: "capitalize", variant: statusVariants[row.original.status] },
              () => row.original.status,
            ),
          header: "Status",
          id: "status",
        },
        {
          cell: () =>
            h(Button, { "aria-label": "Row actions", size: "icon-sm", variant: "ghost" }, () =>
              h(PhDotsThreeVertical),
            ),
          header: "",
          id: "actions",
          meta: { pinned: "right" },
          size: 48,
        },
      ];

      const pinnedClass = (pinned: "left" | "right" | undefined) =>
        pinned === "left"
          ? "sticky inset-s-0 z-10 bg-background shadow-[inset_-1px_0_0_var(--border)]"
          : pinned === "right"
            ? "sticky inset-e-0 z-10 bg-background shadow-[inset_1px_0_0_var(--border)]"
            : undefined;

      const handleColumnPinningChange = (
        updater: ColumnPinningState | ((old: ColumnPinningState) => ColumnPinningState),
      ) => {
        columnPinning.value = applyUpdater(columnPinning.value, updater);
      };

      const data = allUsers.slice(0, 10);
      const state = computed(() => ({ columnPinning: columnPinning.value }));

      return { columns, data, handleColumnPinningChange, pinnedClass, state };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :enableColumnPinning="true"
          :onColumnPinningChange="handleColumnPinningChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Name pinned left, actions pinned right — scroll horizontally to see pinning.
            </p>
          </DataGrid.Toolbar>
          <Table class="min-w-[960px]">
            <Table.Header>
              <DataGrid.Header>
                <DataGrid.HeaderRow>
                  <DataGrid.Head
                    v-for="column in columns"
                    :class="pinnedClass(column.meta?.pinned)"
                    :columnId="column.id"
                    :key="column.id"
                  />
                </DataGrid.HeaderRow>
              </DataGrid.Header>
            </Table.Header>
            <Table.Body>
              <DataGrid.Body>
                <DataGrid.Row>
                  <DataGrid.Cell
                    v-for="column in columns"
                    :class="pinnedClass(column.meta?.pinned)"
                    :columnId="column.id"
                    :key="column.id"
                  />
                </DataGrid.Row>
              </DataGrid.Body>
            </Table.Body>
          </Table>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ActiveFilterChips = meta.story({
  render: () => ({
    components: {
      DataGrid,
      DataGridPaginationBar,
      DataGridShell,
      DataGridView,
      FilterChipsToolbar,
      InputGroup,
      PhMagnifyingGlass,
    },
    setup() {
      const columnFilters = ref<ColumnFiltersState>([{ id: "role", value: "Admin" }]);
      const globalFilter = ref("alice");
      const columns = userColumns();
      const filteredRowModel = getFilteredRowModel();
      const paginationRowModel = getPaginationRowModel();
      const initialState = { pagination: { pageIndex: 0, pageSize: 8 } };

      const handleColumnFiltersChange = (
        updater: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState),
      ) => {
        columnFilters.value = applyUpdater(columnFilters.value, updater);
      };

      const handleGlobalFilterChange = (updater: string | ((old: string) => string)) => {
        globalFilter.value = applyUpdater(globalFilter.value, updater);
      };

      const handleGlobalInput = (value: string) => {
        globalFilter.value = value;
      };

      const state = computed(() => ({
        columnFilters: columnFilters.value,
        globalFilter: globalFilter.value,
      }));

      return {
        allUsers,
        columns,
        filteredRowModel,
        globalFilter,
        handleColumnFiltersChange,
        handleGlobalFilterChange,
        handleGlobalInput,
        initialState,
        paginationRowModel,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="allUsers"
          :getFilteredRowModel="filteredRowModel"
          :getPaginationRowModel="paginationRowModel"
          :initialState="initialState"
          :onColumnFiltersChange="handleColumnFiltersChange"
          :onGlobalFilterChange="handleGlobalFilterChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <div class="flex flex-col gap-3">
              <InputGroup>
                <InputGroup.Addon>
                  <PhMagnifyingGlass />
                </InputGroup.Addon>
                <InputGroup.Input
                  aria-label="Search users"
                  :onValueChange="handleGlobalInput"
                  placeholder="Search…"
                  :value="globalFilter"
                />
              </InputGroup>
              <FilterChipsToolbar />
            </div>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="6" />
          <DataGridPaginationBar />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const MultiGrouping = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView },
    setup() {
      const grouping = ref<GroupingState>(["department", "role"]);
      const expanded = ref<ExpandedState>(true);

      const columns: ColumnDef<FullUser>[] = [
        {
          accessorKey: "department",
          aggregationFn: "count",
          cell: ({ row }: CellContext<FullUser, unknown>) => {
            if (row.getIsGrouped()) {
              return h(
                "button",
                {
                  class: "inline-flex items-center gap-1.5 font-medium",
                  onClick: row.getToggleExpandedHandler(),
                  type: "button",
                },
                [
                  row.getIsExpanded()
                    ? h(PhCaretDown, { class: "size-3.5" })
                    : h(PhCaretRight, { class: "size-3.5" }),
                  String(row.groupingValue),
                ],
              );
            }

            return row.original.department;
          },
          header: "Department",
        },
        {
          accessorKey: "role",
          aggregatedCell: ({ getValue }) => `${getValue()} users`,
          aggregationFn: "count",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped()
              ? `${row.groupingValue} (${row.subRows?.length ?? 0})`
              : row.original.role,
          header: "Role",
        },
        {
          accessorKey: "name",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped() ? null : row.original.name,
          header: "Name",
        },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            row.getIsGrouped()
              ? null
              : h(
                  Badge as ArkPart,
                  { class: "capitalize", variant: statusVariants[row.original.status] },
                  () => row.original.status,
                ),
          header: "Status",
        },
      ];

      const expandedRowModel = getExpandedRowModel();
      const groupedRowModel = getGroupedRowModel();
      const getRowId = (row: FullUser) => row.id;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const handleGroupingChange = (
        updater: GroupingState | ((old: GroupingState) => GroupingState),
      ) => {
        grouping.value = applyUpdater(grouping.value, updater);
      };

      const data = allUsers.slice(0, 30);
      const state = computed(() => ({ expanded: expanded.value, grouping: grouping.value }));

      return {
        columns,
        data,
        expandedRowModel,
        getRowId,
        groupedRowModel,
        handleExpandedChange,
        handleGroupingChange,
        state,
      };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :getExpandedRowModel="expandedRowModel"
          :getGroupedRowModel="groupedRowModel"
          :getRowId="getRowId"
          :onExpandedChange="handleExpandedChange"
          :onGroupingChange="handleGroupingChange"
          :state="state"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">Nested grouping by department, then role.</p>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="4" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const ColumnResize = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, DataGridView },
    setup() {
      const columns = userColumns();
      const defaultColumn = { maxSize: 480, minSize: 80, size: 160 };
      const data = allUsers.slice(0, 8);

      return { columns, data, defaultColumn };
    },
    template: `
      <DataGridShell>
        <DataGrid
          :columns="columns"
          :data="data"
          :defaultColumn="defaultColumn"
          :enableColumnResizing="true"
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Drag the edge of a column header to resize. Double-click a resizer to reset.
            </p>
          </DataGrid.Toolbar>
          <DataGridView :colSpan="5" />
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const Virtualized = meta.story({
  render: () => ({
    components: { DataGrid, DataGridShell, Table },
    setup() {
      const columns = userColumns();
      const template = allUsers[0];
      const manyUsers = template
        ? Array.from({ length: 500 }, (_, index) => ({
            ...template,
            email: `user-${index}@example.com`,
            id: `virtual-${index}`,
            name: `User ${index + 1}`,
          }))
        : [];
      const getRowId = (row: FullUser) => row.id;
      const emptyState = h(DataGrid.Empty, { colSpan: 5 });

      return { columns, emptyState, getRowId, manyUsers };
    },
    template: `
      <DataGridShell>
        <DataGrid :columns="columns" :data="manyUsers" :getRowId="getRowId">
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              500 rows rendered with windowing via <code class="text-xs">VirtualBody</code>.
            </p>
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
              <DataGrid.VirtualBody :empty="emptyState" :estimateSize="40">
                <DataGrid.Row>
                  <DataGrid.Cell />
                </DataGrid.Row>
              </DataGrid.VirtualBody>
            </Table.Body>
          </Table>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});

export const WithSortableData = meta.story({
  render: () => ({
    components: { Badge, DataGrid, DataGridShell, DataGridView, Sortable },
    setup() {
      const data = ref(allUsers.slice(0, 6));
      const itemIds = computed(() => data.value.map((user) => user.id));
      const columns = userColumns();
      const getRowId = (row: FullUser) => row.id;

      const handleSortableChange = (nextIds: string[]) => {
        const byId = new Map(data.value.map((user) => [user.id, user]));
        data.value = nextIds
          .map((id) => byId.get(id))
          .filter((user): user is FullUser => user !== undefined);
      };

      return { columns, data, getRowId, handleSortableChange, itemIds };
    },
    template: `
      <DataGridShell>
        <DataGrid :columns="columns" :data="data" :getRowId="getRowId">
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Compose Sortable outside the grid to reorder the shared
              <code class="text-xs">data</code> array; the table reflects the new order.
            </p>
          </DataGrid.Toolbar>
          <div class="flex flex-col gap-3">
            <Sortable :items="itemIds" :onValueChange="handleSortableChange">
              <Sortable.Item v-for="user in data" :key="user.id" :value="user.id">
                <Sortable.ItemContent>
                  <Sortable.Handle />
                  <div class="min-w-0 flex-1">
                    <p class="truncate font-medium text-sm">{{ user.name }}</p>
                    <p class="truncate text-muted-foreground text-xs">{{ user.email }}</p>
                  </div>
                  <Badge variant="secondary">{{ user.role }}</Badge>
                </Sortable.ItemContent>
              </Sortable.Item>
            </Sortable>
            <DataGridView :colSpan="5" />
          </div>
        </DataGrid>
      </DataGridShell>
    `,
  }),
});
