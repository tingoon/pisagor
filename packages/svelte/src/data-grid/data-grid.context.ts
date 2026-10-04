import type { DataGridRecipe } from "@pisagor/recipes";
import type {
  Column,
  Header,
  HeaderGroup,
  Row,
  RowData,
  Table as TableType,
} from "@tanstack/svelte-table";
import { createContext } from "../utils/create-context";
import type { DataGridFeatures } from "./data-grid.features";

export interface DataGridContextValue {
  slots: DataGridRecipe;
  table: TableType<DataGridFeatures, RowData>;
}

export interface DataGridHeaderGroupContextValue {
  headerGroup: HeaderGroup<DataGridFeatures, RowData>;
}

export interface DataGridHeaderCellContextValue {
  header: Header<DataGridFeatures, RowData, unknown>;
}

export interface DataGridRowContextValue {
  row: Row<DataGridFeatures, RowData>;
}

const rootCtx = createContext("DataGrid")<DataGridContextValue>();
export const setDataGridContext = rootCtx.setContext;
export const useDataGridContext = rootCtx.getContext;

const headerGroupCtx = createContext(
  "DataGridHeaderGroup",
)<DataGridHeaderGroupContextValue>();
export const setDataGridHeaderGroupContext = headerGroupCtx.setContext;
export const useDataGridHeaderGroupContext = headerGroupCtx.getContext;

const headerCellCtx = createContext("DataGridHeaderCell")<
  DataGridHeaderCellContextValue | undefined
>({ strict: false });
export const setDataGridHeaderCellContext = headerCellCtx.setContext;
export const useDataGridHeaderCellContext = headerCellCtx.getContext;

const rowCtx = createContext("DataGridRow")<DataGridRowContextValue>();
export const setDataGridRowContext = rowCtx.setContext;
export const useDataGridRowContext = rowCtx.getContext;

export type { Column, Header, HeaderGroup, Row, TableType };
