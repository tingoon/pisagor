import type { DataGridRecipe } from "@pisagor/recipes";
import type {
  Cell,
  Column,
  Header,
  HeaderGroup,
  Row,
  RowData,
  Table as TableType,
} from "@tanstack/solid-table";
import { createContext } from "../utils";
import type { DataGridFeatures } from "./data-grid.features";

interface DataGridContextValue<TData extends RowData> {
  slots: DataGridRecipe;
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

export const { DataGridContext, useDataGrid } =
  createContext("DataGrid")<DataGridContextValue<RowData>>();

export const { DataGridHeaderGroupContext, useDataGridHeaderGroup } =
  createContext("DataGridHeaderGroup")<
    DataGridHeaderGroupContextValue<RowData>
  >();

export const { DataGridHeaderCellContext, useDataGridHeaderCell } =
  createContext("DataGridHeaderCell")<DataGridHeaderCellContextValue<RowData>>({
    strict: false,
  });

export const { DataGridRowContext, useDataGridRow } =
  createContext("DataGridRow")<DataGridRowContextValue<RowData>>();

export function useDataGridContext<TData extends RowData>() {
  return useDataGrid() as DataGridContextValue<TData>;
}

export function useDataGridHeaderGroupContext<TData extends RowData>() {
  return useDataGridHeaderGroup() as DataGridHeaderGroupContextValue<TData>;
}

export function useDataGridHeaderCellContext<TData extends RowData>() {
  return useDataGridHeaderCell() as
    | DataGridHeaderCellContextValue<TData>
    | undefined;
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
