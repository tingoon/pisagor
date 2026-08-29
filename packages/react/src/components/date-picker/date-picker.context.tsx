import type { DatePickerSlots } from "@pisagor/recipes/date-picker";
import { createContext } from "../../internal/utils";

interface DatePickerContextValue {
  slots: DatePickerSlots;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
  });
