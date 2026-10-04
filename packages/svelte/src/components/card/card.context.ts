import type { CardRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface CardContextValue {
  slots: CardRecipe;
}

const ctx = createContext("Card")<CardContextValue>();

export const setCardContext = ctx.setContext;
export const useCard = ctx.getContext;
