import type { BadgeVariant } from "@pisagor/solid";
import {
  Badge,
  Button,
  Checkbox,
  Input,
  InputGroup,
  Pagination,
  Select,
  Table,
} from "@pisagor/solid";
import type { ColumnDef } from "@pisagor/solid/data-grid";
import { DataGrid, useDataGrid } from "@pisagor/solid/data-grid";
import {
  CaretDownIcon,
  CaretUpIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
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

function ColumnFilterHeader({
  children,
  label,
}: {
  children?: JSX.Element;
  label: JSX.Element;
}) {
  return (
    <div class="flex w-full min-w-0 flex-col gap-1.5">
      <span class="truncate">{label}</span>
      {children}
    </div>
  );
}

function ColumnFilterSelect(props: {
  items: string[];
  onValueChange: (value: string | string[]) => void;
  value: string[];
}) {
  return (
    <div class="w-full min-w-0 **:data-[slot=select-trigger]:h-7 **:data-[slot=select-control]:w-full **:data-[slot=select-trigger]:w-full">
      <Select {...props} />
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

export function ColumnFilters() {
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = createSignal("");
  const columns = useUserColumns();

  const columnsWithFilters = createMemo<ColumnDef<User>[]>(() =>
    columns().map((column) => {
      if (!("accessorKey" in column)) {
        return column;
      }

      if (column.accessorKey === "role" || column.accessorKey === "status") {
        return {
          ...column,
          header: ({ column: tableColumn }) => {
            const values = Array.from(
              tableColumn.getFacetedUniqueValues()?.keys() ?? [],
            ).sort() as string[];

            return (
              <ColumnFilterHeader label={column.header as string}>
                <ColumnFilterSelect
                  items={["All", ...values]}
                  onValueChange={(value) => {
                    const next = Array.isArray(value) ? value[0] : value;
                    tableColumn.setFilterValue(
                      next === "All" ? undefined : next,
                    );
                  }}
                  value={[
                    (tableColumn.getFilterValue() as string | undefined) ??
                      "All",
                  ]}
                />
              </ColumnFilterHeader>
            );
          },
        };
      }

      if (column.accessorKey === "name" || column.accessorKey === "email") {
        return {
          ...column,
          header: ({ column: tableColumn }) => (
            <ColumnFilterHeader label={column.header as string}>
              <Input
                aria-label={`Filter ${String(column.accessorKey)}`}
                onChange={(event) =>
                  tableColumn.setFilterValue(event.target.value)
                }
                placeholder="Filter…"
                size="sm"
                value={
                  (tableColumn.getFilterValue() as string | undefined) ?? ""
                }
              />
            </ColumnFilterHeader>
          ),
        };
      }

      if (
        column.accessorKey === "department" ||
        column.accessorKey === "joinedAt"
      ) {
        return {
          ...column,
          header: () => <ColumnFilterHeader label={column.header as string} />,
        };
      }

      return column;
    }),
  );

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columnsWithFilters()}
        data={allUsers}
        initialState={{ pagination: { pageIndex: 0, pageSize: 8 } }}
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        state={{ columnFilters: columnFilters(), globalFilter: globalFilter() }}
      >
        <DataGrid.Toolbar>
          <div class="flex flex-wrap items-center gap-2">
            <InputGroup>
              <InputGroup.Addon>
                <MagnifyingGlassIcon />
              </InputGroup.Addon>
              <InputGroup.Input
                aria-label="Search all columns"
                onChange={(event) => setGlobalFilter(event.target.value)}
                placeholder="Global search…"
                value={globalFilter()}
              />
            </InputGroup>
            <Button
              onClick={() => {
                setColumnFilters([]);
                setGlobalFilter("");
              }}
              size="sm"
              variant="outline"
            >
              <FunnelIcon />
              Clear filters
            </Button>
          </div>
        </DataGrid.Toolbar>
        <DataGridView colSpan={6} filterHead />
        <DataGridPaginationBar<User> />
      </DataGrid>
    </DataGridShell>
  );
}
