import type { JsonTreeViewRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface JsonTreeViewContextValue {
  slots: JsonTreeViewRecipe;
}

export const { JsonTreeViewContext, useJsonTreeView } =
  createContext("JsonTreeView")<JsonTreeViewContextValue>();
