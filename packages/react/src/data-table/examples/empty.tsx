import { Badge, Table } from "@pisagor/react";
import { useMemo } from "react";
import { type ColumnDef, DataTable } from "..";

interface User {
  email: string;
  id: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
}

function useColumns() {
  return useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "role",
        cell: ({ row }) => (
          <Badge variant="secondary">{row.original.role}</Badge>
        ),
        header: "Role",
      },
    ],
    [],
  );
}

function DataTableView({ colSpan = 3 }: { colSpan?: number }) {
  return (
    <Table>
      <Table.Header>
        <DataTable.Header>
          <DataTable.HeaderRow>
            <DataTable.Head />
          </DataTable.HeaderRow>
        </DataTable.Header>
      </Table.Header>
      <Table.Body>
        <DataTable.Body empty={<DataTable.Empty colSpan={colSpan} />}>
          <DataTable.Row>
            <DataTable.Cell />
          </DataTable.Row>
        </DataTable.Body>
      </Table.Body>
    </Table>
  );
}

export function Empty() {
  const columns = useColumns();

  return (
    <DataTable<User> columns={columns} data={[]} getRowId={(row) => row.id}>
      <DataTable.Toolbar>
        <p className="text-muted-foreground text-sm">
          No members match the current filters.
        </p>
      </DataTable.Toolbar>
      <DataTableView />
    </DataTable>
  );
}
