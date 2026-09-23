import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, Checkbox, Pagination, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type HeaderContext,
  type PaginationState,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import { computed, defineComponent, h, type PropType, ref } from "vue";
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

export function RowSelection() {
  return {
    components: { DataGrid, DataGridPaginationBar, DataGridShell, DataGridView, SelectionSummary },
    setup() {
      const rowSelection = ref<Record<string, boolean>>({});
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 6 });
      const columns = userColumns({ selectable: true });

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
        state,
      };
    },
    template: `
        <DataGridShell>
          <DataGrid
            :columns="columns"
            :data="allUsers"
            :enableRowSelection="true"
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
  };
}
