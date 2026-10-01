/** @jsxImportSource solid-js */

import type { BadgeVariant } from "@pisagor/solid";
import { Badge, Button, Checkbox, Pagination, Table } from "@pisagor/solid";
import type { ColumnDef, PaginationState } from "@pisagor/solid/data-grid";
import { DataGrid, useDataGrid } from "@pisagor/solid/data-grid";
import { CaretDownIcon, CaretUpIcon } from "@pisagor/solid/icons";
import type { RowData } from "@tanstack/solid-table";
import type { JSX } from "solid-js";
import { createMemo, createSignal } from "solid-js";

interface User {
  department: string;
  email: string;
  id: string;
  joinedAt: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "invited";
}

const ROLES: User["role"][] = ["Admin", "Editor", "Viewer"];

const STATUSES: User["status"][] = ["active", "inactive", "invited"];

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

const statusVariants: Record<User["status"], BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};

const allUsers: User[] = Array.from({ length: 48 }, (_, index) => ({
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function SortIndicator({ direction }: { direction: false | "asc" | "desc" }) {
  if (direction === "asc") {
    return <CaretUpIcon class="size-3.5" />;
  }

  if (direction === "desc") {
    return <CaretDownIcon class="size-3.5" />;
  }

  return null;
}

function DataGridShell({ children }: { children: JSX.Element }) {
  return (
    <div class="flex w-full flex-col gap-3">
      <div class="rounded-xl border bg-muted/20 p-3">{children}</div>
    </div>
  );
}

function DataGridView({
  colSpan = 5,
  filterHead = false,
}: {
  colSpan?: number;
  filterHead?: boolean;
}) {
  return (
    <Table>
      <Table.Header>
        <DataGrid.Header>
          <DataGrid.HeaderRow>
            <DataGrid.Head filter={filterHead} />
          </DataGrid.HeaderRow>
        </DataGrid.Header>
      </Table.Header>
      <Table.Body>
        <DataGrid.Body empty={<DataGrid.Empty colSpan={colSpan} />}>
          <DataGrid.Row>
            <DataGrid.Cell />
          </DataGrid.Row>
        </DataGrid.Body>
      </Table.Body>
    </Table>
  );
}

function DataGridPaginationBar<TData extends RowData>() {
  const table = useDataGrid<TData>();
  const { pageIndex, pageSize } = table.store.state.pagination;
  const total = table.getFilteredRowModel().rows.length;
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div class="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
      <p class="text-muted-foreground text-sm">
        Showing {from}–{to} of {total}
        {table.getFilteredSelectedRowModel().rows.length > 0
          ? ` · ${table.getFilteredSelectedRowModel().rows.length} selected`
          : null}
      </p>
      <Pagination
        class="mx-0 w-auto justify-end"
        count={total}
        onPageChange={(details) => table.setPageIndex(details.page - 1)}
        page={pageIndex + 1}
        pageSize={pageSize}
      />
    </div>
  );
}

function useUserColumns(options?: {
  selectable?: boolean;
  sortable?: boolean;
}) {
  const { selectable = false, sortable = false } = options ?? {};

  return createMemo<ColumnDef<User>[]>(() => {
    type SortableHeaderColumn = {
      toggleSorting: (value: boolean) => void;
      getIsSorted: () => "asc" | "desc" | false;
    };

    const sortableHeader =
      (label: string) =>
      ({ column }: { column: SortableHeaderColumn }) => (
        <button
          class="inline-flex items-center gap-1.5 font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          type="button"
        >
          {label}
          <SortIndicator direction={column.getIsSorted()} />
        </button>
      );

    const columns: ColumnDef<User>[] = [];

    if (selectable) {
      columns.push({
        cell: ({ row }) => (
          <Checkbox
            aria-label={`Select ${row.original.name}`}
            checked={row.getIsSelected()}
            onCheckedChange={({ checked }) =>
              row.toggleSelected(checked === true)
            }
          />
        ),
        enableHiding: false,
        enableSorting: false,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all on page"
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={({ checked }) =>
              table.toggleAllPageRowsSelected(checked === true)
            }
          />
        ),
        id: "select",
        size: 40,
      });
    }

    columns.push(
      {
        accessorKey: "name",
        enableColumnFilter: true,
        enableGrouping: false,
        enableHiding: false,
        header: sortable ? sortableHeader("Name") : "Name",
      },
      {
        accessorKey: "email",
        enableColumnFilter: true,
        header: sortable ? sortableHeader("Email") : "Email",
      },
      {
        accessorKey: "role",
        enableColumnFilter: true,
        filterFn: "equals",
        header: sortable ? sortableHeader("Role") : "Role",
      },
      {
        accessorKey: "department",
        header: sortable ? sortableHeader("Department") : "Department",
      },
      {
        accessorKey: "status",
        cell: ({ row }) => (
          <Badge
            class="capitalize"
            variant={statusVariants[row.original.status]}
          >
            {row.original.status}
          </Badge>
        ),
        enableColumnFilter: true,
        filterFn: "equals",
        header: "Status",
      },
      {
        accessorKey: "joinedAt",
        cell: ({ row }) => formatDate(row.original.joinedAt),
        header: sortable ? sortableHeader("Joined") : "Joined",
        sortFn: "datetime",
      },
    );

    return columns;
  });
}

function SelectionSummary<TData extends RowData>({
  onClear,
}: {
  onClear: () => void;
}) {
  const table = useDataGrid<TData>();
  const selected = table.getFilteredSelectedRowModel().rows.length;
  if (selected === 0) {
    return null;
  }
  return (
    <div class="flex items-center justify-between gap-3 pt-1">
      <p class="text-muted-foreground text-sm">{selected} selected</p>
      <Button onClick={onClear} size="sm" variant="ghost">
        Clear selection
      </Button>
    </div>
  );
}

export function RowSelection() {
  const [rowSelection, setRowSelection] = createSignal({});
  const [pagination, setPagination] = createSignal<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });
  const columns = useUserColumns({ selectable: true });

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columns()}
        data={allUsers}
        enableRowSelection
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        state={{ pagination: pagination(), rowSelection: rowSelection() }}
      >
        <DataGridView colSpan={7} />
        <DataGridPaginationBar<User> />
        <DataGrid.Footer>
          <SelectionSummary<User> onClear={() => setRowSelection({})} />
        </DataGrid.Footer>
      </DataGrid>
    </DataGridShell>
  );
}
