import type { DatePickerRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

type FormControlVariant = "primary" | "secondary";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
  variant?: FormControlVariant;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext("DatePicker")<DatePickerContextValue>();
