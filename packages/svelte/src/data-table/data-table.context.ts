import type { DataTableRecipe } from "@pisagor/recipes";
import type {
  Column,
  HeaderGroup,
  Row,
  RowData,
  Table as TableType,
} from "@tanstack/svelte-table";
import { createContext } from "../utils/create-context";
import type { DataTableFeatures } from "./data-table.features";

export interface DataTableContextValue {
  slots: DataTableRecipe;
  table: TableType<DataTableFeatures, RowData>;
}

export interface DataTableHeaderGroupContextValue {
  headerGroup: HeaderGroup<DataTableFeatures, RowData>;
}

export interface DataTableRowContextValue {
  row: Row<DataTableFeatures, RowData>;
}

const rootCtx = createContext("DataTable")<DataTableContextValue>();
export const setDataTableContext = rootCtx.setContext;
export const useDataTableContext = rootCtx.getContext;

const headerGroupCtx = createContext(
  "DataTableHeaderGroup",
)<DataTableHeaderGroupContextValue>();
export const setDataTableHeaderGroupContext = headerGroupCtx.setContext;
export const useDataTableHeaderGroupContext = headerGroupCtx.getContext;

const rowCtx = createContext("DataTableRow")<DataTableRowContextValue>();
export const setDataTableRowContext = rowCtx.setContext;
export const useDataTableRowContext = rowCtx.getContext;

export type { Column, HeaderGroup, Row, TableType };
