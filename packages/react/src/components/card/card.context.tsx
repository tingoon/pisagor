import type { CardRecipe } from "@pisagor/recipes/card";
import { createContext } from "../../internal/utils";

interface CardContextValue {
  slots: CardRecipe;
}

export const { CardContext, useCard } = createContext<CardContextValue>()({
  name: "Card",
});
