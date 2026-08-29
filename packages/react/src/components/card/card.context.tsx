import type { CardSlots } from "@pisagor/recipes/card";
import { createContext } from "../../internal/utils";

interface CardContextValue {
  slots: CardSlots;
}

export const { CardContext, useCard } = createContext<CardContextValue>()({
  name: "Card",
});
