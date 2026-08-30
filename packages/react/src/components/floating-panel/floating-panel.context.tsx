import type { FloatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { createContext } from "../../utils";

export interface FloatingPanelContextValue {
  /** Slot class recipes from `floatingPanelRecipe`. */
  slots: FloatingPanelRecipe;
}

export const { FloatingPanelContext, useFloatingPanel } =
  createContext<FloatingPanelContextValue>()({
    name: "FloatingPanel",
    strict: false,
  });
