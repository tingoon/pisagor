import type { DataListItemSlots } from "@pisagor/recipes/data-list";
import { createContext } from "../../internal/utils";

interface DataListItemContextValue {
  slots: DataListItemSlots;
}

export const { DataListItemContext, useDataListItem } = createContext<DataListItemContextValue>()({
  name: "DataListItem",
});
