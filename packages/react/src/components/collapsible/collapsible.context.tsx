import type { CollapsibleRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface CollapsibleContextValue {
  slots: CollapsibleRecipe;
}

export const { CollapsibleContext, useCollapsible } =
  createContext("Collapsible")<CollapsibleContextValue>();
