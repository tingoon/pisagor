import type { BadgeVariant } from "@pisagor/solid";
import { Badge, Select, Table } from "@pisagor/solid";
import type { ColumnDef } from "@pisagor/solid/data-grid";
import { DataGrid } from "@pisagor/solid/data-grid";
import { CaretDownIcon, CaretRightIcon } from "@pisagor/solid/icons";
import type { ExpandedState, GroupingState } from "@tanstack/solid-table";
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

export function GroupedRows() {
  const [grouping, setGrouping] = createSignal<GroupingState>(["role"]);
  const [expanded, setExpanded] = createSignal<ExpandedState>(true);

  const columns = createMemo<ColumnDef<User>[]>(() => [
    {
      accessorKey: "role",
      aggregatedCell: ({ getValue }) => `${getValue()} members`,
      aggregationFn: "count",
      cell: ({ row }) => {
        if (row.getIsGrouped()) {
          return (
            <button
              class="inline-flex items-center gap-1.5 font-medium"
              onClick={row.getToggleExpandedHandler()}
              type="button"
            >
              {row.getIsExpanded() ? (
                <CaretDownIcon class="size-3.5" />
              ) : (
                <CaretRightIcon class="size-3.5" />
              )}
              {row.groupingValue as string}
            </button>
          );
        }

        return row.original.role;
      },
      header: "Role",
    },
    {
      accessorKey: "name",
      aggregatedCell: () => null,
      cell: ({ row }) => (row.getIsGrouped() ? null : row.original.name),
      header: "Name",
    },
    {
      accessorKey: "department",
      aggregatedCell: ({ getValue }) => `${getValue()} depts`,
      aggregationFn: "uniqueCount",
      cell: ({ row }) => (row.getIsGrouped() ? null : row.original.department),
      header: "Department",
    },
    {
      accessorKey: "status",
      aggregatedCell: ({ getValue }) => `${getValue()} rows`,
      aggregationFn: "count",
      cell: ({ row }) =>
        row.getIsGrouped() ? null : (
          <Badge
            class="capitalize"
            variant={statusVariants[row.original.status]}
          >
            {row.original.status}
          </Badge>
        ),
      header: "Status",
    },
  ]);

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columns()}
        data={allUsers.slice(0, 24)}
        getRowId={(row: User) => row.id}
        onExpandedChange={setExpanded}
        onGroupingChange={setGrouping}
        state={{ expanded: expanded(), grouping: grouping() }}
      >
        <DataGrid.Toolbar>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-muted-foreground text-sm">Group by</span>
            <Select
              items={["role", "department", "status"]}
              onValueChange={(value) => {
                const next = Array.isArray(value) ? value[0] : value;
                setGrouping([next ?? "role"]);
              }}
              value={[grouping()[0] ?? "role"]}
            />
          </div>
        </DataGrid.Toolbar>
        <DataGridView colSpan={4} />
      </DataGrid>
    </DataGridShell>
  );
}
