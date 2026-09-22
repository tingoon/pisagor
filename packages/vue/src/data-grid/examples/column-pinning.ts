import { PhDotsThreeVertical } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, Table } from "@pisagor/vue";
import type { CellContext, ColumnDef } from "@pisagor/vue/data-grid";
import type { ColumnPinningState } from "@tanstack/vue-table";
import { computed, defineComponent, h, ref } from "vue";
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

const DataGridShell = defineComponent({
  name: "DataGridShell",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "flex w-full flex-col gap-3" }, () =>
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () => slots.default?.()),
      );
  },
});

export function ColumnPinning() {
  return {
    components: { DataGrid, DataGridShell, PhDotsThreeVertical, Table },
    setup() {
      const columnPinning = ref<ColumnPinningState>({ end: ["actions"], start: ["name"] });

      const columns: (ColumnDef<FullUser> & {
        id: string;
        meta?: { pinned?: "start" | "end" };
      })[] = [
        {
          accessorKey: "name",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h("span", { class: "font-medium" }, row.original.name),
          header: "Name",
          id: "name",
          meta: { pinned: "start" },
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
          meta: { pinned: "end" },
          size: 48,
        },
      ];

      const pinnedClass = (pinned: "start" | "end" | undefined) =>
        pinned === "start"
          ? "sticky inset-s-0 z-10 bg-background shadow-[inset_-1px_0_0_var(--border)]"
          : pinned === "end"
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
                Name pinned start, actions pinned end — scroll horizontally to see pinning.
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
  };
}
