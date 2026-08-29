import type { JsonTreeViewSlots } from "@pisagor/recipes/json-tree-view";
import { createContext } from "../../internal/utils";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewSlots;
}

export const { JsonTreeViewContext, useJsonTreeView } = createContext<JsonTreeViewContextValue>()({
  name: "JsonTreeView",
});
