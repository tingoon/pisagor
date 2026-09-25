import type { CardRecipe } from "@pisagor/recipes/card";
import { createContext } from "../../utils";

interface CardContextValue {
  slots: CardRecipe;
}

export const { CardContext, useCard } = createContext<CardContextValue>()({
  name: "Card",
});
