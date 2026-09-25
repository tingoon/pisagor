import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, Checkbox, Skeleton, Table } from "@pisagor/vue";
import type {
  CellContext,
  ColumnDef,
  HeaderContext,
} from "@pisagor/vue/data-grid";
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
} from "vue";
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

export function LoadingState() {
  return {
    components: {
      Button,
      DataGrid,
      DataGridShell,
      DataGridView,
      Skeleton,
      Table,
    },
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

      const skeletonRows = Array.from(
        { length: 6 },
        (_, index) => `skeleton-row-${index}`,
      );
      const skeletonLabels = [
        "Name",
        "Email",
        "Role",
        "Department",
        "Status",
        "Joined",
      ];
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
  };
}
