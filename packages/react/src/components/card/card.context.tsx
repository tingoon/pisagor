import type { CardRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface CardContextValue {
  slots: CardRecipe;
}

export const { CardContext, useCard } =
  createContext("Card")<CardContextValue>();
