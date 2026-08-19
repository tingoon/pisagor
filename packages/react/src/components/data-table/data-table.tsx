import {
  dataTableFooterVariants,
  dataTableInlineVariants,
  dataTableToolbarVariants,
  dataTableVariants,
} from "@pisagor/styles/ui/data-table";
import { cn } from "@pisagor/utils";
import {
  type Cell,
  flexRender,
  getCoreRowModel,
  type HeaderGroup,
  type Row,
  type TableOptions,
  type Table as TableType,
  useReactTable,
} from "@tanstack/react-table";
import { type ComponentProps, type ReactNode, useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Table, type TableCellProps, type TableHeadProps, type TableRowProps } from "../table";

// #region Types
interface DataTableContextValue<TData> {
  table: TableType<TData>;
}

interface DataTableHeaderGroupContextValue<TData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataTableRowContextValue<TData> {
  row: Row<TData>;
}

/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataTableProps<TData> = {
  children: ReactNode;
  className?: string;
  getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
} & Omit<TableOptions<TData>, "getCoreRowModel"> &
  WithTestId;

interface DataTableHeaderProps {
  children: ReactNode;
}

type DataTableHeaderRowProps = TableRowProps;

interface DataTableHeadProps extends TableHeadProps {
  /**
   * Renders a single column header.
   *
   * @remarks
   * When omitted, renders every visible header in the group.
   */
  columnId?: string;
}

interface DataTableBodyProps {
  children: ReactNode;
  /** Shown when the row model is empty. */
  empty?: ReactNode;
}

type DataTableRowProps = TableRowProps;

interface DataTableCellProps extends TableCellProps {
  /**
   * Renders a single column cell.
   *
   * @remarks
   * When omitted, renders every visible cell in the row.
   */
  columnId?: string;
}

interface DataTableEmptyProps extends TableRowProps {
  colSpan?: number;
  children?: ReactNode;
}
// #endregion

// #region Context
const [DataTableContext, useDataTableContextBase] = createContext<DataTableContextValue<unknown>>({
  name: "DataTable",
});

const [DataTableHeaderGroupContext, useDataTableHeaderGroupContextBase] = createContext<
  DataTableHeaderGroupContextValue<unknown>
>({
  name: "DataTableHeaderGroup",
});

const [DataTableRowContext, useDataTableRowContextBase] = createContext<
  DataTableRowContextValue<unknown>
>({
  name: "DataTableRow",
});
// #endregion

// #region Hooks
/**
 * Returns the TanStack Table instance from the nearest DataTable context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataTable<TData>() {
  return useDataTableContext<TData>().table;
}

/**
 * Returns the header group from the nearest DataTable.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataTableHeaderGroup<TData>() {
  return useDataTableHeaderGroupContext<TData>().headerGroup;
}

/**
 * Returns the row from the nearest DataTable.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataTableRow<TData>() {
  return useDataTableRowContext<TData>().row;
}
// #endregion

// #region Components
function useDataTableContext<TData>() {
  return useDataTableContextBase() as DataTableContextValue<TData>;
}

function useDataTableHeaderGroupContext<TData>() {
  return useDataTableHeaderGroupContextBase() as DataTableHeaderGroupContextValue<TData>;
}

function useDataTableRowContext<TData>() {
  return useDataTableRowContextBase() as DataTableRowContextValue<TData>;
}

function DataTableHeader<TData>({ children }: DataTableHeaderProps) {
  const table = useDataTableContext<TData>().table;

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <DataTableHeaderGroupContext
          key={headerGroup.id}
          value={{ headerGroup } as DataTableHeaderGroupContextValue<unknown>}
        >
          {children}
        </DataTableHeaderGroupContext>
      ))}
    </>
  );
}
DataTableHeader.displayName = "DataTable.Header";

function DataTableHeaderRow(props: DataTableHeaderRowProps) {
  return <Table.Row data-part="header-row" data-scope="data-table" {...props} />;
}
DataTableHeaderRow.displayName = "DataTable.HeaderRow";

function DataTableHead<TData>({ columnId, children, className, ...rest }: DataTableHeadProps) {
  const { headerGroup } = useDataTableHeaderGroupContext<TData>();

  if (columnId) {
    const header = headerGroup.headers.find((item) => item.column.id === columnId);

    if (!header) {
      return null;
    }

    return (
      <Table.Head {...rest} className={className} data-part="head" data-scope="data-table">
        {children ?? flexRender(header.column.columnDef.header, header.getContext())}
      </Table.Head>
    );
  }

  return (
    <>
      {headerGroup.headers.map((header) => (
        <Table.Head
          {...rest}
          className={className}
          data-part="head"
          data-scope="data-table"
          key={header.id}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
        </Table.Head>
      ))}
    </>
  );
}
DataTableHead.displayName = "DataTable.Head";

/**
 * Renders a table cell using the column definition's cell renderer.
 *
 * @typeParam TData - Row shape for the cell context.
 * @returns The rendered cell content, or null for placeholder cells.
 */
export function renderDataTableCell<TData>(cell: Cell<TData, unknown>) {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

function DataTableBody<TData>({ children, empty = null }: DataTableBodyProps) {
  const table = useDataTableContext<TData>().table;
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return empty;
  }

  return (
    <>
      {rows.map((row) => (
        <DataTableRowContext key={row.id} value={{ row } as DataTableRowContextValue<unknown>}>
          {children}
        </DataTableRowContext>
      ))}
    </>
  );
}
DataTableBody.displayName = "DataTable.Body";

function DataTableRow<TData>({ className, ...rest }: DataTableRowProps) {
  const row = useDataTableRowContext<TData>().row;

  return (
    <Table.Row
      {...rest}
      aria-selected={row.getIsSelected()}
      className={className}
      data-part="row"
      data-scope="data-table"
      data-state={row.getIsSelected() ? "selected" : undefined}
    />
  );
}
DataTableRow.displayName = "DataTable.Row";

function DataTableCell<TData>({ columnId, children, ...rest }: DataTableCellProps) {
  const row = useDataTableRowContext<TData>().row;

  if (columnId) {
    const cell = row.getVisibleCells().find((item) => item.column.id === columnId);

    if (!cell) {
      return null;
    }

    return (
      <Table.Cell {...rest} data-part="cell" data-scope="data-table">
        {children ?? renderDataTableCell(cell)}
      </Table.Cell>
    );
  }

  return (
    <>
      {row.getVisibleCells().map((cell) => (
        <Table.Cell {...rest} data-part="cell" data-scope="data-table" key={cell.id}>
          {renderDataTableCell(cell)}
        </Table.Cell>
      ))}
    </>
  );
}
DataTableCell.displayName = "DataTable.Cell";

function DataTableEmpty({
  children = "No results. Try a different search or clear filters.",
  colSpan,
  className,
  ...rest
}: DataTableEmptyProps) {
  const table = useDataTableContext().table;
  const span = colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row {...rest} className={className} data-part="empty" data-scope="data-table">
      <Table.Cell className={dataTableInlineVariants()} colSpan={span}>
        {children}
      </Table.Cell>
    </Table.Row>
  );
}
DataTableEmpty.displayName = "DataTable.Empty";

function DataTableToolbar({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={cn(dataTableToolbarVariants(), className)}
      data-part="toolbar"
      data-scope="data-table"
    />
  );
}
DataTableToolbar.displayName = "DataTable.Toolbar";

function DataTableFooter({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={cn(dataTableFooterVariants(), className)}
      data-part="footer"
      data-scope="data-table"
    />
  );
}
DataTableFooter.displayName = "DataTable.Footer";

function DataTableRoot<TData>({
  children,
  className,
  getCoreRowModel: getCoreRowModelOption,
  testId,
  ...rest
}: DataTableProps<TData>) {
  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModelOption ?? getCoreRowModel(),
    ...rest,
  });

  const contextValue = useMemo(() => ({ table }), [table]);

  return (
    <DataTableContext value={contextValue as DataTableContextValue<unknown>}>
      <div
        className={cn(dataTableVariants(), className)}
        data-part="root"
        data-scope="data-table"
        data-testid={testId}
      >
        {children}
      </div>
    </DataTableContext>
  );
}

export function DataTable<TData>(props: DataTableProps<TData>) {
  return DataTableRoot(props);
}
DataTable.displayName = "DataTable";

DataTable.Body = DataTableBody;

DataTable.Cell = DataTableCell;

DataTable.Empty = DataTableEmpty;

DataTable.Footer = DataTableFooter;

DataTable.Head = DataTableHead;

DataTable.Header = DataTableHeader;

DataTable.HeaderRow = DataTableHeaderRow;

DataTable.Row = DataTableRow;

DataTable.Toolbar = DataTableToolbar;
// #endregion
