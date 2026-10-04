import type { ToolbarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ToolbarContextValue {
  slots: ToolbarRecipe;
}

const ctx = createContext("Toolbar")<ToolbarContextValue>();
export const setToolbarContext = ctx.setContext;
export const useToolbar = ctx.getContext;
