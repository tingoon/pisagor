import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/react-table";
import type { DataGridFeatures } from "./data-grid.features";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";
export type { DataGridProps } from "./data-grid";
export {
  DataGrid,
  renderDataGridCell,
  useDataGrid,
  useDataGridHeaderGroup,
  useDataGridRow,
} from "./data-grid";
export type { Column, Row, TableType } from "./data-grid.context";
export type { DataGridFeatures } from "./data-grid.features";
export { dataGridFeatures } from "./data-grid.features";

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
