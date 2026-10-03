/** @jsxImportSource solid-js */

import { Badge, Table } from "@pisagor/solid";
import {
  type ColumnDef,
  DataTable,
  type SortingState,
  useDataTable,
} from "@pisagor/solid/data-table";
import { CaretDownIcon, CaretUpIcon } from "@pisagor/solid/icons";
import { flexRender } from "@tanstack/solid-table";
import { createMemo, createSignal } from "solid-js";

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

function useColumns() {
  return createMemo<ColumnDef<User>[]>(() => [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "role",
      cell: ({ row }) => <Badge variant="secondary">{row.original.role}</Badge>,
      header: "Role",
    },
  ]);
}

function SortableHead() {
  const table = useDataTable<User>();
  const headerGroup = table.getHeaderGroups()[0];

  if (!headerGroup) {
    return null;
  }

  return (
    <DataTable.HeaderRow>
      {headerGroup.headers.map((header) => {
        const sorted = header.column.getIsSorted();

        return (
          <Table.Head data-part="head" data-scope="data-table">
            {header.column.getCanSort() ? (
              <button
                class="inline-flex items-center gap-1 font-medium"
                onClick={header.column.getToggleSortingHandler()}
                type="button"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {sorted === "asc" ? (
                  <CaretUpIcon class="size-3.5" />
                ) : sorted === "desc" ? (
                  <CaretDownIcon class="size-3.5" />
                ) : null}
              </button>
            ) : (
              flexRender(header.column.columnDef.header, header.getContext())
            )}
          </Table.Head>
        );
      })}
    </DataTable.HeaderRow>
  );
}

export function Sorting() {
  const columns = useColumns();
  const [sorting, setSorting] = createSignal<SortingState>([
    { desc: false, id: "name" },
  ]);

  return (
    <DataTable<User>
      columns={columns()}
      data={users}
      getRowId={(row) => row.id}
      onSortingChange={setSorting}
      state={{ sorting: sorting() }}
    >
      <DataTable.Toolbar>
        <p class="text-muted-foreground text-sm">
          Click a column header to sort.
        </p>
      </DataTable.Toolbar>
      <Table>
        <Table.Header>
          <DataTable.Header>
            <SortableHead />
          </DataTable.Header>
        </Table.Header>
        <Table.Body>
          <DataTable.Body empty={<DataTable.Empty colSpan={3} />}>
            <DataTable.Row>
              <DataTable.Cell />
            </DataTable.Row>
          </DataTable.Body>
        </Table.Body>
      </Table>
    </DataTable>
  );
}
