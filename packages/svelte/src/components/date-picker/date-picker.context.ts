import type { DatePickerRecipe } from "@pisagor/recipes/date-picker";
import { createContext } from "../../utils/create-context";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
}

const ctx = createContext<DatePickerContextValue | undefined>({
  defaultValue: undefined,
  name: "DatePicker",
  strict: false,
});

export const setDatePickerSlotsContext = ctx.setContext;
export const useDatePicker = ctx.getContext;
