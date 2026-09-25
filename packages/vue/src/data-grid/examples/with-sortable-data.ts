import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Checkbox, Sortable, Table } from "@pisagor/vue";
import type {
  CellContext,
  ColumnDef,
  HeaderContext,
} from "@pisagor/vue/data-grid";
import { computed, defineComponent, h, type PropType, ref } from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

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

export function WithSortableData() {
  return {
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
  };
}
