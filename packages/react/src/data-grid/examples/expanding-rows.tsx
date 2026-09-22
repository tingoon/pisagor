import { CaretDownIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Table } from "@pisagor/react";
import type { ExpandedState } from "@tanstack/react-table";
import { type ReactNode, useMemo, useState } from "react";
import type { ColumnDef } from "..";
import { DataGrid } from "..";

interface OrgNode {
  budget: number;
  id: string;
  name: string;
  subRows?: OrgNode[];
}

const orgTree: OrgNode[] = [
  {
    budget: 1_200_000,
    id: "eng",
    name: "Engineering",
    subRows: [
      {
        budget: 480_000,
        id: "eng-fe",
        name: "Frontend",
        subRows: [
          { budget: 210_000, id: "eng-fe-ui", name: "UI Systems" },
          { budget: 270_000, id: "eng-fe-app", name: "Applications" },
        ],
      },
      {
        budget: 520_000,
        id: "eng-be",
        name: "Backend",
        subRows: [
          { budget: 300_000, id: "eng-be-api", name: "API Platform" },
          { budget: 220_000, id: "eng-be-data", name: "Data Services" },
        ],
      },
    ],
  },
  {
    budget: 640_000,
    id: "ops",
    name: "Operations",
    subRows: [
      { budget: 280_000, id: "ops-support", name: "Support" },
      { budget: 360_000, id: "ops-success", name: "Customer Success" },
    ],
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
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

function countLeaves(row: { subRows?: unknown[]; getLeafRows?: () => unknown[] }): number {
  if (typeof row.getLeafRows === "function") {
    return row.getLeafRows().length;
  }
  if (!row.subRows?.length) return 1;
  return row.subRows.reduce((sum: number, child) => sum + countLeaves(child as typeof row), 0);
}

export function ExpandingRows() {
  const [expanded, setExpanded] = useState<ExpandedState>({ eng: true });

  const columns = useMemo<ColumnDef<OrgNode>[]>(
    () => [
      {
        cell: ({ row }) => (
          <div
            className="flex items-center gap-2"
            style={{ paddingInlineStart: `${row.depth * 1.25}rem` }}
          >
            {row.getCanExpand() ? (
              <button
                aria-label={row.getIsExpanded() ? "Collapse" : "Expand"}
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
            ) : (
              <span className="inline-block size-6" />
            )}
            <span className={row.subRows?.length ? "font-medium" : undefined}>
              {row.original.name}
            </span>
          </div>
        ),
        header: "Department",
        id: "name",
      },
      {
        accessorKey: "budget",
        cell: ({ row }) => formatCurrency(row.original.budget),
        header: "Budget",
      },
      {
        cell: ({ row }) => {
          const leafCount = countLeaves(row);
          return (
            <span className="text-muted-foreground tabular-nums">
              {row.subRows?.length ? `${row.subRows.length} teams · ${leafCount} units` : "Leaf"}
            </span>
          );
        },
        header: "Structure",
        id: "structure",
      },
    ],
    [],
  );

  return (
    <DataGridShell>
      <DataGrid<OrgNode>
        columns={columns}
        data={orgTree}
        getRowId={(row: OrgNode) => row.id}
        getSubRows={(row: OrgNode) => row.subRows}
        onExpandedChange={setExpanded}
        paginateExpandedRows={false}
        state={{ expanded }}
      >
        <DataGrid.Toolbar>
          <p className="text-muted-foreground text-sm">
            Hierarchical rows via <code className="text-xs">getSubRows</code>.
          </p>
        </DataGrid.Toolbar>
        <DataGridView colSpan={3} />
      </DataGrid>
    </DataGridShell>
  );
}
