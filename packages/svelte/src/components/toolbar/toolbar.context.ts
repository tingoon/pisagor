import type { ToolbarRecipe } from "@pisagor/recipes/toolbar";
import { createContext } from "../../utils/create-context";

interface ToolbarContextValue {
  slots: ToolbarRecipe;
}

const ctx = createContext<ToolbarContextValue>({ name: "Toolbar" });
export const setToolbarContext = ctx.setContext;
export const useToolbar = ctx.getContext;
