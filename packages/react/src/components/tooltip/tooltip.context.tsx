import type { TooltipVariants } from "@pisagor/recipes/tooltip";
import { createContext } from "../../internal/utils";

interface TooltipContextValue {
  slots: TooltipVariants;
}

export const { TooltipContext, useTooltip } = createContext<TooltipContextValue>()({
  name: "Tooltip",
});
