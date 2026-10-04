import type { TooltipRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface TooltipContextValue {
  slots: TooltipRecipe;
}

export const { TooltipContext, useTooltip } =
  createContext("Tooltip")<TooltipContextValue>();
