import type { TooltipRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface TooltipContextValue {
  slots: TooltipRecipe;
}

const ctx = createContext("Tooltip")<TooltipContextValue>();
export const setTooltipContext = ctx.setContext;
