import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/svelte-table";
import {
  useDataTableContext,
  useDataTableHeaderGroupContext,
  useDataTableRowContext,
} from "./data-table.context";
import type { DataTableFeatures } from "./data-table.features";
import DataTableBody from "./data-table-body.svelte";
import DataTableCell from "./data-table-cell.svelte";
import DataTableEmpty from "./data-table-empty.svelte";
import DataTableFooter from "./data-table-footer.svelte";
import DataTableHead from "./data-table-head.svelte";
import DataTableHeader from "./data-table-header.svelte";
import DataTableHeaderRow from "./data-table-header-row.svelte";
import DataTableRoot from "./data-table-root.svelte";
import DataTableRow from "./data-table-row.svelte";
import DataTableRowProvider from "./data-table-row-provider.svelte";
import DataTableToolbar from "./data-table-toolbar.svelte";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/svelte-table";
export type { Column, Row, TableType } from "./data-table.context";
export type { DataTableFeatures } from "./data-table.features";
export { dataTableFeatures } from "./data-table.features";
export { renderDataTableCell } from "./render-cell";

export function useDataTable() {
  return useDataTableContext().table;
}
export function useDataTableHeaderGroup() {
  return useDataTableHeaderGroupContext().headerGroup;
}
export function useDataTableRow() {
  return useDataTableRowContext().row;
}

export type ColumnDef<TData extends RowData, TValue = unknown> = TableColumnDef<
  DataTableFeatures,
  TData,
  TValue
>;
export type CellContext<
  TData extends RowData,
  TValue = unknown,
> = TableCellContext<DataTableFeatures, TData, TValue>;
export type HeaderContext<
  TData extends RowData,
  TValue = unknown,
> = TableHeaderContext<DataTableFeatures, TData, TValue>;

export type DataTableProps = import("svelte").ComponentProps<
  typeof DataTableRoot
>;

export const DataTable = Object.assign(DataTableRoot, {
  Body: DataTableBody,
  Cell: DataTableCell,
  Empty: DataTableEmpty,
  Footer: DataTableFooter,
  Head: DataTableHead,
  Header: DataTableHeader,
  HeaderRow: DataTableHeaderRow,
  Row: DataTableRow,
  RowProvider: DataTableRowProvider,
  Toolbar: DataTableToolbar,
});
