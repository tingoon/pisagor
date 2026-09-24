import { dataGridRecipe } from "@pisagor/recipes/data-grid";
import { cn } from "@pisagor/utils";
import type { RowData, TableOptions } from "@tanstack/solid-table";
import { createTable, flexRender } from "@tanstack/solid-table";
import { createVirtualizer } from "@tanstack/solid-virtual";
import type { ComponentProps, JSX } from "solid-js";
import { createSignal, For, onCleanup, onMount, Show, splitProps } from "solid-js";
import {
  Table,
  type TableCellProps,
  type TableHeadProps,
  type TableRowProps,
} from "../components/table";
import type {
  Cell,
  DataGridContextValue,
  DataGridHeaderCellContextValue,
  DataGridHeaderGroupContextValue,
  DataGridRowContextValue,
  Header,
  Row,
} from "./data-grid.context";
import {
  DataGridContext,
  DataGridHeaderCellContext,
  DataGridHeaderGroupContext,
  DataGridRowContext,
  useDataGridContext,
  useDataGridHeaderCellContext,
  useDataGridHeaderGroupContext,
  useDataGridRowContext,
} from "./data-grid.context";
import { type DataGridFeatures, dataGridFeatures } from "./data-grid.features";

export type DataGridProps<TData extends RowData> = {
  children: JSX.Element;
  class?: string;
  features?: DataGridFeatures;
  recipe?: typeof dataGridRecipe;
} & Omit<TableOptions<DataGridFeatures, TData>, "features">;

interface DataGridHeaderProps {
  children: JSX.Element;
}

type DataGridHeaderRowProps = TableRowProps;

interface DataGridHeadProps extends TableHeadProps {
  columnId?: string;
  filter?: boolean;
}

interface DataGridBodyProps {
  children: JSX.Element;
  empty?: JSX.Element;
}

interface DataGridVirtualBodyProps extends DataGridBodyProps {
  estimateSize?: number;
  overscan?: number;
  viewportHeight?: string;
}

type DataGridRowProps = TableRowProps;

interface DataGridCellProps extends TableCellProps {
  columnId?: string;
}

interface DataGridEmptyProps extends TableRowProps {
  colSpan?: number;
  children?: JSX.Element;
}

type DataGridColumnResizerProps = ComponentProps<"div">;

interface DataGridRowProviderProps<TData extends RowData> {
  row: Row<DataGridFeatures, TData>;
  children: JSX.Element;
}

type DataGridToolbarProps = ComponentProps<"div">;
type DataGridFooterProps = ComponentProps<"div">;

export function useDataGrid<TData extends RowData>() {
  return useDataGridContext<TData>().table;
}

export function useDataGridHeaderGroup<TData extends RowData>() {
  return useDataGridHeaderGroupContext<TData>().headerGroup;
}

export function useDataGridRow<TData extends RowData>() {
  return useDataGridRowContext<TData>().row;
}

function columnSizeStyle<TData extends RowData>(
  column: import("./data-grid.context").Column<DataGridFeatures, TData, unknown>,
  enabled: boolean,
): JSX.CSSProperties | undefined {
  if (!enabled) return undefined;
  return {
    "min-width": `${column.columnDef.minSize}px`,
    width: `${column.getSize()}px`,
  };
}

function DataGridHeader<TData extends RowData>(props: DataGridHeaderProps): JSX.Element {
  const table = useDataGridContext<TData>().table;
  return (
    <For each={table.getHeaderGroups()}>
      {(headerGroup) => (
        <DataGridHeaderGroupContext
          value={{ headerGroup } as DataGridHeaderGroupContextValue<RowData>}
        >
          {props.children}
        </DataGridHeaderGroupContext>
      )}
    </For>
  );
}

function DataGridHeaderRow(props: DataGridHeaderRowProps): JSX.Element {
  return <Table.Row {...props} data-part="header-row" data-scope="data-grid" />;
}

function DataGridColumnResizer(props: DataGridColumnResizerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const headerCell = useDataGridHeaderCellContext();
  const { slots } = useDataGridContext();

  return (
    <Show when={headerCell}>
      {(cell) => {
        const header = () => cell().header;
        return (
          <Show when={header().column.getCanResize()}>
            <div
              {...rest}
              aria-hidden="true"
              class={cn(
                slots.columnResizer(),
                header().column.getIsResizing() && "bg-primary",
                local.class,
              )}
              data-part="column-resizer"
              data-scope="data-grid"
              onDblClick={() => header().column.resetSize()}
              onMouseDown={header().getResizeHandler()}
              onTouchStart={header().getResizeHandler()}
            />
          </Show>
        );
      }}
    </Show>
  );
}

function DataGridHeadCell<TData extends RowData>(
  props: DataGridHeadProps & { header: Header<DataGridFeatures, TData, unknown> },
): JSX.Element {
  const [local, rest] = splitProps(props, ["header", "children", "class", "filter", "style"]);
  const { slots, table } = useDataGridContext<TData>();
  const sizingEnabled = () => Boolean(table.options.enableColumnResizing);
  const headClass = () => cn(local.filter && slots.filterHead(), local.class);

  return (
    <DataGridHeaderCellContext
      value={{ header: local.header } as DataGridHeaderCellContextValue<RowData>}
    >
      <Table.Head
        {...rest}
        class={cn(sizingEnabled() && "relative", headClass())}
        data-part="head"
        data-scope="data-grid"
        style={{
          ...columnSizeStyle(local.header.column, sizingEnabled()),
          ...(local.style as JSX.CSSProperties | undefined),
        }}
      >
        <Show
          fallback={
            <>
              {flexRender(local.header.column.columnDef.header, local.header.getContext())}
              <Show when={sizingEnabled()}>
                <DataGridColumnResizer />
              </Show>
            </>
          }
          when={local.children}
        >
          {local.children}
        </Show>
      </Table.Head>
    </DataGridHeaderCellContext>
  );
}

function DataGridHead<TData extends RowData>(props: DataGridHeadProps): JSX.Element {
  const [local, rest] = splitProps(props, ["columnId", "children", "class", "filter"]);
  const { headerGroup } = useDataGridHeaderGroupContext<TData>();

  return (
    <Show
      fallback={
        <For each={headerGroup.headers}>
          {(header) => (
            <DataGridHeadCell {...rest} class={local.class} filter={local.filter} header={header} />
          )}
        </For>
      }
      when={local.columnId}
    >
      {(columnId) => {
        const header = headerGroup.headers.find((item) => item.column.id === columnId());
        return (
          <Show when={header}>
            {(h) => (
              <DataGridHeadCell {...rest} class={local.class} filter={local.filter} header={h()}>
                {local.children}
              </DataGridHeadCell>
            )}
          </Show>
        );
      }}
    </Show>
  );
}

export function renderDataGridCell<TData extends RowData>(
  cell: Cell<DataGridFeatures, TData, unknown>,
) {
  if (cell.getIsPlaceholder()) return null;
  if (cell.getIsAggregated()) {
    return flexRender(
      cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
      cell.getContext(),
    );
  }
  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

function DataGridBody<TData extends RowData>(props: DataGridBodyProps): JSX.Element {
  const table = useDataGridContext<TData>().table;
  const rows = () => table.getRowModel().rows;

  return (
    <Show fallback={props.empty} when={rows().length > 0}>
      <For each={rows()}>
        {(row) => (
          <DataGridRowContext value={{ row } as DataGridRowContextValue<RowData>}>
            {props.children}
          </DataGridRowContext>
        )}
      </For>
    </Show>
  );
}

function DataGridVirtualBody<TData extends RowData>(props: DataGridVirtualBodyProps): JSX.Element {
  const [local] = splitProps(props, [
    "children",
    "empty",
    "estimateSize",
    "overscan",
    "viewportHeight",
  ]);
  const estimateSize = () => local.estimateSize ?? 40;
  const overscan = () => local.overscan ?? 8;
  const viewportHeight = () => local.viewportHeight ?? "24rem";

  const { slots, table } = useDataGridContext<TData>();
  const rows = () => table.getRowModel().rows;
  const [scrollElement, setScrollElement] = createSignal<HTMLElement | null>(null);
  let anchorRef: HTMLTableRowElement | undefined;

  onMount(() => {
    const wrapper = anchorRef?.closest(
      '[data-scope="table"][data-part="wrapper"]',
    ) as HTMLElement | null;
    setScrollElement(wrapper);
    if (wrapper) {
      wrapper.style.height = viewportHeight();
    }
    onCleanup(() => {
      if (wrapper) wrapper.style.height = "";
    });
  });

  const virtualizer = createVirtualizer({
    get count() {
      return rows().length;
    },
    estimateSize: () => estimateSize(),
    getScrollElement: () => scrollElement(),
    get overscan() {
      return overscan();
    },
  });

  const virtualRows = () => virtualizer.getVirtualItems();
  const paddingTop = () => virtualRows()[0]?.start ?? 0;
  const paddingBottom = () => {
    const items = virtualRows();
    return virtualizer.getTotalSize() - (items[items.length - 1]?.end ?? 0);
  };

  return (
    <Show
      fallback={
        <>
          <tr class={slots.anchor()} ref={(el) => (anchorRef = el)} />
          {local.empty}
        </>
      }
      when={rows().length > 0}
    >
      <Show
        fallback={<tr class={slots.anchor()} ref={(el) => (anchorRef = el)} />}
        when={paddingTop() > 0}
      >
        <tr data-part="virtual-spacer" data-scope="data-grid" ref={(el) => (anchorRef = el)}>
          <td colSpan={table.getAllColumns().length} style={{ height: `${paddingTop()}px` }} />
        </tr>
      </Show>
      <For each={virtualRows()}>
        {(virtualRow) => {
          const row = () => rows()[virtualRow.index];
          return (
            <Show when={row()}>
              {(r) => (
                <DataGridRowContext value={{ row: r() } as DataGridRowContextValue<RowData>}>
                  {local.children}
                </DataGridRowContext>
              )}
            </Show>
          );
        }}
      </For>
      <Show when={paddingBottom() > 0}>
        <tr data-part="virtual-spacer" data-scope="data-grid">
          <td colSpan={table.getAllColumns().length} style={{ height: `${paddingBottom()}px` }} />
        </tr>
      </Show>
    </Show>
  );
}

function DataGridRowProvider<TData extends RowData>(
  props: DataGridRowProviderProps<TData>,
): JSX.Element {
  return (
    <DataGridRowContext value={{ row: props.row } as DataGridRowContextValue<RowData>}>
      {props.children}
    </DataGridRowContext>
  );
}

function DataGridRow<TData extends RowData>(props: DataGridRowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const row = useDataGridRowContext<TData>().row;

  return (
    <Table.Row
      {...rest}
      aria-expanded={row.getCanExpand() ? row.getIsExpanded() : undefined}
      aria-selected={row.getIsSelected()}
      class={cn(row.getIsGrouped() && "bg-muted/40 font-medium", local.class)}
      data-depth={row.depth}
      data-expanded={row.getIsExpanded() ? "true" : undefined}
      data-grouped={row.getIsGrouped() ? "true" : undefined}
      data-part="row"
      data-scope="data-grid"
      data-state={row.getIsSelected() ? "selected" : undefined}
      style={local.style}
    />
  );
}

function DataGridCell<TData extends RowData>(props: DataGridCellProps): JSX.Element {
  const [local, rest] = splitProps(props, ["columnId", "children", "class", "style"]);
  const table = useDataGridContext<TData>().table;
  const row = useDataGridRowContext<TData>().row;
  const sizingEnabled = () => Boolean(table.options.enableColumnResizing);

  return (
    <Show
      fallback={
        <For each={row.getVisibleCells()}>
          {(cell) => (
            <Table.Cell
              {...rest}
              class={local.class}
              data-part="cell"
              data-scope="data-grid"
              style={{
                ...columnSizeStyle(cell.column, sizingEnabled()),
                ...(local.style as JSX.CSSProperties | undefined),
              }}
            >
              {renderDataGridCell(cell)}
            </Table.Cell>
          )}
        </For>
      }
      when={local.columnId}
    >
      {(columnId) => {
        const cell = row.getVisibleCells().find((item) => item.column.id === columnId());
        return (
          <Show when={cell}>
            {(c) => (
              <Table.Cell
                {...rest}
                class={local.class}
                data-part="cell"
                data-scope="data-grid"
                style={{
                  ...columnSizeStyle(c().column, sizingEnabled()),
                  ...(local.style as JSX.CSSProperties | undefined),
                }}
              >
                {local.children ?? renderDataGridCell(c())}
              </Table.Cell>
            )}
          </Show>
        );
      }}
    </Show>
  );
}

function DataGridEmpty(props: DataGridEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "colSpan", "class"]);
  const { slots, table } = useDataGridContext();
  const span = () => local.colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row {...rest} class={local.class} data-part="empty" data-scope="data-grid">
      <Table.Cell class={slots.empty()} colSpan={span()}>
        {local.children ?? "No results. Try a different search or clear filters."}
      </Table.Cell>
    </Table.Row>
  );
}

function DataGridToolbar(props: DataGridToolbarProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataGridContext();
  return (
    <div
      {...rest}
      class={slots.toolbar({ class: local.class })}
      data-part="toolbar"
      data-scope="data-grid"
    />
  );
}

function DataGridFooter(props: DataGridFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataGridContext();
  return (
    <div
      {...rest}
      class={slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="data-grid"
    />
  );
}

function DataGridRoot<TData extends RowData>(props: DataGridProps<TData>): JSX.Element {
  const [local, rest] = splitProps(props as DataGridProps<TData> & Record<string, unknown>, [
    "children",
    "recipe",
    "class",
    "features",
    "columnResizeMode",
  ]);
  const features = () => (local.features as DataGridFeatures | undefined) ?? dataGridFeatures;
  const recipe = () => (local.recipe as typeof dataGridRecipe | undefined) ?? dataGridRecipe;
  const slots = () => recipe()();
  const columnResizeMode = () =>
    (local.columnResizeMode as "onChange" | "onEnd" | undefined) ?? "onChange";

  const table = createTable({
    ...(rest as Omit<TableOptions<DataGridFeatures, TData>, "features">),
    columnResizeMode: columnResizeMode(),
    features: features() as DataGridFeatures,
  });

  return (
    <DataGridContext value={{ slots: slots(), table } as DataGridContextValue<RowData>}>
      <div
        class={slots().base({ class: local.class as string | undefined })}
        data-part="root"
        data-scope="data-grid"
      >
        {local.children as JSX.Element}
      </div>
    </DataGridContext>
  );
}

export function DataGrid<TData extends RowData>(props: DataGridProps<TData>): JSX.Element {
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
