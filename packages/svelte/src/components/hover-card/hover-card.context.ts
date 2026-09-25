import type { HoverCardRecipe } from "@pisagor/recipes/hover-card";
import { createContext } from "../../utils/create-context";

export interface HoverCardContextValue {
  slots: HoverCardRecipe;
}

const ctx = createContext<HoverCardContextValue>({ name: "HoverCard" });
export const setHoverCardContext = ctx.setContext;
export const useHoverCard = ctx.getContext;
