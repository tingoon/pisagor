import {
  CaretDownIcon,
  CaretRightIcon,
  CaretUpIcon,
  DotsThreeVerticalIcon,
  EyeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";
import type {
  ColumnFiltersState,
  ColumnPinningState,
  ExpandedState,
  GroupingState,
  RowData,
} from "@tanstack/react-table";
import { Fragment, type ReactNode, useEffect, useMemo, useState } from "react";
import preview from "#/storybook/preview";
import type { BadgeVariant } from "..";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  Input,
  InputGroup,
  Pagination,
  Select,
  Skeleton,
  Sortable,
  Spinner,
  Table,
} from "..";
import {
  type ColumnDef,
  DataGrid,
  type DataGridFeatures,
  type PaginationState,
  type Row,
  type RowSelectionState,
  renderDataGridCell,
  type SortingState,
  useDataGrid,
  type VisibilityState,
} from "./";

type DataGridRow<TData extends RowData> = Row<DataGridFeatures, TData>;

const meta = preview.meta({
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component:
          "Displays large or interactive tabular datasets with grid behaviors such as column resize and virtualization. Prefer Data Table for basic lists.",
      },
    },
    metadata: {
      aliases: ["advanced-table"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Body: DataGrid.Body,
    Cell: DataGrid.Cell,
    ColumnResizer: DataGrid.ColumnResizer,
    Empty: DataGrid.Empty,
    Footer: DataGrid.Footer,
    Head: DataGrid.Head,
    Header: DataGrid.Header,
    HeaderRow: DataGrid.HeaderRow,
    Row: DataGrid.Row,
    RowProvider: DataGrid.RowProvider,
    Toolbar: DataGrid.Toolbar,
    VirtualBody: DataGrid.VirtualBody,
  },
  title: "Components/Data Display/Data Grid",
});

interface User {
  department: string;
  email: string;
  id: string;
  joinedAt: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "invited";
}

interface OrgNode {
  budget: number;
  id: string;
  name: string;
  subRows?: OrgNode[];
}

interface Order {
  amount: number;
  customer: string;
  id: string;
  placedAt: string;
  product: string;
  status: "cancelled" | "delivered" | "pending" | "shipped";
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

const orderStatusVariants: Record<Order["status"], BadgeVariant> = {
  cancelled: "destructive",
  delivered: "success",
  pending: "warning",
  shipped: "info",
};

const ORDER_PRODUCTS = [
  "MacBook Pro",
  "AirPods Max",
  "Studio Display",
  "Magic Keyboard",
  "iPad Air",
] as const;
const ORDER_STATUSES = ["pending", "shipped", "delivered", "cancelled"] as const;

const orders: Order[] = Array.from({ length: 32 }, (_, index) => ({
  amount: 49 + ((index * 17) % 450),
  customer: `${FIRST_NAMES[index % FIRST_NAMES.length] ?? "Alex"} ${String.fromCharCode(65 + (index % 26))}.`,
  id: `ORD-${String(index + 1).padStart(4, "0")}`,
  placedAt: new Date(2024, index % 12, (index % 28) + 1).toISOString(),
  product: ORDER_PRODUCTS[index % ORDER_PRODUCTS.length] ?? ORDER_PRODUCTS[0],
  status: ORDER_STATUSES[index % ORDER_STATUSES.length] ?? "pending",
}));

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

function ColumnFilterHeader({ children, label }: { children?: ReactNode; label: ReactNode }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-1.5">
      <span className="truncate">{label}</span>
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
    <div className="w-full min-w-0 **:data-[slot=select-control]:w-full **:data-[slot=select-trigger]:h-7 **:data-[slot=select-trigger]:w-full">
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

function DataGridColumnLayoutView({
  bodyCells,
  colSpan,
  headerCells,
}: {
  bodyCells: string[];
  colSpan: number;
  headerCells: string[];
}) {
  return (
    <Table>
      <Table.Header>
        <DataGrid.Header>
          <DataGrid.HeaderRow>
            {headerCells.map((columnId) => (
              <DataGrid.Head columnId={columnId} key={columnId} />
            ))}
          </DataGrid.HeaderRow>
        </DataGrid.Header>
      </Table.Header>
      <Table.Body>
        <DataGrid.Body empty={<DataGrid.Empty colSpan={colSpan} />}>
          <DataGrid.Row>
            {bodyCells.map((columnId) => (
              <DataGrid.Cell columnId={columnId} key={columnId} />
            ))}
          </DataGrid.Row>
        </DataGrid.Body>
      </Table.Body>
    </Table>
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

function FilterChipsToolbar<TData extends RowData>() {
  const table = useDataGrid<TData>();
  const filters = table.store.state.columnFilters;
  const globalFilter = table.store.state.globalFilter;

  if (filters.length === 0 && !globalFilter) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-xs">Active filters</span>
      {globalFilter ? (
        <Badge className="gap-1" variant="secondary">
          Search: {globalFilter}
          <button
            aria-label="Clear search"
            className="rounded-sm hover:bg-background/60"
            onClick={() => table.setGlobalFilter("")}
            type="button"
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      ) : null}
      {filters.map((filter) => (
        <Badge className="gap-1 capitalize" key={filter.id} variant="secondary">
          {filter.id}: {String(filter.value)}
          <button
            aria-label={`Remove ${filter.id} filter`}
            className="rounded-sm hover:bg-background/60"
            onClick={() => table.getColumn(filter.id)?.setFilterValue(undefined)}
            type="button"
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      ))}
    </div>
  );
}

function DataGridPaginationBar<TData extends RowData>() {
  const table = useDataGrid<TData>();
  const { pageIndex, pageSize } = table.store.state.pagination;
  const total = table.getFilteredRowModel().rows.length;
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
      <p className="text-muted-foreground text-sm">
        Showing {from}–{to} of {total}
        {table.getFilteredSelectedRowModel().rows.length > 0
          ? ` · ${table.getFilteredSelectedRowModel().rows.length} selected`
          : null}
      </p>
      <Pagination
        className="mx-0 w-auto justify-end"
        count={total}
        onPageChange={(details) => table.setPageIndex(details.page - 1)}
        page={pageIndex + 1}
        pageSize={pageSize}
      />
    </div>
  );
}

function ColumnVisibilityMenu<TData extends RowData>() {
  const table = useDataGrid<TData>();

  return (
    <DropdownMenu positioning={{ placement: "bottom-end" }}>
      <DropdownMenu.Trigger asChild>
        <Button size="sm" variant="outline">
          <EyeIcon />
          Columns
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-44">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => (
            <DropdownMenu.Item
              closeOnSelect={false}
              key={column.id}
              onClick={() => column.toggleVisibility(!column.getIsVisible())}
              value={column.id}
            >
              <Checkbox checked={column.getIsVisible()} tabIndex={-1} />
              {column.id}
            </DropdownMenu.Item>
          ))}
      </DropdownMenu.Content>
    </DropdownMenu>
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

export const Default = meta.story({
  render: () => {
    const columns = useUserColumns();

    return (
      <DataGridShell>
        <DataGrid<User> columns={columns} data={allUsers.slice(0, 8)}>
          <DataGridView colSpan={6} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const Sorting = meta.story({
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([{ desc: false, id: "name" }]);
    const columns = useUserColumns({ sortable: true });

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers.slice(0, 12)}
          enableMultiSort
          isMultiSortEvent={(event: unknown) => (event as MouseEvent).shiftKey}
          onSortingChange={setSorting}
          state={{ sorting }}
        >
          <DataGrid.Toolbar>
            <p className="text-muted-foreground text-sm">
              Multi-sort enabled — shift-click column headers to add secondary sorts.
            </p>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const Paginated = meta.story({
  render: () => {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 8,
    });
    const columns = useUserColumns({ sortable: true });

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers}
          onPaginationChange={setPagination}
          state={{ pagination }}
        >
          <DataGrid.Toolbar>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-medium text-sm">Paginated directory</p>
              <PageSizeSelect
                onChange={(pageSize) =>
                  setPagination((current) => ({ ...current, pageIndex: 0, pageSize }))
                }
                value={pagination.pageSize}
              />
            </div>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
          <DataGridPaginationBar<User> />
        </DataGrid>
      </DataGridShell>
    );
  },
});

function PageSizeSelect({
  value,
  onChange,
}: {
  onChange: (pageSize: number) => void;
  value: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-sm">Rows per page</span>
      <Select
        items={["5", "8", "12", "20"]}
        onValueChange={(next) => onChange(Number(Array.isArray(next) ? next[0] : next))}
        value={[String(value)]}
      />
    </div>
  );
}

export const ColumnFilters = meta.story({
  render: () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const columns = useUserColumns();

    const columnsWithFilters = useMemo<ColumnDef<User>[]>(
      () =>
        columns.map((column) => {
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
                        tableColumn.setFilterValue(next === "All" ? undefined : next);
                      }}
                      value={[(tableColumn.getFilterValue() as string | undefined) ?? "All"]}
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
                    onChange={(event) => tableColumn.setFilterValue(event.target.value)}
                    placeholder="Filter…"
                    size="sm"
                    value={(tableColumn.getFilterValue() as string | undefined) ?? ""}
                  />
                </ColumnFilterHeader>
              ),
            };
          }

          if (column.accessorKey === "department" || column.accessorKey === "joinedAt") {
            return {
              ...column,
              header: () => <ColumnFilterHeader label={column.header as string} />,
            };
          }

          return column;
        }),
      [columns],
    );

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columnsWithFilters}
          data={allUsers}
          initialState={{ pagination: { pageIndex: 0, pageSize: 8 } }}
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          state={{ columnFilters, globalFilter }}
        >
          <DataGrid.Toolbar>
            <div className="flex flex-wrap items-center gap-2">
              <InputGroup>
                <InputGroup.Addon>
                  <MagnifyingGlassIcon />
                </InputGroup.Addon>
                <InputGroup.Input
                  aria-label="Search all columns"
                  onChange={(event) => setGlobalFilter(event.target.value)}
                  placeholder="Global search…"
                  value={globalFilter}
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
  },
});

export const ColumnVisibility = meta.story({
  render: () => {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      department: false,
      joinedAt: false,
    });
    const columns = useUserColumns();

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers.slice(0, 10)}
          onColumnVisibilityChange={setColumnVisibility}
          state={{ columnVisibility }}
        >
          <DataGrid.Toolbar>
            <div className="flex items-center justify-between gap-3">
              <p className="text-muted-foreground text-sm">
                Department and Joined columns start hidden — toggle from the menu.
              </p>
              <ColumnVisibilityMenu<User> />
            </div>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const RowSelection = meta.story({
  render: () => {
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });
    const columns = useUserColumns({ selectable: true });

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers}
          enableRowSelection
          onPaginationChange={setPagination}
          onRowSelectionChange={setRowSelection}
          state={{ pagination, rowSelection }}
        >
          <DataGridView colSpan={7} />
          <DataGridPaginationBar<User> />
          <DataGrid.Footer>
            <SelectionSummary<User> onClear={() => setRowSelection({})} />
          </DataGrid.Footer>
        </DataGrid>
      </DataGridShell>
    );
  },
});

function SelectionSummary<TData extends RowData>({ onClear }: { onClear: () => void }) {
  const table = useDataGrid<TData>();
  const selected = table.getFilteredSelectedRowModel().rows.length;
  const total = table.getFilteredRowModel().rows.length;

  if (selected === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
      <p className="font-medium text-sm">
        {selected} of {total} row{total === 1 ? "" : "s"} selected
      </p>
      <Button onClick={onClear} size="sm" variant="ghost">
        Clear selection
      </Button>
    </div>
  );
}

export const ExpandingRows = meta.story({
  render: () => {
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
  },
});

function countLeaves<TData extends RowData>(row: DataGridRow<TData>): number {
  if (!row.subRows.length) {
    return 1;
  }

  return row.subRows.reduce((total, subRow) => total + countLeaves(subRow), 0);
}

export const GroupedRows = meta.story({
  render: () => {
    const [grouping, setGrouping] = useState<GroupingState>(["role"]);
    const [expanded, setExpanded] = useState<ExpandedState>(true);

    const columns = useMemo<ColumnDef<User>[]>(
      () => [
        {
          accessorKey: "role",
          aggregatedCell: ({ getValue }) => `${getValue()} members`,
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
          data={allUsers.slice(0, 24)}
          getRowId={(row: User) => row.id}
          onExpandedChange={setExpanded}
          onGroupingChange={setGrouping}
          state={{ expanded, grouping }}
        >
          <DataGrid.Toolbar>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground text-sm">Group by</span>
              <Select
                items={["role", "department", "status"]}
                onValueChange={(value) => {
                  const next = Array.isArray(value) ? value[0] : value;
                  setGrouping([next ?? "role"]);
                }}
                value={[grouping[0] ?? "role"]}
              />
            </div>
          </DataGrid.Toolbar>
          <DataGridView colSpan={4} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const ColumnLayout = meta.story({
  render: () => {
    const columns = useUserColumns();

    return (
      <DataGridShell>
        <DataGrid<User> columns={columns} data={allUsers.slice(0, 8)}>
          <DataGrid.Toolbar>
            <p className="text-muted-foreground text-sm">
              Explicit <code className="text-xs">columnId</code> on each Head/Cell for custom order
              and styling.
            </p>
          </DataGrid.Toolbar>
          <DataGridColumnLayoutView
            bodyCells={["status", "name", "email", "role", "department", "joinedAt"]}
            colSpan={6}
            headerCells={["status", "name", "email", "role", "department", "joinedAt"]}
          />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const RichCells = meta.story({
  render: () => {
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
  },
});

export const RowDetails = meta.story({
  render: () => {
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
  },
});

export const OrdersWithFooter = meta.story({
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns = useMemo<ColumnDef<Order>[]>(
      () => [
        { accessorKey: "id", header: "Order" },
        { accessorKey: "customer", header: "Customer" },
        { accessorKey: "product", header: "Product" },
        {
          accessorKey: "status",
          cell: ({ row }) => (
            <Badge className="capitalize" variant={orderStatusVariants[row.original.status]}>
              {row.original.status}
            </Badge>
          ),
          header: "Status",
        },
        {
          accessorKey: "amount",
          cell: ({ row }) => formatCurrency(row.original.amount),
          header: "Amount",
        },
        {
          accessorKey: "placedAt",
          cell: ({ row }) => formatDate(row.original.placedAt),
          header: "Placed",
        },
      ],
      [],
    );

    return (
      <DataGridShell>
        <DataGrid<Order>
          columns={columns}
          data={orders.slice(0, 12)}
          onSortingChange={setSorting}
          state={{ sorting }}
        >
          <DataGrid.Toolbar>
            <p className="font-medium text-sm">Sales orders with footer totals</p>
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
              <DataGrid.Body empty={<DataGrid.Empty colSpan={6} />}>
                <DataGrid.Row>
                  <DataGrid.Cell />
                </DataGrid.Row>
              </DataGrid.Body>
            </Table.Body>
            <OrdersTableFooter />
          </Table>
        </DataGrid>
      </DataGridShell>
    );
  },
});

function OrdersTableFooter() {
  const table = useDataGrid<Order>();
  const total = table.getFilteredRowModel().rows.reduce((sum, row) => sum + row.original.amount, 0);

  return (
    <Table.Footer>
      <Table.Row>
        <Table.Cell className="font-medium" colSpan={4}>
          Total ({table.getFilteredRowModel().rows.length} orders)
        </Table.Cell>
        <Table.Cell className="font-medium tabular-nums">{formatCurrency(total)}</Table.Cell>
        <Table.Cell />
      </Table.Row>
    </Table.Footer>
  );
}

export const ManualPagination = meta.story({
  render: () => {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });
    const [sorting, setSorting] = useState<SortingState>([{ desc: false, id: "name" }]);
    const [isFetching, setIsFetching] = useState(false);

    const sortedData = useMemo(() => {
      const next = [...allUsers];
      const sort = sorting[0];

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
    }, [sorting]);

    const pageCount = Math.ceil(sortedData.length / pagination.pageSize);
    const pageData = sortedData.slice(
      pagination.pageIndex * pagination.pageSize,
      (pagination.pageIndex + 1) * pagination.pageSize,
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: re-run simulated fetch when page or sort changes
    useEffect(() => {
      setIsFetching(true);
      const timer = window.setTimeout(() => setIsFetching(false), 450);
      return () => window.clearTimeout(timer);
    }, [pagination.pageIndex, pagination.pageSize, sorting]);

    const columns = useUserColumns({ sortable: true });

    return (
      <DataGridShell>
        <div className="relative">
          {isFetching ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/70">
              <Spinner />
            </div>
          ) : null}
          <DataGrid<User>
            columns={columns}
            data={pageData}
            manualPagination
            manualSorting
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            pageCount={pageCount}
            state={{ pagination, sorting }}
          >
            <DataGrid.Toolbar>
              <p className="text-muted-foreground text-sm">
                Server-style table: <code className="text-xs">manualPagination</code> +{" "}
                <code className="text-xs">manualSorting</code> with a simulated fetch delay.
              </p>
            </DataGrid.Toolbar>
            <DataGridView colSpan={6} />
            <ManualPaginationBar total={sortedData.length} />
          </DataGrid>
        </div>
      </DataGridShell>
    );
  },
});

function ManualPaginationBar({ total }: { total: number }) {
  const table = useDataGrid<User>();
  const { pageIndex, pageSize } = table.store.state.pagination;
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
      <p className="text-muted-foreground text-sm">
        Showing {from}–{to} of {total}
      </p>
      <Pagination
        className="mx-0 w-auto justify-end"
        count={total}
        onPageChange={(details) => table.setPageIndex(details.page - 1)}
        page={pageIndex + 1}
        pageSize={pageSize}
      />
    </div>
  );
}

export const GlobalSelection = meta.story({
  render: () => {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({
      "2": true,
      "5": true,
    });
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });
    const columns = useUserColumns({ selectable: true });

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers}
          enableRowSelection
          getRowId={(row: User) => row.id}
          onPaginationChange={setPagination}
          onRowSelectionChange={setRowSelection}
          state={{ pagination, rowSelection }}
        >
          <DataGrid.Toolbar>
            <GlobalSelectionSummary<User> onClear={() => setRowSelection({})} />
          </DataGrid.Toolbar>
          <DataGridView colSpan={7} />
          <DataGridPaginationBar<User> />
        </DataGrid>
      </DataGridShell>
    );
  },
});

function GlobalSelectionSummary<TData extends RowData>({ onClear }: { onClear: () => void }) {
  const table = useDataGrid<TData>();
  const selected = table.getSelectedRowModel().rows.length;
  const total = table.getCoreRowModel().rows.length;

  if (selected === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        Select rows across pages — selection persists via <code className="text-xs">getRowId</code>.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-3 py-2">
      <p className="font-medium text-sm">
        {selected} of {total} users selected across all pages
      </p>
      <Button onClick={onClear} size="sm" variant="outline">
        Clear all
      </Button>
    </div>
  );
}

export const LoadingState = meta.story({
  render: () => {
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
                  {["Name", "Email", "Role", "Department", "Status", "Joined"].map((label) => (
                    <Table.Head key={label}>{label}</Table.Head>
                  ))}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Array.from({ length: 6 }, (_, rowIndex) => `skeleton-row-${rowIndex}`).map(
                  (rowKey) => (
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
                  ),
                )}
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
  },
});

export const StripedVariant = meta.story({
  render: () => {
    const columns = useUserColumns({ sortable: true });

    return (
      <DataGridShell>
        <DataGrid<User> columns={columns} data={allUsers.slice(0, 10)}>
          <DataGrid.Toolbar>
            <p className="text-muted-foreground text-sm">Striped rows via Table variant.</p>
          </DataGrid.Toolbar>
          <Table isHoverable variant="striped">
            <Table.Header>
              <DataGrid.Header>
                <DataGrid.HeaderRow>
                  <DataGrid.Head />
                </DataGrid.HeaderRow>
              </DataGrid.Header>
            </Table.Header>
            <Table.Body>
              <DataGrid.Body empty={<DataGrid.Empty colSpan={6} />}>
                <DataGrid.Row>
                  <DataGrid.Cell />
                </DataGrid.Row>
              </DataGrid.Body>
            </Table.Body>
          </Table>
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const ColumnPinning = meta.story({
  render: () => {
    const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
      end: ["actions"],
      start: ["name"],
    });

    const columns = useMemo<ColumnDef<User>[]>(
      () => [
        {
          accessorKey: "name",
          cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
          header: "Name",
          meta: { pinned: "start" as const },
        },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "role", header: "Role" },
        { accessorKey: "department", header: "Department" },
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
              Name pinned start, actions pinned end — scroll horizontally to see pinning.
            </p>
          </DataGrid.Toolbar>
          <Table className="min-w-[960px]">
            <Table.Header>
              <DataGrid.Header>
                <DataGrid.HeaderRow>
                  {columns.map((column) => {
                    const id = "accessorKey" in column ? String(column.accessorKey) : column.id;
                    const pinned = (column.meta as { pinned?: "start" | "end" } | undefined)
                      ?.pinned;

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
                    const id = "accessorKey" in column ? String(column.accessorKey) : column.id;
                    const pinned = (column.meta as { pinned?: "start" | "end" } | undefined)
                      ?.pinned;

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
  },
});

export const ActiveFilterChips = meta.story({
  render: () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
      { id: "role", value: "Admin" },
    ]);
    const [globalFilter, setGlobalFilter] = useState("alice");
    const columns = useUserColumns();

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers}
          initialState={{ pagination: { pageIndex: 0, pageSize: 8 } }}
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          state={{ columnFilters, globalFilter }}
        >
          <DataGrid.Toolbar>
            <div className="flex flex-col gap-3">
              <InputGroup>
                <InputGroup.Addon>
                  <MagnifyingGlassIcon />
                </InputGroup.Addon>
                <InputGroup.Input
                  aria-label="Search users"
                  onChange={(event) => setGlobalFilter(event.target.value)}
                  placeholder="Search…"
                  value={globalFilter}
                />
              </InputGroup>
              <FilterChipsToolbar<User> />
            </div>
          </DataGrid.Toolbar>
          <DataGridView colSpan={6} />
          <DataGridPaginationBar<User> />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const MultiGrouping = meta.story({
  render: () => {
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
            <p className="text-muted-foreground text-sm">
              Nested grouping by department, then role.
            </p>
          </DataGrid.Toolbar>
          <DataGridView colSpan={4} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const ColumnResize = meta.story({
  render: () => {
    const columns = useUserColumns();

    return (
      <DataGridShell>
        <DataGrid<User>
          columns={columns}
          data={allUsers.slice(0, 8)}
          defaultColumn={{ maxSize: 480, minSize: 80, size: 160 }}
          enableColumnResizing
        >
          <DataGrid.Toolbar>
            <p className="text-muted-foreground text-sm">
              Drag the edge of a column header to resize. Double-click a resizer to reset.
            </p>
          </DataGrid.Toolbar>
          <DataGridView colSpan={5} />
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const Virtualized = meta.story({
  render: () => {
    const columns = useUserColumns();
    const manyUsers = useMemo(() => {
      const template = allUsers[0];

      if (!template) {
        return [];
      }

      return Array.from({ length: 500 }, (_, index) => ({
        ...template,
        email: `user-${index}@example.com`,
        id: `virtual-${index}`,
        name: `User ${index + 1}`,
      }));
    }, []);

    return (
      <DataGridShell>
        <DataGrid<User> columns={columns} data={manyUsers} getRowId={(row) => row.id}>
          <DataGrid.Toolbar>
            <p className="text-muted-foreground text-sm">
              500 rows rendered with windowing via <code className="text-xs">VirtualBody</code>.
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
              <DataGrid.VirtualBody empty={<DataGrid.Empty colSpan={5} />} estimateSize={40}>
                <DataGrid.Row>
                  <DataGrid.Cell />
                </DataGrid.Row>
              </DataGrid.VirtualBody>
            </Table.Body>
          </Table>
        </DataGrid>
      </DataGridShell>
    );
  },
});

export const WithSortableData = meta.story({
  render: () => {
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
  },
});
