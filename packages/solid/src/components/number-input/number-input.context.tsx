import type { NumberInputRecipe } from "@pisagor/recipes/number-input";
import { createContext } from "../../utils";

interface NumberInputContextValue {
  slots: NumberInputRecipe;
}

export const { NumberInputContext, useNumberInput } = createContext<NumberInputContextValue>()({
  name: "NumberInput",
});
