import type {
  RowData,
  CellContext as TableCellContext,
  ColumnDef as TableColumnDef,
  HeaderContext as TableHeaderContext,
} from "@tanstack/vue-table";
import {
  DataTableBody,
  DataTableCell,
  DataTableEmpty,
  DataTableFooter,
  DataTableHead,
  DataTableHeader,
  DataTableHeaderRow,
  DataTableRoot,
  DataTableRow,
  DataTableToolbar,
  renderDataTableCell,
  useDataTable,
  useDataTableHeaderGroup,
  useDataTableRow,
} from "./data-table";
import type { DataTableFeatures } from "./data-table.features";

export type {
  ColumnVisibilityState as VisibilityState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from "@tanstack/vue-table";
export type { DataTableProps, HeaderGroup, Row, TableType } from "./data-table";
export type { DataTableFeatures } from "./data-table.features";
export { dataTableFeatures } from "./data-table.features";

export const DataTable = Object.assign(DataTableRoot, {
  Body: DataTableBody,
  Cell: DataTableCell,
  Empty: DataTableEmpty,
  Footer: DataTableFooter,
  Head: DataTableHead,
  Header: DataTableHeader,
  HeaderRow: DataTableHeaderRow,
  Row: DataTableRow,
  Toolbar: DataTableToolbar,
});

export { renderDataTableCell, useDataTable, useDataTableHeaderGroup, useDataTableRow };

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
