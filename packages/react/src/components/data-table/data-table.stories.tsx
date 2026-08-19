import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { Badge } from "@pisagor/react/badge";
import { DataTable, useDataTable } from "@pisagor/react/data-table";
import { Table } from "@pisagor/react/table";
import {
  type ColumnDef,
  flexRender,
  getSortedRowModel,
  type SortingState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: DataTable,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: "partial",
      },
      description: {
        component:
          "Renders basic tabular data with columns and rows. Prefer Data Grid when you need resize, virtualization, or advanced interactions.",
      },
      taxonomy: "pattern",
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

function useColumns() {
  return useMemo<ColumnDef<User>[]>(
    () => [
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
        cell: ({ row }) => <Badge variant="secondary">{row.original.role}</Badge>,
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

export const Default = meta.story({
  render: () => {
    const columns = useColumns();

    return (
      <DataTable<User> columns={columns} data={users} getRowId={(row) => row.id}>
        <DataTableView />
      </DataTable>
    );
  },
});

export const Empty = meta.story({
  render: () => {
    const columns = useColumns();

    return (
      <DataTable<User> columns={columns} data={[]} getRowId={(row) => row.id}>
        <DataTable.Toolbar>
          <p className="text-muted-foreground text-sm">No members match the current filters.</p>
        </DataTable.Toolbar>
        <DataTableView />
      </DataTable>
    );
  },
});

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
          <Table.Head data-part="head" data-scope="data-table" key={header.id}>
            {header.column.getCanSort() ? (
              <button
                className="inline-flex items-center gap-1 font-medium"
                onClick={header.column.getToggleSortingHandler()}
                type="button"
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                {sorted === "asc" ? (
                  <CaretUpIcon className="size-3.5" />
                ) : sorted === "desc" ? (
                  <CaretDownIcon className="size-3.5" />
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

export const Sorting = meta.story({
  render: () => {
    const columns = useColumns();
    const [sorting, setSorting] = useState<SortingState>([{ desc: false, id: "name" }]);

    return (
      <DataTable<User>
        columns={columns}
        data={users}
        getRowId={(row) => row.id}
        getSortedRowModel={getSortedRowModel()}
        onSortingChange={setSorting}
        state={{ sorting }}
      >
        <DataTable.Toolbar>
          <p className="text-muted-foreground text-sm">Click a column header to sort.</p>
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
  },
});
