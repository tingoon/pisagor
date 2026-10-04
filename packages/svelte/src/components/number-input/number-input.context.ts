import type { NumberInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface NumberInputContextValue {
  slots: NumberInputRecipe;
}

const ctx = createContext("NumberInput")<NumberInputContextValue>();

export const setNumberInputContext = ctx.setContext;
