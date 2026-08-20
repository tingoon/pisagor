import type { HeaderGroup, Row, Table as TableType } from "@tanstack/react-table";
import { createContext } from "../../utils";

interface DataTableContextValue<TData> {
  table: TableType<TData>;
}

interface DataTableHeaderGroupContextValue<TData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataTableRowContextValue<TData> {
  row: Row<TData>;
}

export const { DataTableContext, useDataTable } = createContext<DataTableContextValue<unknown>>()({
  name: "DataTable",
});

export const { DataTableHeaderGroupContext, useDataTableHeaderGroup } = createContext<
  DataTableHeaderGroupContextValue<unknown>
>()({
  name: "DataTableHeaderGroup",
});

export const { DataTableRowContext, useDataTableRow } = createContext<
  DataTableRowContextValue<unknown>
>()({
  name: "DataTableRow",
});

export function useDataTableContext<TData>() {
  return useDataTable() as DataTableContextValue<TData>;
}

export function useDataTableHeaderGroupContext<TData>() {
  return useDataTableHeaderGroup() as DataTableHeaderGroupContextValue<TData>;
}

export function useDataTableRowContext<TData>() {
  return useDataTableRow() as DataTableRowContextValue<TData>;
}

export type { DataTableContextValue, DataTableHeaderGroupContextValue, DataTableRowContextValue };
