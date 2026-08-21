import {
  dataGridColumnResizerVariants,
  dataGridFilterHeadVariants,
  dataGridFooterVariants,
  dataGridInline2Variants,
  dataGridInline3Variants,
  dataGridInlineVariants,
  dataGridToolbarVariants,
  dataGridVariants,
} from "@pisagor/styles/ui/data-grid";
import { cn } from "@pisagor/utils";
import {
  type Cell,
  type Column,
  flexRender,
  getCoreRowModel,
  type Header,
  type Row,
  type TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { WithTestId } from "../../internal/types";
import { Table, type TableCellProps, type TableHeadProps, type TableRowProps } from "../table";
import {
  DataGridContext,
  type DataGridContextValue,
  DataGridHeaderCellContext,
  type DataGridHeaderCellContextValue,
  DataGridHeaderGroupContext,
  type DataGridHeaderGroupContextValue,
  DataGridRowContext,
  type DataGridRowContextValue,
  useDataGridContext,
  useDataGridHeaderCellContext,
  useDataGridHeaderGroupContext,
  useDataGridRowContext,
} from "./data-grid.context";

// #region Types
/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataGridProps<TData> = {
  children: ReactNode;
  className?: string;
  getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
} & Omit<TableOptions<TData>, "getCoreRowModel"> &
  WithTestId;

interface DataGridHeaderProps {
  children: ReactNode;
}

type DataGridHeaderRowProps = TableRowProps;

interface DataGridHeadProps extends TableHeadProps {
  /**
   * Renders a single column header.
   *
   * @remarks
   * When omitted, renders every visible header in the group.
   */
  columnId?: string;
  /**
   * Whether to allow stacked filter controls in the header cell.
   *
   * @defaultValue false
   */
  filter?: boolean;
}

interface DataGridBodyProps {
  children: ReactNode;
  /** Shown when the row model is empty. */
  empty?: ReactNode;
}

interface DataGridVirtualBodyProps extends DataGridBodyProps {
  /**
   * Estimated row height in pixels for the virtualizer.
   *
   * @defaultValue 40
   */
  estimateSize?: number;
  /**
   * Extra rows to render outside the viewport.
   *
   * @defaultValue 8
   */
  overscan?: number;
  /**
   * Height applied to the table scroll wrapper (CSS length).
   *
   * @defaultValue "24rem"
   */
  viewportHeight?: string;
}

type DataGridRowProps = TableRowProps;

interface DataGridCellProps extends TableCellProps {
  /**
   * Renders a single column cell.
   *
   * @remarks
   * When omitted, renders every visible cell in the row.
   */
  columnId?: string;
}

interface DataGridEmptyProps extends TableRowProps {
  colSpan?: number;
  children?: ReactNode;
}

interface DataGridColumnResizerProps extends ComponentProps<"div"> {}

interface DataGridRowProviderProps<TData> {
  row: Row<TData>;
  children: ReactNode;
}

interface DataGridToolbarProps extends ComponentProps<"div"> {}

interface DataGridFooterProps extends ComponentProps<"div"> {}
// #endregion

// #region Hooks
/**
 * Returns the TanStack Table instance from the nearest DataGrid context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The table instance for the current row model.
 */
export function useDataGrid<TData>() {
  return useDataGridContext<TData>().table;
}

/**
 * Returns the header group from the nearest DataGrid.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataGridHeaderGroup<TData>() {
  return useDataGridHeaderGroupContext<TData>().headerGroup;
}

/**
 * Returns the row from the nearest DataGrid.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataGridRow<TData>() {
  return useDataGridRowContext<TData>().row;
}

function columnSizeStyle(column: Column<unknown>, enabled: boolean): CSSProperties | undefined {
  if (!enabled) {
    return undefined;
  }

  return {
    minWidth: column.columnDef.minSize,
    width: column.getSize(),
  };
}
// #endregion

// #region Parts
function DataGridHeader<TData>({ children }: DataGridHeaderProps) {
  const table = useDataGridContext<TData>().table;

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <DataGridHeaderGroupContext
          key={headerGroup.id}
          value={{ headerGroup } as DataGridHeaderGroupContextValue<unknown>}
        >
          {children}
        </DataGridHeaderGroupContext>
      ))}
    </>
  );
}

function DataGridHeaderRow(props: DataGridHeaderRowProps) {
  return <Table.Row data-part="header-row" data-scope="data-grid" {...props} />;
}

const dataTableFilterHeadClassName = dataGridFilterHeadVariants();

function DataGridColumnResizer({ className, ...rest }: DataGridColumnResizerProps) {
  const headerCell = useDataGridHeaderCellContext();

  if (!headerCell) {
    return null;
  }

  const { header } = headerCell;

  if (!header.column.getCanResize()) {
    return null;
  }

  return (
    <div
      {...rest}
      aria-hidden="true"
      className={cn(
        dataGridColumnResizerVariants(),
        header.column.getIsResizing() && "bg-primary",
        className,
      )}
      data-part="column-resizer"
      data-scope="data-grid"
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
    />
  );
}

function DataGridHeadCell<TData>({
  header,
  children,
  className,
  filter = false,
  ...rest
}: DataGridHeadProps & { header: Header<TData, unknown> }) {
  const table = useDataGridContext<TData>().table;
  const sizingEnabled = Boolean(table.options.enableColumnResizing);
  const headClassName = cn(filter && dataTableFilterHeadClassName, className);

  return (
    <DataGridHeaderCellContext value={{ header } as DataGridHeaderCellContextValue<unknown>}>
      <Table.Head
        {...rest}
        className={cn(sizingEnabled && "relative", headClassName)}
        data-part="head"
        data-scope="data-grid"
        style={{
          ...columnSizeStyle(header.column as Column<unknown>, sizingEnabled),
          ...rest.style,
        }}
      >
        {children ?? (
          <>
            {flexRender(header.column.columnDef.header, header.getContext())}
            {sizingEnabled ? <DataGridColumnResizer /> : null}
          </>
        )}
      </Table.Head>
    </DataGridHeaderCellContext>
  );
}

function DataGridHead<TData>({
  columnId,
  children,
  className,
  filter = false,
  ...rest
}: DataGridHeadProps) {
  const { headerGroup } = useDataGridHeaderGroupContext<TData>();

  if (columnId) {
    const header = headerGroup.headers.find((item) => item.column.id === columnId);

    if (!header) {
      return null;
    }

    return (
      <DataGridHeadCell {...rest} className={className} filter={filter} header={header}>
        {children}
      </DataGridHeadCell>
    );
  }

  return (
    <>
      {headerGroup.headers.map((header) => (
        <DataGridHeadCell
          {...rest}
          className={className}
          filter={filter}
          header={header}
          key={header.id}
        />
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
export function renderDataGridCell<TData>(cell: Cell<TData, unknown>) {
  if (cell.getIsPlaceholder()) {
    return null;
  }

  if (cell.getIsAggregated()) {
    return flexRender(
      cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
      cell.getContext(),
    );
  }

  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

function DataGridBody<TData>({ children, empty = null }: DataGridBodyProps) {
  const table = useDataGridContext<TData>().table;
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return empty;
  }

  return (
    <>
      {rows.map((row) => (
        <DataGridRowContext key={row.id} value={{ row } as DataGridRowContextValue<unknown>}>
          {children}
        </DataGridRowContext>
      ))}
    </>
  );
}

function DataGridVirtualBody<TData>({
  children,
  empty = null,
  estimateSize = 40,
  overscan = 8,
  viewportHeight = "24rem",
}: DataGridVirtualBodyProps) {
  const table = useDataGridContext<TData>().table;
  const rows = table.getRowModel().rows;
  const anchorRef = useRef<HTMLTableRowElement>(null);
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = anchorRef.current?.closest(
      '[data-scope="table"][data-part="wrapper"]',
    ) as HTMLElement | null;

    setScrollElement(wrapper);

    if (wrapper) {
      wrapper.style.height = viewportHeight;
    }

    return () => {
      if (wrapper) {
        wrapper.style.height = "";
      }
    };
  }, [viewportHeight]);

  const virtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => estimateSize,
    getScrollElement: () => scrollElement,
    overscan,
  });

  if (rows.length === 0) {
    return (
      <>
        <tr className={dataGridInlineVariants()} ref={anchorRef} />
        {empty}
      </>
    );
  }

  const virtualRows = virtualizer.getVirtualItems();
  const paddingTop = virtualRows[0]?.start ?? 0;
  const paddingBottom =
    virtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0);

  return (
    <>
      {paddingTop > 0 ? (
        <tr data-part="virtual-spacer" data-scope="data-grid" ref={anchorRef}>
          <td colSpan={table.getAllColumns().length} style={{ height: paddingTop }} />
        </tr>
      ) : (
        <tr className={dataGridInline2Variants()} ref={anchorRef} />
      )}
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index];

        if (!row) {
          return null;
        }

        return (
          <DataGridRowContext key={row.id} value={{ row } as DataGridRowContextValue<unknown>}>
            {children}
          </DataGridRowContext>
        );
      })}
      {paddingBottom > 0 ? (
        <tr data-part="virtual-spacer" data-scope="data-grid">
          <td colSpan={table.getAllColumns().length} style={{ height: paddingBottom }} />
        </tr>
      ) : null}
    </>
  );
}

function DataGridRowProvider<TData>({ row, children }: DataGridRowProviderProps<TData>) {
  return (
    <DataGridRowContext value={{ row } as DataGridRowContextValue<unknown>}>
      {children}
    </DataGridRowContext>
  );
}

function DataGridRow<TData>({ className, style, ...rest }: DataGridRowProps) {
  const row = useDataGridRowContext<TData>().row;

  return (
    <Table.Row
      {...rest}
      aria-expanded={row.getCanExpand() ? row.getIsExpanded() : undefined}
      aria-selected={row.getIsSelected()}
      className={cn(row.getIsGrouped() && "bg-muted/40 font-medium", className)}
      data-depth={row.depth}
      data-expanded={row.getIsExpanded() ? "true" : undefined}
      data-grouped={row.getIsGrouped() ? "true" : undefined}
      data-part="row"
      data-scope="data-grid"
      data-state={row.getIsSelected() ? "selected" : undefined}
      style={style}
    />
  );
}

function DataGridCell<TData>({ columnId, children, className, style, ...rest }: DataGridCellProps) {
  const table = useDataGridContext<TData>().table;
  const row = useDataGridRowContext<TData>().row;
  const sizingEnabled = Boolean(table.options.enableColumnResizing);

  if (columnId) {
    const cell = row.getVisibleCells().find((item) => item.column.id === columnId);

    if (!cell) {
      return null;
    }

    return (
      <Table.Cell
        {...rest}
        className={className}
        data-part="cell"
        data-scope="data-grid"
        style={{
          ...columnSizeStyle(cell.column as Column<unknown>, sizingEnabled),
          ...style,
        }}
      >
        {children ?? renderDataGridCell(cell)}
      </Table.Cell>
    );
  }

  return (
    <>
      {row.getVisibleCells().map((cell) => (
        <Table.Cell
          {...rest}
          className={className}
          data-part="cell"
          data-scope="data-grid"
          key={cell.id}
          style={{
            ...columnSizeStyle(cell.column as Column<unknown>, sizingEnabled),
            ...style,
          }}
        >
          {renderDataGridCell(cell)}
        </Table.Cell>
      ))}
    </>
  );
}

function DataGridEmpty({
  children = "No results. Try a different search or clear filters.",
  colSpan,
  className,
  ...rest
}: DataGridEmptyProps) {
  const table = useDataGridContext().table;
  const span = colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row {...rest} className={className} data-part="empty" data-scope="data-grid">
      <Table.Cell className={dataGridInline3Variants()} colSpan={span}>
        {children}
      </Table.Cell>
    </Table.Row>
  );
}

function DataGridToolbar({ className, ...rest }: DataGridToolbarProps) {
  return (
    <div
      {...rest}
      className={dataGridToolbarVariants({ className })}
      data-part="toolbar"
      data-scope="data-grid"
    />
  );
}

function DataGridFooter({ className, ...rest }: DataGridFooterProps) {
  return (
    <div
      {...rest}
      className={dataGridFooterVariants({ className })}
      data-part="footer"
      data-scope="data-grid"
    />
  );
}

function DataGridRoot<TData>({
  children,
  className,
  getCoreRowModel: getCoreRowModelOption,
  testId,
  ...rest
}: DataGridProps<TData>) {
  const table = useReactTable<TData>({
    columnResizeMode: rest.columnResizeMode ?? "onChange",
    getCoreRowModel: getCoreRowModelOption ?? getCoreRowModel(),
    ...rest,
  });

  const contextValue = useMemo(() => ({ table }), [table]);

  return (
    <DataGridContext value={contextValue as DataGridContextValue<unknown>}>
      <div
        className={dataGridVariants({ className })}
        data-part="root"
        data-scope="data-grid"
        data-testid={testId}
      >
        {children}
      </div>
    </DataGridContext>
  );
}

export function DataGrid<TData>(props: DataGridProps<TData>) {
  return DataGridRoot(props);
}

DataGrid.Body = DataGridBody;

DataGrid.Cell = DataGridCell;

DataGrid.ColumnResizer = DataGridColumnResizer;

DataGrid.Empty = DataGridEmpty;

DataGrid.Footer = DataGridFooter;

DataGrid.Head = DataGridHead;

DataGrid.Header = DataGridHeader;

DataGrid.HeaderRow = DataGridHeaderRow;

DataGrid.Row = DataGridRow;

DataGrid.RowProvider = DataGridRowProvider;

DataGrid.Toolbar = DataGridToolbar;

DataGrid.VirtualBody = DataGridVirtualBody;
// #endregion

// #region Display Names
DataGridHeader.displayName = "DataGrid.Header";
DataGridHeaderRow.displayName = "DataGrid.HeaderRow";
DataGridColumnResizer.displayName = "DataGrid.ColumnResizer";
DataGridHead.displayName = "DataGrid.Head";
DataGridBody.displayName = "DataGrid.Body";
DataGridVirtualBody.displayName = "DataGrid.VirtualBody";
DataGridRowProvider.displayName = "DataGrid.RowProvider";
DataGridRow.displayName = "DataGrid.Row";
DataGridCell.displayName = "DataGrid.Cell";
DataGridEmpty.displayName = "DataGrid.Empty";
DataGridToolbar.displayName = "DataGrid.Toolbar";
DataGridFooter.displayName = "DataGrid.Footer";
DataGrid.displayName = "DataGrid";
// #endregion
