import { dataTableRecipe } from "@pisagor/recipes/data-table";
import type { RowData, TableOptions } from "@tanstack/solid-table";
import { createTable, flexRender } from "@tanstack/solid-table";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
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
import {
  type DataTableFeatures,
  dataTableFeatures,
} from "./data-table.features";

export type DataTableProps<TData extends RowData> = {
  children: JSX.Element;
  class?: string;
  features?: DataTableFeatures;
  recipe?: typeof dataTableRecipe;
} & Omit<TableOptions<DataTableFeatures, TData>, "features">;

interface DataTableHeaderProps {
  children: JSX.Element;
}

type DataTableHeaderRowProps = TableRowProps;

interface DataTableHeadProps extends TableHeadProps {
  columnId?: string;
}

interface DataTableBodyProps {
  children: JSX.Element;
  empty?: JSX.Element;
}

type DataTableRowProps = TableRowProps;

interface DataTableCellProps extends TableCellProps {
  columnId?: string;
}

interface DataTableEmptyProps extends TableRowProps {
  colSpan?: number;
  children?: JSX.Element;
}

type DataTableToolbarProps = ComponentProps<"div">;
type DataTableFooterProps = ComponentProps<"div">;

export function useDataTableApi<TData extends RowData>() {
  return useDataTableContext<TData>().table;
}

export function useDataTableHeaderGroupApi<TData extends RowData>() {
  return useDataTableHeaderGroupContext<TData>().headerGroup;
}

export function useDataTableRowApi<TData extends RowData>() {
  return useDataTableRowContext<TData>().row;
}

function DataTableHeader<TData extends RowData>(
  props: DataTableHeaderProps,
): JSX.Element {
  const table = useDataTableContext<TData>().table;
  return (
    <For each={table.getHeaderGroups()}>
      {(headerGroup) => (
        <DataTableHeaderGroupContext
          value={{ headerGroup } as DataTableHeaderGroupContextValue<RowData>}
        >
          {props.children}
        </DataTableHeaderGroupContext>
      )}
    </For>
  );
}

function DataTableHeaderRow(props: DataTableHeaderRowProps): JSX.Element {
  return (
    <Table.Row {...props} data-part="header-row" data-scope="data-table" />
  );
}

function DataTableHead<TData extends RowData>(
  props: DataTableHeadProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["columnId", "children", "class"]);
  const { headerGroup } = useDataTableHeaderGroupContext<TData>();

  return (
    <Show
      fallback={
        <For each={headerGroup.headers}>
          {(header) => (
            <Table.Head
              {...rest}
              class={local.class}
              data-part="head"
              data-scope="data-table"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </Table.Head>
          )}
        </For>
      }
      when={local.columnId}
    >
      {(columnId) => {
        const header = headerGroup.headers.find(
          (item) => item.column.id === columnId(),
        );
        return (
          <Show when={header}>
            {(h) => (
              <Table.Head
                {...rest}
                class={local.class}
                data-part="head"
                data-scope="data-table"
              >
                {local.children ??
                  flexRender(h().column.columnDef.header, h().getContext())}
              </Table.Head>
            )}
          </Show>
        );
      }}
    </Show>
  );
}

export function renderDataTableCell<TData extends RowData>(
  cell: Cell<DataTableFeatures, TData, unknown>,
) {
  if (cell.getIsPlaceholder()) return null;
  return flexRender(cell.column.columnDef.cell, cell.getContext());
}

function DataTableBody<TData extends RowData>(
  props: DataTableBodyProps,
): JSX.Element {
  const table = useDataTableContext<TData>().table;
  const rows = () => table.getRowModel().rows;

  return (
    <Show fallback={props.empty} when={rows().length > 0}>
      <For each={rows()}>
        {(row) => (
          <DataTableRowContext
            value={{ row } as DataTableRowContextValue<RowData>}
          >
            {props.children}
          </DataTableRowContext>
        )}
      </For>
    </Show>
  );
}

function DataTableRow<TData extends RowData>(
  props: DataTableRowProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const row = useDataTableRowContext<TData>().row;

  return (
    <Table.Row
      {...rest}
      aria-selected={row.getIsSelected()}
      class={local.class}
      data-part="row"
      data-scope="data-table"
      data-state={row.getIsSelected() ? "selected" : undefined}
    />
  );
}

function DataTableCell<TData extends RowData>(
  props: DataTableCellProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["columnId", "children"]);
  const row = useDataTableRowContext<TData>().row;

  return (
    <Show
      fallback={
        <For each={row.getVisibleCells()}>
          {(cell) => (
            <Table.Cell {...rest} data-part="cell" data-scope="data-table">
              {renderDataTableCell(cell)}
            </Table.Cell>
          )}
        </For>
      }
      when={local.columnId}
    >
      {(columnId) => {
        const cell = row
          .getVisibleCells()
          .find((item) => item.column.id === columnId());
        return (
          <Show when={cell}>
            {(c) => (
              <Table.Cell {...rest} data-part="cell" data-scope="data-table">
                {local.children ?? renderDataTableCell(c())}
              </Table.Cell>
            )}
          </Show>
        );
      }}
    </Show>
  );
}

function DataTableEmpty(props: DataTableEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "colSpan", "class"]);
  const { slots, table } = useDataTableContext();
  const span = () => local.colSpan ?? table.getAllColumns().length;

  return (
    <Table.Row
      {...rest}
      class={local.class}
      data-part="empty"
      data-scope="data-table"
    >
      <Table.Cell class={slots.empty()} colSpan={span()}>
        {local.children ??
          "No results. Try a different search or clear filters."}
      </Table.Cell>
    </Table.Row>
  );
}

function DataTableToolbar(props: DataTableToolbarProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataTableContext();
  return (
    <div
      {...rest}
      class={slots.toolbar({ class: local.class })}
      data-part="toolbar"
      data-scope="data-table"
    />
  );
}

function DataTableFooter(props: DataTableFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDataTableContext();
  return (
    <div
      {...rest}
      class={slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="data-table"
    />
  );
}

function DataTableRoot<TData extends RowData>(
  props: DataTableProps<TData>,
): JSX.Element {
  const [local, rest] = splitProps(
    props as DataTableProps<TData> & Record<string, unknown>,
    ["children", "recipe", "class", "features"],
  );
  const features = () =>
    (local.features as DataTableFeatures | undefined) ?? dataTableFeatures;
  const recipe = () =>
    (local.recipe as typeof dataTableRecipe | undefined) ?? dataTableRecipe;
  const slots = () => recipe()();

  const table = createTable({
    ...(rest as Omit<TableOptions<DataTableFeatures, TData>, "features">),
    features: features(),
  });

  return (
    <DataTableContext
      value={{ slots: slots(), table } as DataTableContextValue<RowData>}
    >
      <div
        class={slots().base({ class: local.class as string | undefined })}
        data-part="root"
        data-scope="data-table"
      >
        {local.children as JSX.Element}
      </div>
    </DataTableContext>
  );
}

export function DataTable<TData extends RowData>(
  props: DataTableProps<TData>,
): JSX.Element {
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
