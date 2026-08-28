import type { JsonTreeViewVariants } from "@pisagor/recipes/json-tree-view";
import { createContext } from "../../internal/utils";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewVariants;
}

export const { JsonTreeViewContext, useJsonTreeView } = createContext<JsonTreeViewContextValue>()({
  name: "JsonTreeView",
});
