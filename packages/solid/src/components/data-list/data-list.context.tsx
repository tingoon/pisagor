import type { DataListItemRecipe } from "@pisagor/recipes/data-list";
import { createContext } from "../../utils";

interface DataListItemContextValue {
  slots: DataListItemRecipe;
}

export const { DataListItemContext, useDataListItem } = createContext<DataListItemContextValue>()({
  name: "DataListItem",
});
