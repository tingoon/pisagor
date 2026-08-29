import type { FloatingPanelSlots } from "@pisagor/recipes/floating-panel";
import { createContext } from "../../internal/utils";

export interface FloatingPanelContextValue {
  /** Slot class recipes from `floatingPanelRecipe`. */
  slots: FloatingPanelSlots;
}

export const { FloatingPanelContext, useFloatingPanel } =
  createContext<FloatingPanelContextValue>()({
    name: "FloatingPanel",
    strict: false,
  });
