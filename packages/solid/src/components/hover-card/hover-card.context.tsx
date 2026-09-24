import type { HoverCardRecipe } from "@pisagor/recipes/hover-card";
import { createContext } from "../../utils";

interface HoverCardContextValue {
  slots: HoverCardRecipe;
}

export const { HoverCardContext, useHoverCard } = createContext<HoverCardContextValue>()({
  name: "HoverCard",
});
