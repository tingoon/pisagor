import type { ScrollAreaRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaRecipe;
}

export const { ScrollAreaContext, useScrollArea } =
  createContext("ScrollArea")<ScrollAreaContextValue>();
