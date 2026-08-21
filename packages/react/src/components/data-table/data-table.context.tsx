import type { RowData } from "@tanstack/react-table";
import type {
  LegacyHeaderGroup as HeaderGroup,
  LegacyRow as Row,
  LegacyReactTable as TableType,
} from "@tanstack/react-table/legacy";
import { createContext } from "../../utils";

interface DataTableContextValue<TData extends RowData> {
  table: TableType<TData>;
}

interface DataTableHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataTableRowContextValue<TData extends RowData> {
  row: Row<TData>;
}

export const { DataTableContext, useDataTable } = createContext<DataTableContextValue<RowData>>()({
  name: "DataTable",
});

export const { DataTableHeaderGroupContext, useDataTableHeaderGroup } = createContext<
  DataTableHeaderGroupContextValue<RowData>
>()({
  name: "DataTableHeaderGroup",
});

export const { DataTableRowContext, useDataTableRow } = createContext<
  DataTableRowContextValue<RowData>
>()({
  name: "DataTableRow",
});

export function useDataTableContext<TData extends RowData>() {
  return useDataTable() as DataTableContextValue<TData>;
}

export function useDataTableHeaderGroupContext<TData extends RowData>() {
  return useDataTableHeaderGroup() as DataTableHeaderGroupContextValue<TData>;
}

export function useDataTableRowContext<TData extends RowData>() {
  return useDataTableRow() as DataTableRowContextValue<TData>;
}

export type { DataTableContextValue, DataTableHeaderGroupContextValue, DataTableRowContextValue };
