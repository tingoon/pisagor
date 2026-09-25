import type { DataTableRecipe } from "@pisagor/recipes/data-table";
import type {
  Cell,
  Column,
  Header,
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

const rootCtx = createContext<DataTableContextValue>({ name: "DataTable" });
export const setDataTableContext = rootCtx.setContext;
export const useDataTableContext = rootCtx.getContext;

const headerGroupCtx = createContext<DataTableHeaderGroupContextValue>({
  name: "DataTableHeaderGroup",
});
export const setDataTableHeaderGroupContext = headerGroupCtx.setContext;
export const useDataTableHeaderGroupContext = headerGroupCtx.getContext;

const rowCtx = createContext<DataTableRowContextValue>({
  name: "DataTableRow",
});
export const setDataTableRowContext = rowCtx.setContext;
export const useDataTableRowContext = rowCtx.getContext;

export type { Cell, Column, Header, HeaderGroup, Row, TableType };
