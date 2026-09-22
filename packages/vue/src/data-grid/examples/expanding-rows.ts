import { PhCaretDown, PhCaretRight } from "@phosphor-icons/vue";
import { Table } from "@pisagor/vue";
import type { CellContext, ColumnDef, DataGridFeatures } from "@pisagor/vue/data-grid";
import type { ExpandedState, Row, RowData } from "@tanstack/vue-table";
import { computed, defineComponent, h, ref } from "vue";
import { DataGrid } from "..";

type DataGridRow<TData extends RowData> = Row<DataGridFeatures, TData>;

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function" ? (updater as (old: T) => T)(current) : updater;
}

interface OrgNode {
  budget: number;
  id: string;
  name: string;
  subRows?: OrgNode[];
}

const orgTree: OrgNode[] = [
  {
    budget: 1_200_000,
    id: "eng",
    name: "Engineering",
    subRows: [
      {
        budget: 480_000,
        id: "eng-fe",
        name: "Frontend",
        subRows: [
          { budget: 210_000, id: "eng-fe-ui", name: "UI Systems" },
          { budget: 270_000, id: "eng-fe-app", name: "Applications" },
        ],
      },
      {
        budget: 520_000,
        id: "eng-be",
        name: "Backend",
        subRows: [
          { budget: 300_000, id: "eng-be-api", name: "API Platform" },
          { budget: 220_000, id: "eng-be-data", name: "Data Services" },
        ],
      },
    ],
  },
  {
    budget: 640_000,
    id: "ops",
    name: "Operations",
    subRows: [
      { budget: 280_000, id: "ops-support", name: "Support" },
      { budget: 360_000, id: "ops-success", name: "Customer Success" },
    ],
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
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

function countLeaves(row: DataGridRow<OrgNode>): number {
  if (!row.subRows.length) {
    return 1;
  }

  return row.subRows.reduce(
    (total: number, subRow: DataGridRow<OrgNode>) => total + countLeaves(subRow),
    0,
  );
}

export function ExpandingRows() {
  return {
    components: { DataGrid, DataGridShell, DataGridView },
    setup() {
      const expanded = ref<ExpandedState>({ eng: true });

      const columns: ColumnDef<OrgNode>[] = [
        {
          cell: ({ row }: CellContext<OrgNode, unknown>) =>
            h(
              "div",
              {
                class: "flex items-center gap-2",
                style: { paddingInlineStart: `${row.depth * 1.25}rem` },
              },
              [
                row.getCanExpand()
                  ? h(
                      "button",
                      {
                        "aria-label": row.getIsExpanded() ? "Collapse" : "Expand",
                        class:
                          "inline-flex size-6 items-center justify-center rounded-md hover:bg-muted",
                        onClick: row.getToggleExpandedHandler(),
                        type: "button",
                      },
                      () =>
                        row.getIsExpanded()
                          ? h(PhCaretDown, { class: "size-3.5" })
                          : h(PhCaretRight, { class: "size-3.5" }),
                    )
                  : h("span", { class: "inline-block size-6" }),
                h(
                  "span",
                  { class: row.subRows?.length ? "font-medium" : undefined },
                  row.original.name,
                ),
              ],
            ),
          header: "Department",
          id: "name",
        },
        {
          accessorKey: "budget",
          cell: ({ row }: CellContext<OrgNode, unknown>) => formatCurrency(row.original.budget),
          header: "Budget",
        },
        {
          cell: ({ row }: CellContext<OrgNode, unknown>) => {
            const leafCount = countLeaves(row as DataGridRow<OrgNode>);
            return h(
              "span",
              { class: "text-muted-foreground tabular-nums" },
              row.subRows?.length ? `${row.subRows.length} teams · ${leafCount} units` : "Leaf",
            );
          },
          header: "Structure",
          id: "structure",
        },
      ];

      const getRowId = (row: OrgNode) => row.id;
      const getSubRows = (row: OrgNode) => row.subRows;

      const handleExpandedChange = (
        updater: ExpandedState | ((old: ExpandedState) => ExpandedState),
      ) => {
        expanded.value = applyUpdater(expanded.value, updater);
      };

      const state = computed(() => ({ expanded: expanded.value }));

      return {
        columns,
        getRowId,
        getSubRows,
        handleExpandedChange,
        orgTree,
        state,
      };
    },
    template: `
        <DataGridShell>
          <DataGrid
            :columns="columns"
            :data="orgTree"
            :getRowId="getRowId"
            :getSubRows="getSubRows"
            :onExpandedChange="handleExpandedChange"
            :paginateExpandedRows="false"
            :state="state"
          >
            <DataGrid.Toolbar>
              <p class="text-muted-foreground text-sm">
                Hierarchical rows via <code class="text-xs">getSubRows</code>.
              </p>
            </DataGrid.Toolbar>
            <DataGridView :colSpan="3" />
          </DataGrid>
        </DataGridShell>
      `,
  };
}
