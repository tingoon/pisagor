import type { FloatingPanelRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface FloatingPanelContextValue {
  slots: FloatingPanelRecipe;
}

const ctx = createContext("FloatingPanel")<
  FloatingPanelContextValue | undefined
>({
  defaultValue: undefined,
  strict: false,
});

export const setFloatingPanelContext = ctx.setContext;
export const useFloatingPanel = ctx.getContext;
