import { PhCaretDown, PhCaretRight } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Table } from "@pisagor/vue";
import type { CellContext, ColumnDef } from "@pisagor/vue/data-grid";
import type { ExpandedState, GroupingState } from "@tanstack/vue-table";
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

export function MultiGrouping() {
  return {
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
        getRowId,
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
  };
}
