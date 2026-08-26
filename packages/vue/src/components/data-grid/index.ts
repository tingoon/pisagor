import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/vue-table";
import {
  DataGridBody,
  DataGridCell,
  DataGridEmpty,
  DataGridFooter,
  DataGridHead,
  DataGridHeader,
  DataGridHeaderRow,
  DataGridColumnResizer as DataGridResizer,
  DataGridRoot,
  DataGridRow,
  DataGridRowProvider,
  DataGridToolbar,
  DataGridVirtualBody,
  renderDataGridCell,
  useDataGrid,
  useDataGridHeaderGroup,
  useDataGridRow,
} from "./data-grid";
import type { DataGridFeatures } from "./data-grid.features";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/vue-table";
export type { Column, DataGridProps, Row, TableType } from "./data-grid";
export type { DataGridFeatures } from "./data-grid.features";
export { dataGridFeatures } from "./data-grid.features";

export const DataGrid = Object.assign(DataGridRoot, {
  Body: DataGridBody,
  Cell: DataGridCell,
  ColumnResizer: DataGridResizer,
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

export { renderDataGridCell, useDataGrid, useDataGridHeaderGroup, useDataGridRow };

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
