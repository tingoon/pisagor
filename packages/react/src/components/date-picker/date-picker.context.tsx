import type { DatePickerVariants } from "@pisagor/recipes/date-picker";
import { createContext } from "../../internal/utils";

interface DatePickerContextValue {
  slots: DatePickerVariants;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
  });
