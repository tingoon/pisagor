import type { FloatingPanelRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

export interface FloatingPanelContextValue {
  slots: FloatingPanelRecipe;
}

export const { FloatingPanelContext, useFloatingPanel } = createContext(
  "FloatingPanel",
)<FloatingPanelContextValue>({ strict: false });
