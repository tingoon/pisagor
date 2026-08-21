import type {
  RowData,
  CellContext as TableCellContext,
  HeaderContext as TableHeaderContext,
} from "@tanstack/react-table";
import type { LegacyFeatures } from "@tanstack/react-table/legacy";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";
export type {
  LegacyColumn as Column,
  LegacyColumnDef as ColumnDef,
  LegacyFeatures,
} from "@tanstack/react-table/legacy";
export type { DataGridProps } from "./data-grid";
export {
  DataGrid,
  renderDataGridCell,
  useDataGrid,
  useDataGridHeaderGroup,
  useDataGridRow,
} from "./data-grid";

/** v8-shaped cell context bound to legacy table features. */
export type CellContext<TData extends RowData, TValue = unknown> = TableCellContext<
  LegacyFeatures,
  TData,
  TValue
>;

/** v8-shaped header context bound to legacy table features. */
export type HeaderContext<TData extends RowData, TValue = unknown> = TableHeaderContext<
  LegacyFeatures,
  TData,
  TValue
>;
