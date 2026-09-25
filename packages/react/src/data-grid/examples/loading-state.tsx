import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import { Badge, Button, Checkbox, Skeleton, Table } from "@pisagor/react";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import type { ColumnDef } from "..";
import { DataGrid } from "..";

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
    return <CaretUpIcon className="size-3.5" />;
  }

  if (direction === "desc") {
    return <CaretDownIcon className="size-3.5" />;
  }

  return null;
}

function DataGridShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="rounded-xl border bg-muted/20 p-3">{children}</div>
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

  return useMemo<ColumnDef<User>[]>(() => {
    type SortableHeaderColumn = {
      toggleSorting: (value: boolean) => void;
      getIsSorted: () => "asc" | "desc" | false;
    };

    const sortableHeader =
      (label: string) =>
      ({ column }: { column: SortableHeaderColumn }) => (
        <button
          className="inline-flex items-center gap-1.5 font-medium"
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
            className="capitalize"
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
  }, [selectable, sortable]);
}

export function LoadingState() {
  const [isLoading, setIsLoading] = useState(true);
  const columns = useUserColumns();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <DataGridShell>
      {isLoading ? (
        <>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-medium text-sm">Initial data load</p>
            <Button
              onClick={() => {
                setIsLoading(true);
                window.setTimeout(() => setIsLoading(false), 1200);
              }}
              size="sm"
              variant="outline"
            >
              Reload
            </Button>
          </div>
          <Table>
            <Table.Header>
              <Table.Row>
                {[
                  "Name",
                  "Email",
                  "Role",
                  "Department",
                  "Status",
                  "Joined",
                ].map((label) => (
                  <Table.Head key={label}>{label}</Table.Head>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from(
                { length: 6 },
                (_, rowIndex) => `skeleton-row-${rowIndex}`,
              ).map((rowKey) => (
                <Table.Row key={rowKey}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Skeleton.Circle className="size-8" />
                      <div className="flex flex-1 flex-col gap-1.5">
                        <Skeleton className="h-3 w-28" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Skeleton className="h-3 w-16" />
                  </Table.Cell>
                  <Table.Cell>
                    <Skeleton className="h-3 w-24" />
                  </Table.Cell>
                  <Table.Cell>
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </Table.Cell>
                  <Table.Cell>
                    <Skeleton className="h-3 w-20" />
                  </Table.Cell>
                  <Table.Cell>
                    <Skeleton className="h-3 w-24" />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      ) : (
        <DataGrid<User> columns={columns} data={allUsers.slice(0, 8)}>
          <DataGrid.Toolbar>
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-sm">Initial data load</p>
              <Button
                onClick={() => {
                  setIsLoading(true);
                  window.setTimeout(() => setIsLoading(false), 1200);
                }}
                size="sm"
                variant="outline"
              >
                Reload
              </Button>
            </div>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
        </DataGrid>
      )}
    </DataGridShell>
  );
}
