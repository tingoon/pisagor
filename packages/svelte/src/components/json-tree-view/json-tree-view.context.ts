import type { JsonTreeViewRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewRecipe;
}

const ctx = createContext("JsonTreeView")<JsonTreeViewContextValue>();

export const setJsonTreeViewContext = ctx.setContext;
