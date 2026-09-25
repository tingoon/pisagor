import type { DataListItemRecipe } from "@pisagor/recipes/data-list";
import { createContext } from "../../utils/create-context";

export interface DataListItemContextValue {
  slots: DataListItemRecipe;
}

const ctx = createContext<DataListItemContextValue>({ name: "DataListItem" });

export const setDataListItemContext = ctx.setContext;
export const useDataListItem = ctx.getContext;
