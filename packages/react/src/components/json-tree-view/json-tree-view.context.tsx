import type { JsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";
import { createContext } from "../../internal/utils";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewRecipe;
}

export const { JsonTreeViewContext, useJsonTreeView } = createContext<JsonTreeViewContextValue>()({
  name: "JsonTreeView",
});
