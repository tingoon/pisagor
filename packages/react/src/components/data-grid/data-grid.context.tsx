import type { RowData } from "@tanstack/react-table";
import type {
  LegacyHeader as Header,
  LegacyHeaderGroup as HeaderGroup,
  LegacyRow as Row,
  LegacyReactTable as TableType,
} from "@tanstack/react-table/legacy";
import { createContext } from "../../utils";

interface DataGridContextValue<TData extends RowData> {
  table: TableType<TData>;
}

interface DataGridHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<TData>;
}

interface DataGridHeaderCellContextValue<TData extends RowData> {
  header: Header<TData, unknown>;
}

interface DataGridRowContextValue<TData extends RowData> {
  row: Row<TData>;
}

export const { DataGridContext, useDataGrid } = createContext<DataGridContextValue<RowData>>()({
  name: "DataGrid",
});

export const { DataGridHeaderGroupContext, useDataGridHeaderGroup } = createContext<
  DataGridHeaderGroupContextValue<RowData>
>()({
  name: "DataGridHeaderGroup",
});

export const { DataGridHeaderCellContext, useDataGridHeaderCell } = createContext<
  DataGridHeaderCellContextValue<RowData>
>()({
  name: "DataGridHeaderCell",
  strict: false,
});

export const { DataGridRowContext, useDataGridRow } = createContext<
  DataGridRowContextValue<RowData>
>()({
  name: "DataGridRow",
});

export function useDataGridContext<TData extends RowData>() {
  return useDataGrid() as DataGridContextValue<TData>;
}

export function useDataGridHeaderGroupContext<TData extends RowData>() {
  return useDataGridHeaderGroup() as DataGridHeaderGroupContextValue<TData>;
}

export function useDataGridHeaderCellContext<TData extends RowData>() {
  return useDataGridHeaderCell() as DataGridHeaderCellContextValue<TData> | undefined;
}

export function useDataGridRowContext<TData extends RowData>() {
  return useDataGridRow() as DataGridRowContextValue<TData>;
}

export type {
  DataGridContextValue,
  DataGridHeaderCellContextValue,
  DataGridHeaderGroupContextValue,
  DataGridRowContextValue,
};
