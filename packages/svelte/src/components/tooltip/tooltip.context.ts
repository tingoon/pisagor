import type { TooltipRecipe } from "@pisagor/recipes/tooltip";
import { createContext } from "../../utils/create-context";

export interface TooltipContextValue {
  slots: TooltipRecipe;
}

const ctx = createContext<TooltipContextValue>({ name: "Tooltip" });
export const setTooltipContext = ctx.setContext;
export const useTooltip = ctx.getContext;
