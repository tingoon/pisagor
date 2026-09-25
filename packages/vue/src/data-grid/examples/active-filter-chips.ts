import {
  PhCaretDown,
  PhCaretUp,
  PhMagnifyingGlass,
  PhX,
} from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Checkbox, InputGroup, Pagination, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type HeaderContext,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import type { ColumnFiltersState } from "@tanstack/vue-table";
import { computed, defineComponent, h, type PropType, ref } from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function"
    ? (updater as (old: T) => T)(current)
    : updater;
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

const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Support",
] as const;

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
  department:
    DEPARTMENTS[index % DEPARTMENTS.length] ?? DEPARTMENTS[0] ?? "Engineering",
  email: `user${index + 1}@example.com`,
  id: String(index + 1),
  joinedAt: new Date(
    2020 + (index % 5),
    index % 12,
    (index % 28) + 1,
  ).toISOString(),
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
    direction: {
      default: false,
      type: [Boolean, String] as PropType<false | "asc" | "desc">,
    },
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
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () =>
          slots.default?.(),
        ),
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
            h(DataGrid.HeaderRow, null, () =>
              h(DataGrid.Head, { filter: props.filterHead }),
            ),
          ),
        ),
        h(Table.Body, null, () =>
          h(
            DataGrid.Body,
            { empty: h(DataGrid.Empty, { colSpan: props.colSpan }) },
            () => h(DataGrid.Row, null, () => h(DataGrid.Cell)),
          ),
        ),
      ]);
  },
});

const FilterChipsToolbar = defineComponent({
  name: "FilterChipsToolbar",
  setup() {
    return () => {
      const table = useDataGrid();
      const filters = table.store.state.columnFilters;
      const globalFilter = table.store.state.globalFilter as string | undefined;

      if (filters.length === 0 && !globalFilter) {
        return null;
      }

      return h("div", { class: "flex flex-wrap items-center gap-2" }, [
        h("span", { class: "text-muted-foreground text-xs" }, "Active filters"),
        globalFilter
          ? h(
              Badge as ArkPart,
              { class: "gap-1", variant: "secondary" },
              () => [
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
              ],
            )
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
                  onClick: () =>
                    table.getColumn(filter.id)?.setFilterValue(undefined),
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
      const { pageIndex, pageSize } = table.store.state.pagination;
      const total = table.getFilteredRowModel().rows.length;
      const from = total === 0 ? 0 : pageIndex * pageSize + 1;
      const to = Math.min((pageIndex + 1) * pageSize, total);
      const selectedCount = table.getFilteredSelectedRowModel().rows.length;

      return h(
        "div",
        {
          class:
            "flex flex-wrap items-center justify-between gap-3 border-t pt-3",
        },
        [
          h("p", { class: "text-muted-foreground text-sm" }, [
            `Showing ${from}–${to} of ${total}`,
            selectedCount > 0 ? ` · ${selectedCount} selected` : null,
          ]),
          h(Pagination as ArkPart, {
            class: "mx-0 w-auto justify-end",
            count: total,
            onPageChange: (details: { page: number }) =>
              table.setPageIndex(details.page - 1),
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
        onClick: () =>
          ctx.column.toggleSorting(ctx.column.getIsSorted() === "asc"),
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
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        formatDate(row.original.joinedAt),
      header: sortable ? sortableHeaderRenderer("Joined") : "Joined",
      sortFn: "datetime",
    },
  );

  return columns;
}

export function ActiveFilterChips() {
  return {
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
      const columnFilters = ref<ColumnFiltersState>([
        { id: "role", value: "Admin" },
      ]);
      const globalFilter = ref("alice");
      const columns = userColumns();
      const initialState = { pagination: { pageIndex: 0, pageSize: 8 } };

      const handleColumnFiltersChange = (
        updater:
          | ColumnFiltersState
          | ((old: ColumnFiltersState) => ColumnFiltersState),
      ) => {
        columnFilters.value = applyUpdater(columnFilters.value, updater);
      };

      const handleGlobalFilterChange = (
        updater: string | ((old: string) => string),
      ) => {
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
            :columns="columns"
            :data="allUsers"
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
  };
}
