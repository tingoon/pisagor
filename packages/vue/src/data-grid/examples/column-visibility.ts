import { PhCaretDown, PhCaretUp, PhEye } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, Checkbox, DropdownMenu, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type HeaderContext,
  useDataGrid,
  type VisibilityState,
} from "@pisagor/vue/data-grid";
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

const ColumnVisibilityMenu = defineComponent({
  name: "ColumnVisibilityMenu",
  setup() {
    return () => {
      const table = useDataGrid();

      return h(
        DropdownMenu,
        { positioning: { placement: "bottom-end" } },
        () => [
          h(DropdownMenu.Trigger, { asChild: true }, () =>
            h(Button, { size: "sm", variant: "outline" }, () => [
              h(PhEye),
              "Columns",
            ]),
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
                    onClick: () =>
                      column.toggleVisibility(!column.getIsVisible()),
                    value: column.id,
                  },
                  () => [
                    h(Checkbox, {
                      checked: column.getIsVisible(),
                      tabIndex: -1,
                    }),
                    column.id,
                  ],
                ),
              ),
          ),
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

export function ColumnVisibility() {
  return {
    components: { ColumnVisibilityMenu, DataGrid, DataGridShell, DataGridView },
    setup() {
      const columnVisibility = ref<VisibilityState>({
        department: false,
        joinedAt: false,
      });
      const columns = userColumns();

      const handleColumnVisibilityChange = (
        updater: VisibilityState | ((old: VisibilityState) => VisibilityState),
      ) => {
        columnVisibility.value = applyUpdater(columnVisibility.value, updater);
      };

      const state = computed(() => ({
        columnVisibility: columnVisibility.value,
      }));
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
  };
}
