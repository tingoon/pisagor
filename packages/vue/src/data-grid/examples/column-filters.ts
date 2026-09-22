import { PhCaretDown, PhCaretUp, PhFunnel, PhMagnifyingGlass } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, Checkbox, InputGroup, Pagination, Select, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type HeaderContext,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import type { ColumnFiltersState } from "@tanstack/vue-table";
import { computed, defineComponent, h, type PropType, ref, type VNodeChild } from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function" ? (updater as (old: T) => T)(current) : updater;
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

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

const DataGridPaginationBar = defineComponent({
  name: "DataGridPaginationBar",
  setup() {
    return () => {
      const table = useDataGrid();
      const { pageIndex, pageSize } = table.store.state.pagination;
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
      sortFn: "datetime",
    },
  );

  return columns;
}

export function ColumnFilters() {
  return {
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
        globalFilter,
        handleColumnFiltersChange,
        handleGlobalFilterChange,
        handleGlobalInput,
        initialState,
        state,
      };
    },
    template: `
        <DataGridShell>
          <DataGrid
            :columns="columnsWithFilters"
            :data="allUsers"
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
  };
}
