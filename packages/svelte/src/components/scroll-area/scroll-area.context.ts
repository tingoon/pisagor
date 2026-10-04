import type { ScrollAreaRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ScrollAreaContextValue {
  slots: ScrollAreaRecipe;
}

export const { setContext: setScrollAreaContext, getContext: useScrollArea } =
  createContext("ScrollArea")<ScrollAreaContextValue>();
