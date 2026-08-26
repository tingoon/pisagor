import type { NumberFieldVariants } from "@pisagor/styles/ui/number-input";
import { createContext } from "../../utils";

interface NumberInputContextValue {
  slots: NumberFieldVariants;
}

export const { NumberInputContext, useNumberInput } = createContext<NumberInputContextValue>()({
  name: "NumberInput",
});
