import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/svelte-table";
import {
  useDataGridContext,
  useDataGridHeaderGroupContext,
  useDataGridRowContext,
} from "./data-grid.context";
import type { DataGridFeatures } from "./data-grid.features";
import DataGridBody from "./data-grid-body.svelte";
import DataGridCell from "./data-grid-cell.svelte";
import DataGridColumnResizer from "./data-grid-column-resizer.svelte";
import DataGridEmpty from "./data-grid-empty.svelte";
import DataGridFooter from "./data-grid-footer.svelte";
import DataGridHead from "./data-grid-head.svelte";
import DataGridHeader from "./data-grid-header.svelte";
import DataGridHeaderRow from "./data-grid-header-row.svelte";
import DataGridRoot from "./data-grid-root.svelte";
import DataGridRow from "./data-grid-row.svelte";
import DataGridRowProvider from "./data-grid-row-provider.svelte";
import DataGridToolbar from "./data-grid-toolbar.svelte";
import DataGridVirtualBody from "./data-grid-virtual-body.svelte";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/svelte-table";
export type { Column, Row, TableType } from "./data-grid.context";
export type { DataGridFeatures } from "./data-grid.features";
export { dataGridFeatures } from "./data-grid.features";
export { renderDataGridCell } from "./render-cell";

export function useDataGrid() {
  return useDataGridContext().table;
}
export function useDataGridHeaderGroup() {
  return useDataGridHeaderGroupContext().headerGroup;
}
export function useDataGridRow() {
  return useDataGridRowContext().row;
}

export type ColumnDef<TData extends RowData, TValue = unknown> = TableColumnDef<
  DataGridFeatures,
  TData,
  TValue
>;
export type CellContext<TData extends RowData, TValue = unknown> = TableCellContext<
  DataGridFeatures,
  TData,
  TValue
>;
export type HeaderContext<TData extends RowData, TValue = unknown> = TableHeaderContext<
  DataGridFeatures,
  TData,
  TValue
>;

export type DataGridProps = import("svelte").ComponentProps<typeof DataGridRoot>;

export const DataGrid = Object.assign(DataGridRoot, {
  Body: DataGridBody,
  Cell: DataGridCell,
  ColumnResizer: DataGridColumnResizer,
  Empty: DataGridEmpty,
  Footer: DataGridFooter,
  Head: DataGridHead,
  Header: DataGridHeader,
  HeaderRow: DataGridHeaderRow,
  Row: DataGridRow,
  RowProvider: DataGridRowProvider,
  Toolbar: DataGridToolbar,
  VirtualBody: DataGridVirtualBody,
});
