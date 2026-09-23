import { CaretDownIcon, CaretRightIcon } from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import { Badge, Table } from "@pisagor/react";
import type { ExpandedState, RowData } from "@tanstack/react-table";
import { Fragment, type ReactNode, useMemo, useState } from "react";
import type { ColumnDef, DataGridFeatures, Row } from "..";
import { DataGrid, renderDataGridCell, useDataGrid } from "..";

type DataGridRow<TData extends RowData> = Row<DataGridFeatures, TData>;

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

function DataGridExpandableBody<TData extends RowData>({
  colSpan,
  renderDetail,
}: {
  colSpan: number;
  renderDetail: (row: DataGridRow<TData>) => ReactNode;
}) {
  const table = useDataGrid<TData>();
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return <DataGrid.Empty colSpan={colSpan} />;
  }

  return (
    <>
      {rows.map((row) => (
        <Fragment key={row.id}>
          <Table.Row
            aria-selected={row.getIsSelected()}
            data-part="row"
            data-scope="data-grid"
            data-state={row.getIsSelected() ? "selected" : undefined}
          >
            {row.getVisibleCells().map((cell) => (
              <Table.Cell data-part="cell" data-scope="data-grid" key={cell.id}>
                {renderDataGridCell(cell)}
              </Table.Cell>
            ))}
          </Table.Row>
          {row.getIsExpanded() ? (
            <Table.Row className="bg-muted/30 hover:bg-muted/30">
              <Table.Cell className="p-4" colSpan={colSpan}>
                {renderDetail(row)}
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

export function RowDetails() {
  const [expanded, setExpanded] = useState<ExpandedState>({ "1": true });

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        cell: ({ row }) => (
          <button
            aria-label={row.getIsExpanded() ? "Collapse details" : "Expand details"}
            className="inline-flex size-6 items-center justify-center rounded-md hover:bg-muted"
            onClick={row.getToggleExpandedHandler()}
            type="button"
          >
            {row.getIsExpanded() ? (
              <CaretDownIcon className="size-3.5" />
            ) : (
              <CaretRightIcon className="size-3.5" />
            )}
          </button>
        ),
        header: "",
        id: "expander",
        size: 40,
      },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
      {
        accessorKey: "status",
        cell: ({ row }) => (
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
        data={allUsers.slice(0, 8)}
        getRowCanExpand={() => true}
        getRowId={(row: User) => row.id}
        onExpandedChange={setExpanded}
        state={{ expanded }}
      >
        <DataGrid.Toolbar>
          <p className="text-muted-foreground text-sm">
            Expand rows for inline detail panels — custom body via{" "}
            <code className="text-xs">useDataGrid</code> +{" "}
            <code className="text-xs">flexRender</code>.
          </p>
        </DataGrid.Toolbar>
        <Table>
          <Table.Header>
            <DataGrid.Header>
              <DataGrid.HeaderRow>
                <DataGrid.Head />
              </DataGrid.HeaderRow>
            </DataGrid.Header>
          </Table.Header>
          <Table.Body>
            <DataGridExpandableBody<User>
              colSpan={5}
              renderDetail={(row) => (
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-sm">Profile</p>
                    <p className="text-muted-foreground text-sm">{row.original.name}</p>
                    <p className="text-muted-foreground text-sm">{row.original.email}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Organization</p>
                    <p className="text-muted-foreground text-sm">{row.original.department}</p>
                    <p className="text-muted-foreground text-sm">
                      Joined {formatDate(row.original.joinedAt)}
                    </p>
                  </div>
                </div>
              )}
            />
          </Table.Body>
        </Table>
      </DataGrid>
    </DataGridShell>
  );
}
