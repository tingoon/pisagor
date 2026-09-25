import { PhCaretDown, PhCaretRight } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Select, Table } from "@pisagor/vue";
import type { CellContext, ColumnDef } from "@pisagor/vue/data-grid";
import type { ExpandedState, GroupingState } from "@tanstack/vue-table";
import { computed, defineComponent, h, ref } from "vue";
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

export function GroupedRows() {
  return {
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
                  {
                    class: "capitalize",
                    variant: statusVariants[row.original.status],
                  },
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

      const handleGroupByChange = (value: string | string[]) => {
        const next = Array.isArray(value) ? value[0] : value;
        grouping.value = [next ?? "role"];
      };

      const data = allUsers.slice(0, 24);
      const state = computed(() => ({
        expanded: expanded.value,
        grouping: grouping.value,
      }));

      return {
        columns,
        data,
        getRowId,
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
  };
}
