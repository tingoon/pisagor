import type { Header, HeaderGroup, Row, Table as TableType } from "@tanstack/react-table";
import { createContext } from "../../utils";

interface DataGridContextValue<TData> {
  table: TableType<TData>;
}

interface DataGridHeaderGroupContextValue<TData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataGridHeaderCellContextValue<TData> {
  header: Header<TData, unknown>;
}

interface DataGridRowContextValue<TData> {
  row: Row<TData>;
}

const [DataGridContext, useDataGridContextBase] = createContext<DataGridContextValue<unknown>>({
  name: "DataGrid",
});

const [DataGridHeaderGroupContext, useDataGridHeaderGroupContextBase] = createContext<
  DataGridHeaderGroupContextValue<unknown>
>({
  name: "DataGridHeaderGroup",
});

const [DataGridHeaderCellContext, useDataGridHeaderCellContextBase] = createContext<
  DataGridHeaderCellContextValue<unknown>
>({
  name: "DataGridHeaderCell",
  strict: false,
});

const [DataGridRowContext, useDataGridRowContextBase] = createContext<
  DataGridRowContextValue<unknown>
>({
  name: "DataGridRow",
});

function useDataGridContext<TData>() {
  return useDataGridContextBase() as DataGridContextValue<TData>;
}

function useDataGridHeaderGroupContext<TData>() {
  return useDataGridHeaderGroupContextBase() as DataGridHeaderGroupContextValue<TData>;
}

function useDataGridHeaderCellContext<TData>() {
  return useDataGridHeaderCellContextBase() as DataGridHeaderCellContextValue<TData> | undefined;
}

function useDataGridRowContext<TData>() {
  return useDataGridRowContextBase() as DataGridRowContextValue<TData>;
}

export type {
  DataGridContextValue,
  DataGridHeaderCellContextValue,
  DataGridHeaderGroupContextValue,
  DataGridRowContextValue,
};
export {
  DataGridContext,
  DataGridHeaderCellContext,
  DataGridHeaderGroupContext,
  DataGridRowContext,
  useDataGridContext,
  useDataGridHeaderCellContext,
  useDataGridHeaderGroupContext,
  useDataGridRowContext,
};
