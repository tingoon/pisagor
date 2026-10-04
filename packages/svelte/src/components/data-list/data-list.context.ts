import type { DataListItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface DataListItemContextValue {
  slots: DataListItemRecipe;
}

const ctx = createContext("DataListItem")<DataListItemContextValue>();

export const setDataListItemContext = ctx.setContext;
export const useDataListItem = ctx.getContext;
