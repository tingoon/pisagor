import type { NumberInputRecipe } from "@pisagor/recipes/number-input";
import { createContext } from "../../utils/create-context";

export interface NumberInputContextValue {
  slots: NumberInputRecipe;
}

const ctx = createContext<NumberInputContextValue>({ name: "NumberInput" });

export const setNumberInputContext = ctx.setContext;
export const useNumberInput = ctx.getContext;
