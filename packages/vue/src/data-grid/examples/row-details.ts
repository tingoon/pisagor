import { PhCaretDown, PhCaretRight } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type DataGridFeatures,
  renderDataGridCell,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import type { ExpandedState, Row, RowData } from "@tanstack/vue-table";
import { computed, defineComponent, h, type PropType, ref, type VNodeChild } from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

type DataGridRow<TData extends RowData> = Row<DataGridFeatures, TData>;

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

const DataGridShell = defineComponent({
  name: "DataGridShell",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "flex w-full flex-col gap-3" }, () =>
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () => slots.default?.()),
      );
  },
});

const DataGridExpandableBody = defineComponent({
  name: "DataGridExpandableBody",
  props: {
    colSpan: { required: true, type: Number },
    renderDetail: {
      required: true,
      type: Function as PropType<(row: DataGridRow<RowData>) => VNodeChild>,
    },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const rows = table.getRowModel().rows;

      if (rows.length === 0) {
        return h(DataGrid.Empty, { colSpan: props.colSpan });
      }

      return rows.flatMap((row) => [
        h(
          Table.Row,
          {
            "aria-selected": row.getIsSelected(),
            "data-part": "row",
            "data-scope": "data-grid",
            "data-state": row.getIsSelected() ? "selected" : undefined,
            key: row.id,
          },
          () =>
            row
              .getVisibleCells()
              .map((cell) =>
                h(
                  Table.Cell,
                  { "data-part": "cell", "data-scope": "data-grid", key: cell.id },
                  () => renderDataGridCell(cell),
                ),
              ),
        ),
        row.getIsExpanded()
          ? h(
              Table.Row as ArkPart,
              { class: "bg-muted/30 hover:bg-muted/30", key: `${row.id}-detail` },
              () =>
                h(Table.Cell as ArkPart, { class: "p-4", colSpan: props.colSpan }, () =>
                  props.renderDetail(row),
                ),
            )
          : null,
      ]);
    };
  },
});

export function RowDetails() {
  return {
    components: { DataGrid, DataGridExpandableBody, DataGridShell, Table },
    setup() {
      const expanded = ref<ExpandedState>({ "1": true });

      const columns: ColumnDef<FullUser>[] = [
        {
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              "button",
              {
                "aria-label": row.getIsExpanded() ? "Collapse details" : "Expand details",
                class: "inline-flex size-6 items-center justify-center rounded-md hover:bg-muted",
                onClick: row.getToggleExpandedHandler(),
                type: "button",
              },
              () =>
                row.getIsExpanded()
                  ? h(PhCaretDown, { class: "size-3.5" })
                  : h(PhCaretRight, { class: "size-3.5" }),
            ),
          header: "",
          id: "expander",
          size: 40,
        },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "role", header: "Role" },
        {
          accessorKey: "status",
          cell: ({ row }: CellContext<FullUser, unknown>) =>
            h(
              Badge as ArkPart,
              { class: "capitalize", variant: statusVariants[row.original.status] },
              () => row.original.status,
            ),
          header: "Status",
        },
      ];

      const getRowCanExpand = () => true;
      const getRowId = (row: FullUser) => row.id;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const data = allUsers.slice(0, 8);
      const state = computed(() => ({ expanded: expanded.value }));

      const renderDetail = (row: DataGridRow<FullUser>) =>
        h("div", { class: "grid gap-3 sm:grid-cols-2" }, [
          h("div", null, [
            h("p", { class: "font-medium text-sm" }, "Profile"),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.name),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.email),
          ]),
          h("div", null, [
            h("p", { class: "font-medium text-sm" }, "Organization"),
            h("p", { class: "text-muted-foreground text-sm" }, row.original.department),
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              `Joined ${formatDate(row.original.joinedAt)}`,
            ),
          ]),
        ]);

      return {
        columns,
        data,
        getRowCanExpand,
        getRowId,
        handleExpandedChange,
        renderDetail,
        state,
      };
    },
    template: `
        <DataGridShell>
          <DataGrid
            :columns="columns"
            :data="data"
            :getRowCanExpand="getRowCanExpand"
            :getRowId="getRowId"
            :onExpandedChange="handleExpandedChange"
            :state="state"
          >
            <DataGrid.Toolbar>
              <p class="text-muted-foreground text-sm">
                Expand rows for inline detail panels — custom body via
                <code class="text-xs">useDataGrid</code> + <code class="text-xs">flexRender</code>.
              </p>
            </DataGrid.Toolbar>
            <Table>
              <Table.Header>
                <DataGrid.Header>
                  <DataGrid.HeaderRow>
                    <DataGrid.Head />
                  </DataGrid.HeaderRow>
                </DataGrid.Header>
              </Table.Header>
              <Table.Body>
                <DataGridExpandableBody :colSpan="5" :renderDetail="renderDetail" />
              </Table.Body>
            </Table>
          </DataGrid>
        </DataGridShell>
      `,
  };
}
