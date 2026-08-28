import { dataGridVariants } from "@pisagor/recipes/data-grid";
import type { RowData, TableOptions } from "@tanstack/react-table";
import { flexRender, useTable } from "@tanstack/react-table";
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
import { cn } from "../../internal/utils";
import { Table, type TableCellProps, type TableHeadProps, type TableRowProps } from "../table";
import {
  type Cell,
  type Column,
  DataGridContext,
  type DataGridContextValue,
  DataGridHeaderCellContext,
  type DataGridHeaderCellContextValue,
  DataGridHeaderGroupContext,
  type DataGridHeaderGroupContextValue,
  DataGridRowContext,
  type DataGridRowContextValue,
  type Header,
  type Row,
  useDataGridContext,
  useDataGridHeaderCellContext,
  useDataGridHeaderGroupContext,
  useDataGridRowContext,
} from "./data-grid.context";
import { type DataGridFeatures, dataGridFeatures } from "./data-grid.features";

// #region Types
/**
 * @typeParam TData - Row shape passed to `columns` and `data`.
 */
export type DataGridProps<TData extends RowData> = {
  children: ReactNode;
  className?: string;
  /**
   * TanStack Table features. Defaults to the DataGrid kitchen-sink preset.
   *
   * @defaultValue dataGridFeatures
   */
  features?: DataGridFeatures;
} & Omit<TableOptions<DataGridFeatures, TData>, "features">;

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

interface DataGridRowProviderProps<TData extends RowData> {
  row: Row<DataGridFeatures, TData>;
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
export function useDataGrid<TData extends RowData>() {
  return useDataGridContext<TData>().table;
}

/**
 * Returns the header group from the nearest DataGrid.Header context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active header group.
 */
export function useDataGridHeaderGroup<TData extends RowData>() {
  return useDataGridHeaderGroupContext<TData>().headerGroup;
}

/**
 * Returns the row from the nearest DataGrid.Row context.
 *
 * @typeParam TData - Row shape for the table context.
 * @returns The active table row.
 */
export function useDataGridRow<TData extends RowData>() {
  return useDataGridRowContext<TData>().row;
}

function columnSizeStyle<TData extends RowData>(
  column: Column<DataGridFeatures, TData, unknown>,
  enabled: boolean,
): CSSProperties | undefined {
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
function DataGridHeader<TData extends RowData>({ children }: DataGridHeaderProps) {
  const table = useDataGridContext<TData>().table;

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <DataGridHeaderGroupContext
          key={headerGroup.id}
          value={{ headerGroup } as DataGridHeaderGroupContextValue<RowData>}
        >
          {children}
        </DataGridHeaderGroupContext>
      ))}
    </>
  );
}

function DataGridHeaderRow(props: DataGridHeaderRowProps) {
  return <Table.Row {...props} data-part="header-row" data-scope="data-grid" />;
}

function DataGridColumnResizer({ className, ...rest }: DataGridColumnResizerProps) {
  const headerCell = useDataGridHeaderCellContext();
  const { slots } = useDataGridContext();

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
        slots.columnResizer(),
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

function DataGridHeadCell<TData extends RowData>({
  header,
  children,
  className,
  filter = false,
  ...rest
}: DataGridHeadProps & { header: Header<DataGridFeatures, TData, unknown> }) {
  const { slots, table } = useDataGridContext<TData>();
  const sizingEnabled = Boolean(table.options.enableColumnResizing);
  const headClassName = cn(filter && slots.filterHead(), className);

  return (
    <DataGridHeaderCellContext value={{ header } as DataGridHeaderCellContextValue<RowData>}>
      <Table.Head
        {...rest}
        className={cn(sizingEnabled && "relative", headClassName)}
        data-part="head"
        data-scope="data-grid"
        style={{
          ...columnSizeStyle(header.column, sizingEnabled),
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

function DataGridHead<TData extends RowData>({
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
export function renderDataGridCell<TData extends RowData>(
  cell: Cell<DataGridFeatures, TData, unknown>,
) {
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

function DataGridBody<TData extends RowData>({ children, empty = null }: DataGridBodyProps) {
  const table = useDataGridContext<TData>().table;
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return empty;
  }

  return (
    <>
      {rows.map((row) => (
        <DataGridRowContext key={row.id} value={{ row } as DataGridRowContextValue<RowData>}>
          {children}
        </DataGridRowContext>
      ))}
    </>
  );
}

function DataGridVirtualBody<TData extends RowData>({
  children,
  empty = null,
  estimateSize = 40,
  overscan = 8,
  viewportHeight = "24rem",
}: DataGridVirtualBodyProps) {
  const { slots, table } = useDataGridContext<TData>();
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
        <tr className={slots.anchor()} ref={anchorRef} />
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
        <tr className={slots.anchor()} ref={anchorRef} />
      )}
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index];

        if (!row) {
          return null;
        }

        return (
          <DataGridRowContext key={row.id} value={{ row } as DataGridRowContextValue<RowData>}>
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

function DataGridRowProvider<TData extends RowData>({
  row,
  children,
}: DataGridRowProviderProps<TData>) {
  return (
    <DataGridRowContext value={{ row } as DataGridRowContextValue<RowData>}>
      {children}
    </DataGridRowContext>
  );
}

function DataGridRow<TData extends RowData>({ className, style, ...rest }: DataGridRowProps) {
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

function DataGridCell<TData extends RowData>({
  columnId,
  children,
  className,
  style,
  ...rest
}: DataGridCellProps) {
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
          ...columnSizeStyle(cell.column, sizingEnabled),
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
            ...columnSizeStyle(cell.column, sizingEnabled),
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
  const { slots, table } = useDataGridContext();
  const span = colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row {...rest} className={className} data-part="empty" data-scope="data-grid">
      <Table.Cell className={slots.empty()} colSpan={span}>
        {children}
      </Table.Cell>
    </Table.Row>
  );
}

function DataGridToolbar({ className, ...rest }: DataGridToolbarProps) {
  const { slots } = useDataGridContext();

  return (
    <div
      {...rest}
      className={slots.toolbar({ className })}
      data-part="toolbar"
      data-scope="data-grid"
    />
  );
}

function DataGridFooter({ className, ...rest }: DataGridFooterProps) {
  const { slots } = useDataGridContext();

  return (
    <div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="data-grid"
    />
  );
}

function DataGridRoot<TData extends RowData>({
  children,
  className,
  columnResizeMode = "onChange",
  features = dataGridFeatures,
  ...rest
}: DataGridProps<TData>) {
  const table = useTable({
    ...rest,
    columnResizeMode,
    features,
  });
  const slots = dataGridVariants();

  const contextValue = useMemo(() => ({ slots, table }), [slots, table]);

  return (
    <DataGridContext value={contextValue as DataGridContextValue<RowData>}>
      <div className={slots.base({ className })} data-part="root" data-scope="data-grid">
        {children}
      </div>
    </DataGridContext>
  );
}

export function DataGrid<TData extends RowData>(props: DataGridProps<TData>) {
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
