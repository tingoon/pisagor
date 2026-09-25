import { DotsThreeVerticalIcon } from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import { Badge, Button, Table } from "@pisagor/react";
import type { ColumnPinningState } from "@tanstack/react-table";
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

function DataGridShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="rounded-xl border bg-muted/20 p-3">{children}</div>
    </div>
  );
}

export function ColumnPinning() {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    end: ["actions"],
    start: ["name"],
  });

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        cell: ({ row }) => (
          <span className="font-medium">{row.original.name}</span>
        ),
        header: "Name",
        meta: { pinned: "start" as const },
      },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
      { accessorKey: "department", header: "Department" },
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
        header: "Status",
      },
      {
        cell: () => (
          <Button aria-label="Row actions" size="icon-sm" variant="ghost">
            <DotsThreeVerticalIcon />
          </Button>
        ),
        header: "",
        id: "actions",
        meta: { pinned: "end" as const },
        size: 48,
      },
    ],
    [],
  );

  return (
    <DataGridShell>
      <DataGrid<User>
        columns={columns}
        data={allUsers.slice(0, 10)}
        enableColumnPinning
        onColumnPinningChange={setColumnPinning}
        state={{ columnPinning }}
      >
        <DataGrid.Toolbar>
          <p className="text-muted-foreground text-sm">
            Name pinned start, actions pinned end — scroll horizontally to see
            pinning.
          </p>
        </DataGrid.Toolbar>
        <Table className="min-w-240">
          <Table.Header>
            <DataGrid.Header>
              <DataGrid.HeaderRow>
                {columns.map((column) => {
                  const id =
                    "accessorKey" in column
                      ? String(column.accessorKey)
                      : column.id;
                  const pinned = (
                    column.meta as { pinned?: "start" | "end" } | undefined
                  )?.pinned;

                  return (
                    <DataGrid.Head
                      className={
                        pinned === "start"
                          ? "sticky inset-s-0 z-10 bg-background shadow-[inset_-1px_0_0_var(--border)]"
                          : pinned === "end"
                            ? "sticky inset-e-0 z-10 bg-background shadow-[inset_1px_0_0_var(--border)]"
                            : undefined
                      }
                      columnId={id}
                      key={id}
                    />
                  );
                })}
              </DataGrid.HeaderRow>
            </DataGrid.Header>
          </Table.Header>
          <Table.Body>
            <DataGrid.Body empty={<DataGrid.Empty colSpan={6} />}>
              <DataGrid.Row>
                {columns.map((column) => {
                  const id =
                    "accessorKey" in column
                      ? String(column.accessorKey)
                      : column.id;
                  const pinned = (
                    column.meta as { pinned?: "start" | "end" } | undefined
                  )?.pinned;

                  return (
                    <DataGrid.Cell
                      className={
                        pinned === "start"
                          ? "sticky inset-s-0 z-10 bg-background shadow-[inset_-1px_0_0_var(--border)]"
                          : pinned === "end"
                            ? "sticky inset-e-0 z-10 bg-background shadow-[inset_1px_0_0_var(--border)]"
                            : undefined
                      }
                      columnId={id}
                      key={id}
                    />
                  );
                })}
              </DataGrid.Row>
            </DataGrid.Body>
          </Table.Body>
        </Table>
      </DataGrid>
    </DataGridShell>
  );
}
