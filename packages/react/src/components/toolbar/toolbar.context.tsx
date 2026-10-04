import type { ToolbarRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ToolbarContextValue {
  slots: ToolbarRecipe;
}

export const { ToolbarContext, useToolbar } =
  createContext("Toolbar")<ToolbarContextValue>();
