import type { BadgeVariant } from "@pisagor/vue";
import { Avatar, Badge, Table } from "@pisagor/vue";
import type { CellContext, ColumnDef } from "@pisagor/vue/data-grid";
import { defineComponent, h } from "vue";
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

export function RichCells() {
  return {
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
                h(
                  "p",
                  { class: "truncate text-muted-foreground text-xs" },
                  row.original.email,
                ),
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
              {
                class: "capitalize",
                variant: statusVariants[row.original.status],
              },
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
  };
}
