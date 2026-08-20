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

export const { DataGridContext, useDataGrid } = createContext<DataGridContextValue<unknown>>()({
  name: "DataGrid",
});

export const { DataGridHeaderGroupContext, useDataGridHeaderGroup } = createContext<
  DataGridHeaderGroupContextValue<unknown>
>()({
  name: "DataGridHeaderGroup",
});

export const { DataGridHeaderCellContext, useDataGridHeaderCell } = createContext<
  DataGridHeaderCellContextValue<unknown>
>()({
  name: "DataGridHeaderCell",
  strict: false,
});

export const { DataGridRowContext, useDataGridRow } = createContext<
  DataGridRowContextValue<unknown>
>()({
  name: "DataGridRow",
});

export function useDataGridContext<TData>() {
  return useDataGrid() as DataGridContextValue<TData>;
}

export function useDataGridHeaderGroupContext<TData>() {
  return useDataGridHeaderGroup() as DataGridHeaderGroupContextValue<TData>;
}

export function useDataGridHeaderCellContext<TData>() {
  return useDataGridHeaderCell() as DataGridHeaderCellContextValue<TData> | undefined;
}

export function useDataGridRowContext<TData>() {
  return useDataGridRow() as DataGridRowContextValue<TData>;
}

export type {
  DataGridContextValue,
  DataGridHeaderCellContextValue,
  DataGridHeaderGroupContextValue,
  DataGridRowContextValue,
};
