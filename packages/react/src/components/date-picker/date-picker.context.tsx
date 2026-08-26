import type { DatePickerVariants } from "@pisagor/styles/ui/date-picker";
import { createContext } from "../../utils";

interface DatePickerContextValue {
  slots: DatePickerVariants;
}

export const { DatePickerContext: DatePickerSlotsContext, useDatePicker } =
  createContext<DatePickerContextValue>()({
    name: "DatePicker",
  });
