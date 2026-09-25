import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import { Badge, Table } from "@pisagor/vue";
import { computed, defineComponent, h, ref } from "vue";
import { type ColumnDef, DataTable, type SortingState, useDataTable } from "..";

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
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "role",
      cell: ({ row }) =>
        h(Badge, { variant: "secondary" }, () => row.original.role),
      header: "Role",
    },
  ];
}

const SortableHead = defineComponent({
  name: "SortableHead",
  setup() {
    return () => {
      const table = useDataTable<User>();
      const headerGroup = table.getHeaderGroups()[0];
      if (!headerGroup) return null;

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

export function Sorting() {
  return {
    components: { DataTable, SortableHead, Table },
    setup() {
      const columns = useColumns();
      const sorting = ref<SortingState>([{ desc: false, id: "name" }]);
      const handleSortingChange = (
        updater: SortingState | ((state: SortingState) => SortingState),
      ) => {
        sorting.value =
          typeof updater === "function" ? updater(sorting.value) : updater;
      };
      const state = computed(() => ({ sorting: sorting.value }));
      const emptyNode = h(DataTable.Empty, { colSpan: 3 });
      return { columns, emptyNode, handleSortingChange, state, users };
    },
    template: `
      <DataTable
        :columns="columns"
        :data="users"
        :getRowId="(row) => row.id"
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
  };
}
