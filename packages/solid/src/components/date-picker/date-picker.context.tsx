import type { DatePickerRecipe } from "@pisagor/recipes/date-picker";
import { createContext } from "../../utils";

type FormControlVariant = "primary" | "secondary";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
  variant?: FormControlVariant;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
    strict: false,
  });
