import type { BadgeVariant } from "@pisagor/solid";
import { Badge, Button, Checkbox, Spinner, Table } from "@pisagor/solid";
import type {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@pisagor/solid/data-grid";
import { DataGrid, useDataGrid } from "@pisagor/solid/data-grid";
import { CaretDownIcon, CaretUpIcon } from "@pisagor/solid/icons";
import type { JSX } from "solid-js";
import { createEffect, createMemo, createSignal, onCleanup } from "solid-js";

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

function ManualPaginationBar({ total }: { total: number }) {
  const table = useDataGrid();
  const { pageIndex, pageSize } = table.store.state.pagination;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);
  return (
    <div class="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
      <p class="text-muted-foreground text-sm">
        Showing {from}–{to} of {total}
      </p>
      <div class="flex items-center gap-2">
        <Button
          disabled={pageIndex <= 0}
          onClick={() => table.setPageIndex(pageIndex - 1)}
          size="sm"
          variant="outline"
        >
          Previous
        </Button>
        <span class="text-muted-foreground text-sm">
          {pageIndex + 1} / {pageCount}
        </span>
        <Button
          disabled={pageIndex + 1 >= pageCount}
          onClick={() => table.setPageIndex(pageIndex + 1)}
          size="sm"
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export function ManualPagination() {
  const [pagination, setPagination] = createSignal<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });
  const [sorting, setSorting] = createSignal<SortingState>([
    { desc: false, id: "name" },
  ]);
  const [isFetching, setIsFetching] = createSignal(false);

  const sortedData = createMemo(() => {
    const next = [...allUsers];
    const sort = sorting()[0];

    if (!sort) {
      return next;
    }

    next.sort((left, right) => {
      const leftValue = left[sort.id as keyof User];
      const rightValue = right[sort.id as keyof User];
      const comparison = String(leftValue).localeCompare(String(rightValue));
      return sort.desc ? -comparison : comparison;
    });

    return next;
  });

  const pageCount = () =>
    Math.ceil(sortedData().length / pagination().pageSize);
  const pageData = () =>
    sortedData().slice(
      pagination().pageIndex * pagination().pageSize,
      (pagination().pageIndex + 1) * pagination().pageSize,
    );

  createEffect(() => {
    pagination();
    sorting();
    setIsFetching(true);
    const timer = window.setTimeout(() => setIsFetching(false), 450);
    onCleanup(() => window.clearTimeout(timer));
  });

  const columns = useUserColumns({ sortable: true });

  return (
    <DataGridShell>
      <div class="relative">
        {isFetching() ? (
          <div class="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/70">
            <Spinner />
          </div>
        ) : null}
        <DataGrid<User>
          columns={columns()}
          data={pageData()}
          manualPagination
          manualSorting
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          pageCount={pageCount()}
          state={{ pagination: pagination(), sorting: sorting() }}
        >
          <DataGrid.Toolbar>
            <p class="text-muted-foreground text-sm">
              Server-style table: <code class="text-xs">manualPagination</code>{" "}
              + <code class="text-xs">manualSorting</code> with a simulated
              fetch delay.
            </p>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
          <ManualPaginationBar total={sortedData().length} />
        </DataGrid>
      </div>
    </DataGridShell>
  );
}
