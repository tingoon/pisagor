import { CaretDownIcon, CaretRightIcon } from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import { Badge, Table } from "@pisagor/react";
import type { ExpandedState, GroupingState } from "@tanstack/react-table";
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

export function MultiGrouping() {
  const [grouping, setGrouping] = useState<GroupingState>(["department", "role"]);
  const [expanded, setExpanded] = useState<ExpandedState>(true);

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "department",
        aggregationFn: "count",
        cell: ({ row }) => {
          if (row.getIsGrouped()) {
            return (
              <button
                className="inline-flex items-center gap-1.5 font-medium"
                onClick={row.getToggleExpandedHandler()}
                type="button"
              >
                {row.getIsExpanded() ? (
                  <CaretDownIcon className="size-3.5" />
                ) : (
                  <CaretRightIcon className="size-3.5" />
                )}
                {String(row.groupingValue)}
              </button>
            );
          }

          return row.original.department;
        },
        header: "Department",
      },
      {
        accessorKey: "role",
        aggregatedCell: ({ getValue }) => `${getValue()} users`,
        aggregationFn: "count",
        cell: ({ row }) =>
          row.getIsGrouped()
            ? `${row.groupingValue} (${row.subRows?.length ?? 0})`
            : row.original.role,
        header: "Role",
      },
      {
        accessorKey: "name",
        cell: ({ row }) => (row.getIsGrouped() ? null : row.original.name),
        header: "Name",
      },
      {
        accessorKey: "status",
        cell: ({ row }) =>
          row.getIsGrouped() ? null : (
            <Badge className="capitalize" variant={statusVariants[row.original.status]}>
              {row.original.status}
            </Badge>
          ),
        header: "Status",
      },
    ],
    [],
  );

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columns}
        data={allUsers.slice(0, 30)}
        getRowId={(row: User) => row.id}
        onExpandedChange={setExpanded}
        onGroupingChange={setGrouping}
        state={{ expanded, grouping }}
      >
        <DataGrid.Toolbar>
          <p className="text-muted-foreground text-sm">Nested grouping by department, then role.</p>
        </DataGrid.Toolbar>
        <DataGridView colSpan={4} />
      </DataGrid>
    </DataGridShell>
  );
}
