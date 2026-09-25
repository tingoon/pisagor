import type { FloatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { createContext } from "../../utils/create-context";

interface FloatingPanelContextValue {
  slots: FloatingPanelRecipe;
}

const ctx = createContext<FloatingPanelContextValue | undefined>({
  defaultValue: undefined,
  name: "FloatingPanel",
  strict: false,
});

export const setFloatingPanelContext = ctx.setContext;
export const useFloatingPanel = ctx.getContext;
