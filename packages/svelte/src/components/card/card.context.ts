import type { CardRecipe } from "@pisagor/recipes/card";
import { createContext } from "../../utils/create-context";

export interface CardContextValue {
  slots: CardRecipe;
}

const ctx = createContext<CardContextValue>({ name: "Card" });

export const setCardContext = ctx.setContext;
export const useCard = ctx.getContext;
