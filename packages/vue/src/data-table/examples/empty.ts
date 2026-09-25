import { Badge, Table } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { type ColumnDef, DataTable } from "..";

interface User {
  email: string;
  id: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
}

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

const DataTableView = defineComponent({
  name: "DataTableView",
  props: {
    colSpan: { default: 3, type: Number },
  },
  setup(props) {
    return () =>
      h(Table, null, () => [
        h(Table.Header, null, () =>
          h(DataTable.Header, null, () =>
            h(DataTable.HeaderRow, null, () => h(DataTable.Head)),
          ),
        ),
        h(Table.Body, null, () =>
          h(
            DataTable.Body,
            { empty: h(DataTable.Empty, { colSpan: props.colSpan }) },
            () => h(DataTable.Row, null, () => h(DataTable.Cell)),
          ),
        ),
      ]);
  },
});

export function Empty() {
  return {
    components: { DataTable, DataTableView },
    setup() {
      return { columns: useColumns() };
    },
    template: `
      <DataTable :columns="columns" :data="[]" :getRowId="(row) => row.id">
        <DataTable.Toolbar>
          <p class="text-muted-foreground text-sm">No members match the current filters.</p>
        </DataTable.Toolbar>
        <DataTableView />
      </DataTable>
    `,
  };
}
