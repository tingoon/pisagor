import type { NumberInputVariants } from "@pisagor/recipes/number-input";
import { createContext } from "../../utils";

interface NumberInputContextValue {
  slots: NumberInputVariants;
}

export const { NumberInputContext, useNumberInput } = createContext<NumberInputContextValue>()({
  name: "NumberInput",
});
