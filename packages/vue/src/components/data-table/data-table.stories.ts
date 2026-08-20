import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import { Badge, DataTable, Table, useDataTable } from "@pisagor/vue";
import {
  type ColumnDef,
  getSortedRowModel,
  type HeaderGroup,
  type SortingState,
} from "@tanstack/vue-table";
import { computed, defineComponent, h, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component:
          "Renders basic tabular data with columns and rows. Prefer Data Grid when you need resize, virtualization, or advanced interactions.",
      },
    },
  },
  subcomponents: {
    Body: DataTable.Body,
    Cell: DataTable.Cell,
    Empty: DataTable.Empty,
    Footer: DataTable.Footer,
    Head: DataTable.Head,
    Header: DataTable.Header,
    HeaderRow: DataTable.HeaderRow,
    Row: DataTable.Row,
    Toolbar: DataTable.Toolbar,
  },
  title: "Components/Data Display/Data Table",
});

interface User {
  email: string;
  id: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
}

const users: User[] = [
  { email: "ava@example.com", id: "1", name: "Ava Nguyen", role: "Admin" },
  { email: "ben@example.com", id: "2", name: "Ben Carter", role: "Editor" },
  { email: "cara@example.com", id: "3", name: "Cara Diaz", role: "Viewer" },
  { email: "drew@example.com", id: "4", name: "Drew Kim", role: "Editor" },
];

function useColumns(): ColumnDef<User>[] {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      cell: ({ row }) => h(Badge, { variant: "secondary" }, () => row.original.role),
      header: "Role",
    },
  ];
}

const DataTableView = defineComponent({
  name: "DataTableView",
  props: {
    colSpan: { default: 3, type: Number },
  },
  setup(props) {
    return () =>
      h(Table, null, () => [
        h(Table.Header, null, () =>
          h(DataTable.Header, null, () => h(DataTable.HeaderRow, null, () => h(DataTable.Head))),
        ),
        h(Table.Body, null, () =>
          h(DataTable.Body, { empty: h(DataTable.Empty, { colSpan: props.colSpan }) }, () =>
            h(DataTable.Row, null, () => h(DataTable.Cell)),
          ),
        ),
      ]);
  },
});

export const Default = meta.story({
  render: () => ({
    components: { DataTable, DataTableView },
    setup() {
      const columns = useColumns();

      return { columns, users };
    },
    template: `
      <DataTable :columns="columns" :data="users" :getRowId="(row) => row.id">
        <DataTableView />
      </DataTable>
    `,
  }),
});

export const Empty = meta.story({
  render: () => ({
    components: { DataTable, DataTableView },
    setup() {
      const columns = useColumns();

      return { columns };
    },
    template: `
      <DataTable :columns="columns" :data="[]" :getRowId="(row) => row.id">
        <DataTable.Toolbar>
          <p class="text-muted-foreground text-sm">No members match the current filters.</p>
        </DataTable.Toolbar>
        <DataTableView />
      </DataTable>
    `,
  }),
});

const SortableHead = defineComponent({
  name: "SortableHead",
  setup() {
    return () => {
      const table = useDataTable<User>();
      const headerGroup = table.getHeaderGroups()[0] as HeaderGroup<User> | undefined;

      if (!headerGroup) {
        return null;
      }

      return h(DataTable.HeaderRow, null, () =>
        headerGroup.headers.map((header) => {
          const sorted = header.column.getIsSorted();

          return h(
            Table.Head,
            { "data-part": "head", "data-scope": "data-table", key: header.id },
            () =>
              header.column.getCanSort()
                ? h(
                    "button",
                    {
                      class: "inline-flex items-center gap-1 font-medium",
                      onClick: header.column.getToggleSortingHandler(),
                      type: "button",
                    },
                    [
                      typeof header.column.columnDef.header === "function"
                        ? header.column.columnDef.header(header.getContext())
                        : header.column.columnDef.header,
                      sorted === "asc"
                        ? h(PhCaretUp, { class: "size-3.5" })
                        : sorted === "desc"
                          ? h(PhCaretDown, { class: "size-3.5" })
                          : null,
                    ],
                  )
                : typeof header.column.columnDef.header === "function"
                  ? header.column.columnDef.header(header.getContext())
                  : header.column.columnDef.header,
          );
        }),
      );
    };
  },
});

export const Sorting = meta.story({
  render: () => ({
    components: { DataTable, SortableHead, Table },
    setup() {
      const columns = useColumns();
      const sorting = ref<SortingState>([{ desc: false, id: "name" }]);
      const sortedRowModel = getSortedRowModel();

      const handleSortingChange = (
        updater: SortingState | ((state: SortingState) => SortingState),
      ) => {
        sorting.value = typeof updater === "function" ? updater(sorting.value) : updater;
      };

      const state = computed(() => ({ sorting: sorting.value }));
      const emptyNode = h(DataTable.Empty, { colSpan: 3 });

      return { columns, emptyNode, handleSortingChange, sortedRowModel, state, users };
    },
    template: `
      <DataTable
        :columns="columns"
        :data="users"
        :getRowId="(row) => row.id"
        :getSortedRowModel="sortedRowModel"
        :onSortingChange="handleSortingChange"
        :state="state"
      >
        <DataTable.Toolbar>
          <p class="text-muted-foreground text-sm">Click a column header to sort.</p>
        </DataTable.Toolbar>
        <Table>
          <Table.Header>
            <DataTable.Header>
              <SortableHead />
            </DataTable.Header>
          </Table.Header>
          <Table.Body>
            <DataTable.Body :empty="emptyNode">
              <DataTable.Row>
                <DataTable.Cell />
              </DataTable.Row>
            </DataTable.Body>
          </Table.Body>
        </Table>
      </DataTable>
    `,
  }),
});
