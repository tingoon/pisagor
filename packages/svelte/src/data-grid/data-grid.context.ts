import type { DataGridRecipe } from "@pisagor/recipes/data-grid";
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

const rootCtx = createContext<DataGridContextValue>({ name: "DataGrid" });
export const setDataGridContext = rootCtx.setContext;
export const useDataGridContext = rootCtx.getContext;

const headerGroupCtx = createContext<DataGridHeaderGroupContextValue>({
  name: "DataGridHeaderGroup",
});
export const setDataGridHeaderGroupContext = headerGroupCtx.setContext;
export const useDataGridHeaderGroupContext = headerGroupCtx.getContext;

const headerCellCtx = createContext<DataGridHeaderCellContextValue | undefined>({
  name: "DataGridHeaderCell",
  strict: false,
});
export const setDataGridHeaderCellContext = headerCellCtx.setContext;
export const useDataGridHeaderCellContext = headerCellCtx.getContext;

const rowCtx = createContext<DataGridRowContextValue>({ name: "DataGridRow" });
export const setDataGridRowContext = rowCtx.setContext;
export const useDataGridRowContext = rowCtx.getContext;

export type { Cell, Column, Header, HeaderGroup, Row, TableType };
