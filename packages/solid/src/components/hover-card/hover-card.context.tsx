import type { HoverCardRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface HoverCardContextValue {
  slots: HoverCardRecipe;
}

export const { HoverCardContext, useHoverCard } =
  createContext("HoverCard")<HoverCardContextValue>();
