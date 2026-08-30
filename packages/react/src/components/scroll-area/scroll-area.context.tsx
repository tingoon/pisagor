import type { ScrollAreaRecipe } from "@pisagor/recipes/scroll-area";
import { createContext } from "../../utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaRecipe;
}

export const { ScrollAreaContext, useScrollArea } = createContext<ScrollAreaContextValue>()({
  name: "ScrollArea",
});
