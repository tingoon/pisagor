import type { TooltipRecipe } from "@pisagor/recipes/tooltip";
import { createContext } from "../../utils";

interface TooltipContextValue {
  slots: TooltipRecipe;
}

export const { TooltipContext, useTooltip } = createContext<TooltipContextValue>()({
  name: "Tooltip",
});
