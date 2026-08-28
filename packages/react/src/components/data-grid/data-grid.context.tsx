import type { DataGridVariants } from "@pisagor/recipes/data-grid";
import type {
  Cell,
  Column,
  Header,
  HeaderGroup,
  Row,
  RowData,
  Table as TableType,
} from "@tanstack/react-table";
import { createContext } from "../../internal/utils";
import type { DataGridFeatures } from "./data-grid.features";

interface DataGridContextValue<TData extends RowData> {
  slots: DataGridVariants;
  table: TableType<DataGridFeatures, TData>;
}

interface DataGridHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<DataGridFeatures, TData>;
}

interface DataGridHeaderCellContextValue<TData extends RowData> {
  header: Header<DataGridFeatures, TData, unknown>;
}

interface DataGridRowContextValue<TData extends RowData> {
  row: Row<DataGridFeatures, TData>;
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
  Cell,
  Column,
  DataGridContextValue,
  DataGridHeaderCellContextValue,
  DataGridHeaderGroupContextValue,
  DataGridRowContextValue,
  Header,
  HeaderGroup,
  Row,
  TableType,
};
