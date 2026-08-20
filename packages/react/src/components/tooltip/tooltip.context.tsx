import type { TooltipVariants } from "@pisagor/styles/ui/tooltip";
import { createContext } from "../../utils";

interface TooltipContextValue {
  slots: TooltipVariants;
}

export const { TooltipContext, useTooltip } = createContext<TooltipContextValue>()({
  name: "Tooltip",
});
