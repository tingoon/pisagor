import type { FloatingPanelVariants } from "@pisagor/styles/ui/floating-panel";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

export interface FloatingPanelContextValue extends WithTestId {
  /** Slot class recipes from `floatingPanelVariants`. */
  slots: FloatingPanelVariants;
}

export const { FloatingPanelContext, useFloatingPanel } =
  createContext<FloatingPanelContextValue>()({
    name: "FloatingPanel",
    strict: false,
  });
