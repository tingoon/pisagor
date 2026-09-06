import { dataTableRecipe } from "@pisagor/recipes/data-table";
import type { RowData, TableOptions } from "@tanstack/react-table";
import { flexRender, useTable } from "@tanstack/react-table";
import { type ComponentProps, type ReactNode, useMemo } from "react";
import {
  Table,
  type TableCellProps,
  type TableHeadProps,
  type TableRowProps,
} from "../components/table";
import type {
  Cell,
  DataTableContextValue,
  DataTableHeaderGroupContextValue,
  DataTableRowContextValue,
} from "./data-table.context";
import {
  DataTableContext,
  DataTableHeaderGroupContext,
  DataTableRowContext,
  useDataTableContext,
  useDataTableHeaderGroupContext,
  useDataTableRowContext,
} from "./data-table.context";
import { type DataTableFeatures, dataTableFeatures } from "./data-table.features";

// #region Types
/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataTableProps<TData extends RowData> = {
  children: ReactNode;
  className?: string;
  /**
   * TanStack Table features. Defaults to the DataTable feature preset.
   *
   * @defaultValue dataTableFeatures
   */
  features?: DataTableFeatures;
  /**
   * Style recipe. Defaults to `dataTableRecipe` from `@pisagor/recipes/data-table`.
   *
   * @defaultValue dataTableRecipe
   */
  recipe?: typeof dataTableRecipe;
} & Omit<TableOptions<DataTableFeatures, TData>, "features">;

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

interface DataTableToolbarProps extends ComponentProps<"div"> {}

interface DataTableFooterProps extends ComponentProps<"div"> {}
// #endregion

// #region Hooks
/**
 * Returns the TanStack Table instance from the nearest DataTable context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataTable<TData extends RowData>() {
  return useDataTableContext<TData>().table;
}

/**
 * Returns the header group from the nearest DataTable.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataTableHeaderGroup<TData extends RowData>() {
  return useDataTableHeaderGroupContext<TData>().headerGroup;
}

/**
 * Returns the row from the nearest DataTable.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataTableRow<TData extends RowData>() {
  return useDataTableRowContext<TData>().row;
}
// #endregion

// #region Parts
function DataTableHeader<TData extends RowData>({ children }: DataTableHeaderProps) {
  const table = useDataTableContext<TData>().table;

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <DataTableHeaderGroupContext
          key={headerGroup.id}
          value={{ headerGroup } as DataTableHeaderGroupContextValue<RowData>}
        >
          {children}
        </DataTableHeaderGroupContext>
      ))}
    </>
  );
}

function DataTableHeaderRow(props: DataTableHeaderRowProps) {
  return <Table.Row {...props} data-part="header-row" data-scope="data-table" />;
}

function DataTableHead<TData extends RowData>({
  columnId,
  children,
  className,
  ...rest
}: DataTableHeadProps) {
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

/**
 * Renders a table cell using the column definition's cell renderer.
 *
 * @typeParam TData - Row shape for the cell context.
 * @returns The rendered cell content, or null for placeholder cells.
 */
export function renderDataTableCell<TData extends RowData>(
  cell: Cell<DataTableFeatures, TData, unknown>,
) {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

function DataTableBody<TData extends RowData>({ children, empty = null }: DataTableBodyProps) {
  const table = useDataTableContext<TData>().table;
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return empty;
  }

  return (
    <>
      {rows.map((row) => (
        <DataTableRowContext key={row.id} value={{ row } as DataTableRowContextValue<RowData>}>
          {children}
        </DataTableRowContext>
      ))}
    </>
  );
}

function DataTableRow<TData extends RowData>({ className, ...rest }: DataTableRowProps) {
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

function DataTableCell<TData extends RowData>({ columnId, children, ...rest }: DataTableCellProps) {
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

function DataTableEmpty({
  children = "No results. Try a different search or clear filters.",
  colSpan,
  className,
  ...rest
}: DataTableEmptyProps) {
  const { slots, table } = useDataTableContext();
  const span = colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row {...rest} className={className} data-part="empty" data-scope="data-table">
      <Table.Cell className={slots.empty()} colSpan={span}>
        {children}
      </Table.Cell>
    </Table.Row>
  );
}

function DataTableToolbar({ className, ...rest }: DataTableToolbarProps) {
  const { slots } = useDataTableContext();

  return (
    <div
      {...rest}
      className={slots.toolbar({ className })}
      data-part="toolbar"
      data-scope="data-table"
    />
  );
}

function DataTableFooter({ className, ...rest }: DataTableFooterProps) {
  const { slots } = useDataTableContext();

  return (
    <div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="data-table"
    />
  );
}

function DataTableRoot<TData extends RowData>({
  children,
  recipe = dataTableRecipe,
  className,
  features = dataTableFeatures,
  ...rest
}: DataTableProps<TData>) {
  const table = useTable({
    ...rest,
    features,
  });
  const slots = recipe();

  const contextValue = useMemo(() => ({ slots, table }), [slots, table]);

  return (
    <DataTableContext value={contextValue as DataTableContextValue<RowData>}>
      <div className={slots.base({ className })} data-part="root" data-scope="data-table">
        {children}
      </div>
    </DataTableContext>
  );
}

export function DataTable<TData extends RowData>(props: DataTableProps<TData>) {
  return DataTableRoot(props);
}

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

// #region Display Names
DataTableHeader.displayName = "DataTable.Header";
DataTableHeaderRow.displayName = "DataTable.HeaderRow";
DataTableHead.displayName = "DataTable.Head";
DataTableBody.displayName = "DataTable.Body";
DataTableRow.displayName = "DataTable.Row";
DataTableCell.displayName = "DataTable.Cell";
DataTableEmpty.displayName = "DataTable.Empty";
DataTableToolbar.displayName = "DataTable.Toolbar";
DataTableFooter.displayName = "DataTable.Footer";
DataTable.displayName = "DataTable";
// #endregion
