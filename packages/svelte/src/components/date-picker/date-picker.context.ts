import type { DatePickerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

type FormControlVariant = "primary" | "secondary";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
  variant?: FormControlVariant;
}

const ctx = createContext("DatePicker")<DatePickerContextValue | undefined>({
  defaultValue: undefined,
  strict: false,
});

export const setDatePickerSlotsContext = ctx.setContext;
export const useDatePicker = ctx.getContext;
