import type { DataTableRecipe } from "@pisagor/recipes/data-table";
import type {
  Cell,
  Column,
  Header,
  HeaderGroup,
  Row,
  Table as TableType,
} from "@tanstack/svelte-table";
import { createContext } from "../utils/create-context";

export interface DataTableContextValue {
  slots: DataTableRecipe;
  table: any;
}

export interface DataTableHeaderGroupContextValue {
  headerGroup: any;
}

export interface DataTableRowContextValue {
  row: any;
}

const rootCtx = createContext<DataTableContextValue>({ name: "DataTable" });
export const setDataTableContext = rootCtx.setContext;
export const useDataTableContext = rootCtx.getContext;

const headerGroupCtx = createContext<DataTableHeaderGroupContextValue>({
  name: "DataTableHeaderGroup",
});
export const setDataTableHeaderGroupContext = headerGroupCtx.setContext;
export const useDataTableHeaderGroupContext = headerGroupCtx.getContext;

const rowCtx = createContext<DataTableRowContextValue>({ name: "DataTableRow" });
export const setDataTableRowContext = rowCtx.setContext;
export const useDataTableRowContext = rowCtx.getContext;

export type { Cell, Column, Header, HeaderGroup, Row, TableType };
