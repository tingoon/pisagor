import type { DataListItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface DataListItemContextValue {
  slots: DataListItemRecipe;
}

export const { DataListItemContext, useDataListItem } =
  createContext("DataListItem")<DataListItemContextValue>();
