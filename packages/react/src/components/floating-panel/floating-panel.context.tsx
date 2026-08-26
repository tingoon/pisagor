import type { FloatingPanelVariants } from "@pisagor/styles/ui/floating-panel";
import { createContext } from "../../utils";

export interface FloatingPanelContextValue {
  /** Slot class recipes from `floatingPanelVariants`. */
  slots: FloatingPanelVariants;
}

export const { FloatingPanelContext, useFloatingPanel } =
  createContext<FloatingPanelContextValue>()({
    name: "FloatingPanel",
    strict: false,
  });
