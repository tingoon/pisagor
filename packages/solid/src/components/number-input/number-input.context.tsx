import type { NumberInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface NumberInputContextValue {
  slots: NumberInputRecipe;
}

export const { NumberInputContext, useNumberInput } =
  createContext("NumberInput")<NumberInputContextValue>();
