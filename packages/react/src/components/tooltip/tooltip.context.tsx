import type { TooltipSlots } from "@pisagor/recipes/tooltip";
import { createContext } from "../../internal/utils";

interface TooltipContextValue {
  slots: TooltipSlots;
}

export const { TooltipContext, useTooltip } = createContext<TooltipContextValue>()({
  name: "Tooltip",
});
