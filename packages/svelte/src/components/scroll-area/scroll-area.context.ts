import type { ScrollAreaRecipe } from "@pisagor/recipes/scroll-area";
import { createContext } from "../../utils/create-context";

interface ScrollAreaContextValue {
  slots: ScrollAreaRecipe;
}

export const { setContext: setScrollAreaContext, getContext: useScrollArea } =
  createContext<ScrollAreaContextValue>({ name: "ScrollArea" });
