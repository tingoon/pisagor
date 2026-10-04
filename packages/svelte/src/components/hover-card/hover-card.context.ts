import type { HoverCardRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface HoverCardContextValue {
  slots: HoverCardRecipe;
}

const ctx = createContext("HoverCard")<HoverCardContextValue>();
export const setHoverCardContext = ctx.setContext;
export const useHoverCard = ctx.getContext;
