/** @jsxImportSource solid-js */

import type { BadgeVariant } from "@pisagor/solid";
import { Badge, Checkbox, InputGroup, Pagination, Table } from "@pisagor/solid";
import type { ColumnDef } from "@pisagor/solid/data-grid";
import { DataGrid, useDataGrid } from "@pisagor/solid/data-grid";
import {
  CaretDownIcon,
  CaretUpIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@pisagor/solid/icons";
import type { ColumnFiltersState, RowData } from "@tanstack/solid-table";
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

function FilterChipsToolbar<TData extends RowData>() {
  const table = useDataGrid<TData>();
  const filters = table.store.state.columnFilters;
  const globalFilter = table.store.state.globalFilter;

  if (filters.length === 0 && !globalFilter) {
    return null;
  }

  return (
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-muted-foreground text-xs">Active filters</span>
      {globalFilter() ? (
        <Badge class="gap-1" variant="secondary">
          Search: {globalFilter()}
          <button
            aria-label="Clear search"
            class="rounded-sm hover:bg-background/60"
            onClick={() => table.setGlobalFilter("")}
            type="button"
          >
            <XIcon class="size-3" />
          </button>
        </Badge>
      ) : null}
      {filters.map((filter) => (
        <Badge class="gap-1 capitalize" variant="secondary">
          {filter.id}: {String(filter.value)}
          <button
            aria-label={`Remove ${filter.id} filter`}
            class="rounded-sm hover:bg-background/60"
            onClick={() =>
              table.getColumn(filter.id)?.setFilterValue(undefined)
            }
            type="button"
          >
            <XIcon class="size-3" />
          </button>
        </Badge>
      ))}
    </div>
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

export function ActiveFilterChips() {
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>([
    { id: "role", value: "Admin" },
  ]);
  const [globalFilter, setGlobalFilter] = createSignal("alice");
  const columns = useUserColumns();

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columns()}
        data={allUsers}
        initialState={{ pagination: { pageIndex: 0, pageSize: 8 } }}
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        state={{ columnFilters: columnFilters(), globalFilter: globalFilter() }}
      >
        <DataGrid.Toolbar>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroup.Addon>
                <MagnifyingGlassIcon />
              </InputGroup.Addon>
              <InputGroup.Input
                aria-label="Search users"
                onChange={(event) => setGlobalFilter(event.target.value)}
                placeholder="Search…"
                value={globalFilter()}
              />
            </InputGroup>
            <FilterChipsToolbar<User> />
          </div>
        </DataGrid.Toolbar>
        <DataGridView colSpan={6} />
        <DataGridPaginationBar<User> />
      </DataGrid>
    </DataGridShell>
  );
}
