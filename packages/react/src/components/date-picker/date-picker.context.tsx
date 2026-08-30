import type { DatePickerRecipe } from "@pisagor/recipes/date-picker";
import { createContext } from "../../utils";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
  });
