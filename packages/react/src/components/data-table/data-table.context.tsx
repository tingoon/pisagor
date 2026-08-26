import type { DataTableVariants } from "@pisagor/recipes/data-table";
import type {
  Cell,
  Column,
  Header,
  HeaderGroup,
  Row,
  RowData,
  Table as TableType,
} from "@tanstack/react-table";
import { createContext } from "../../utils";
import type { DataTableFeatures } from "./data-table.features";

interface DataTableContextValue<TData extends RowData> {
  slots: DataTableVariants;
  table: TableType<DataTableFeatures, TData>;
}

interface DataTableHeaderGroupContextValue<TData extends RowData> {
  headerGroup: HeaderGroup<DataTableFeatures, TData>;
}

interface DataTableRowContextValue<TData extends RowData> {
  row: Row<DataTableFeatures, TData>;
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

export type {
  Cell,
  Column,
  DataTableContextValue,
  DataTableHeaderGroupContextValue,
  DataTableRowContextValue,
  Header,
  HeaderGroup,
  Row,
  TableType,
};
