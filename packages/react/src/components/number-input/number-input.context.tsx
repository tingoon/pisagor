import type { NumberInputSlots } from "@pisagor/recipes/number-input";
import { createContext } from "../../internal/utils";

interface NumberInputContextValue {
  slots: NumberInputSlots;
}

export const { NumberInputContext, useNumberInput } = createContext<NumberInputContextValue>()({
  name: "NumberInput",
});
