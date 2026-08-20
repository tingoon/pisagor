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

const [DataTableContext, useDataTableContextBase] = createContext<DataTableContextValue<unknown>>({
  name: "DataTable",
});

const [DataTableHeaderGroupContext, useDataTableHeaderGroupContextBase] = createContext<
  DataTableHeaderGroupContextValue<unknown>
>({
  name: "DataTableHeaderGroup",
});

const [DataTableRowContext, useDataTableRowContextBase] = createContext<
  DataTableRowContextValue<unknown>
>({
  name: "DataTableRow",
});

function useDataTableContext<TData>() {
  return useDataTableContextBase() as DataTableContextValue<TData>;
}

function useDataTableHeaderGroupContext<TData>() {
  return useDataTableHeaderGroupContextBase() as DataTableHeaderGroupContextValue<TData>;
}

function useDataTableRowContext<TData>() {
  return useDataTableRowContextBase() as DataTableRowContextValue<TData>;
}

export type { DataTableContextValue, DataTableHeaderGroupContextValue, DataTableRowContextValue };
export {
  DataTableContext,
  DataTableHeaderGroupContext,
  DataTableRowContext,
  useDataTableContext,
  useDataTableHeaderGroupContext,
  useDataTableRowContext,
};
