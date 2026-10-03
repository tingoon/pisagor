import type { DatePickerRecipe } from "@pisagor/recipes/date-picker";
import { createContext } from "../../utils/create-context";

type FormControlVariant = "primary" | "secondary";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
  variant?: FormControlVariant;
}

const ctx = createContext<DatePickerContextValue | undefined>({
  defaultValue: undefined,
  name: "DatePicker",
  strict: false,
});

export const setDatePickerSlotsContext = ctx.setContext;
export const useDatePicker = ctx.getContext;
