import type { BadgeVariant } from "@pisagor/react";
import { Avatar, Badge, Table } from "@pisagor/react";
import { type ReactNode, useMemo } from "react";
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

export function RichCells() {
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar
              fallback={row.original.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
              size="sm"
            />
            <div className="min-w-0">
              <p className="truncate font-medium">{row.original.name}</p>
              <p className="truncate text-muted-foreground text-xs">{row.original.email}</p>
            </div>
          </div>
        ),
        header: "Member",
        id: "member",
      },
      {
        accessorKey: "role",
        cell: ({ row }) => <Badge variant="secondary">{row.original.role}</Badge>,
        header: "Role",
      },
      {
        accessorKey: "department",
        header: "Department",
      },
      {
        accessorKey: "status",
        cell: ({ row }) => (
          <Badge className="capitalize" variant={statusVariants[row.original.status]}>
            {row.original.status}
          </Badge>
        ),
        header: "Status",
      },
      {
        accessorKey: "joinedAt",
        cell: ({ row }) => (
          <span className="text-muted-foreground tabular-nums">
            {formatDate(row.original.joinedAt)}
          </span>
        ),
        header: "Joined",
      },
    ],
    [],
  );

  return (
    <DataGridShell>
      <DataGrid<User> columns={columns} data={allUsers.slice(0, 10)}>
        <DataGridView colSpan={5} />
      </DataGrid>
    </DataGridShell>
  );
}
