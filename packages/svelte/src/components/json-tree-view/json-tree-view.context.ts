import type { JsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";
import { createContext } from "../../utils/create-context";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewRecipe;
}

const ctx = createContext<JsonTreeViewContextValue>({ name: "JsonTreeView" });

export const setJsonTreeViewContext = ctx.setContext;
export const useJsonTreeView = ctx.getContext;
