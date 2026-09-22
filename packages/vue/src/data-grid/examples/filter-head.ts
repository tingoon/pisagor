import { Table } from "@pisagor/vue";
import { DataGrid } from "..";

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

export function FilterHead() {
  return {
    components: { DataGrid: DataGrid as unknown as typeof DataGrid, Table },
    setup() {
      const columns = [
        { accessorKey: "name", header: "Name", id: "name" },
        { accessorKey: "email", header: "Email", id: "email" },
      ];

      return { columns, users };
    },
    template: `
        <DataGrid :columns="columns" :data="users" :getRowId="(row) => row.id">
          <Table>
            <Table.Header>
              <DataGrid.Header>
                <DataGrid.HeaderRow>
                  <DataGrid.Head filter />
                </DataGrid.HeaderRow>
              </DataGrid.Header>
            </Table.Header>
            <Table.Body>
              <DataGrid.Body>
                <DataGrid.Row>
                  <DataGrid.Cell />
                </DataGrid.Row>
              </DataGrid.Body>
            </Table.Body>
          </Table>
        </DataGrid>
      `,
  };
}
