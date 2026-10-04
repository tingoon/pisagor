import type { FloatingPanelRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

export interface FloatingPanelContextValue {
  /** Slot class recipes from `floatingPanelRecipe`. */
  slots: FloatingPanelRecipe;
}

export const { FloatingPanelContext, useFloatingPanel } = createContext(
  "FloatingPanel",
)<FloatingPanelContextValue>({ strict: false });
