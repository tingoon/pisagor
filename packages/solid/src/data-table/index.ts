import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/solid-table";
import type { DataTableFeatures } from "./data-table.features";

export type {
  ColumnSizingState,
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/solid-table";
export type { DataTableProps } from "./data-table";
export {
  DataTable,
  renderDataTableCell,
  useDataTableApi as useDataTable,
  useDataTableHeaderGroupApi as useDataTableHeaderGroup,
  useDataTableRowApi as useDataTableRow,
} from "./data-table";
export type { Column, Row, TableType } from "./data-table.context";
export type { DataTableFeatures } from "./data-table.features";
export { dataTableFeatures } from "./data-table.features";

export type ColumnDef<TData extends RowData, TValue = unknown> = TableColumnDef<
  DataTableFeatures,
  TData,
  TValue
>;

export type CellContext<TData extends RowData, TValue = unknown> = TableCellContext<
  DataTableFeatures,
  TData,
  TValue
>;

export type HeaderContext<TData extends RowData, TValue = unknown> = TableHeaderContext<
  DataTableFeatures,
  TData,
  TValue
>;
