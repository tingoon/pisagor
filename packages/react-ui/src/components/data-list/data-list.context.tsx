import type { DataListItemVariants } from "@pisagor/recipes/data-list";
import { createContext } from "../../utils";

interface DataListItemContextValue {
  slots: DataListItemVariants;
}

export const { DataListItemContext, useDataListItem } = createContext<DataListItemContextValue>()({
  name: "DataListItem",
});
