import type { CardVariants } from "@pisagor/styles/ui/card";
import { createContext } from "../../utils";

interface CardContextValue {
  slots: CardVariants;
}

export const { CardContext, useCard } = createContext<CardContextValue>()({
  name: "Card",
});
