import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import { Badge, Checkbox, Sortable, Table } from "@pisagor/react";
import { type ReactNode, useMemo, useState } from "react";
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

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "Support"] as const;

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
  department: DEPARTMENTS[index % DEPARTMENTS.length] ?? DEPARTMENTS[0] ?? "Engineering",
  email: `user${index + 1}@example.com`,
  id: String(index + 1),
  joinedAt: new Date(2020 + (index % 5), index % 12, (index % 28) + 1).toISOString(),
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

function useUserColumns(options?: { selectable?: boolean; sortable?: boolean }) {
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
            onCheckedChange={({ checked }) => row.toggleSelected(checked === true)}
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
            onCheckedChange={({ checked }) => table.toggleAllPageRowsSelected(checked === true)}
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
          <Badge className="capitalize" variant={statusVariants[row.original.status]}>
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

export function WithSortableData() {
  const [data, setData] = useState(() => allUsers.slice(0, 6));
  const itemIds = data.map((user) => user.id);
  const columns = useUserColumns();

  return (
    <DataGridShell>
      <DataGrid<User> columns={columns} data={data} getRowId={(row) => row.id}>
        <DataGrid.Toolbar>
          <p className="text-muted-foreground text-sm">
            Compose Sortable outside the grid to reorder the shared{" "}
            <code className="text-xs">data</code> array; the table reflects the new order.
          </p>
        </DataGrid.Toolbar>
        <div className="flex flex-col gap-3">
          <Sortable
            items={itemIds}
            onValueChange={(nextIds) => {
              setData((current) => {
                const byId = new Map(current.map((user) => [user.id, user]));

                return nextIds
                  .map((id) => byId.get(id))
                  .filter((user): user is User => user !== undefined);
              });
            }}
          >
            {data.map((user) => (
              <Sortable.Item key={user.id} value={user.id}>
                <Sortable.ItemContent>
                  <Sortable.Handle />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-sm">{user.name}</p>
                    <p className="truncate text-muted-foreground text-xs">{user.email}</p>
                  </div>
                  <Badge variant="secondary">{user.role}</Badge>
                </Sortable.ItemContent>
              </Sortable.Item>
            ))}
          </Sortable>
          <DataGridView colSpan={5} />
        </div>
      </DataGrid>
    </DataGridShell>
  );
}
