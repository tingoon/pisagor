import type { ToolbarRecipe } from "@pisagor/recipes/toolbar";
import { createContext } from "../../utils";

interface ToolbarContextValue {
  slots: ToolbarRecipe;
}

export const { ToolbarContext, useToolbar } = createContext<ToolbarContextValue>()({
  name: "Toolbar",
});
