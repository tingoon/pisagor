import type { DatePickerRecipe } from "@pisagor/recipes/date-picker";
import { createContext } from "../../internal/utils";

interface DatePickerContextValue {
  slots: DatePickerRecipe;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
  });
