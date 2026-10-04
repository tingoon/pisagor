import { createContext } from "../../internal/utils/create-context";

type FormControlVariant = "primary" | "secondary";

export interface DatePickerContextValue {
  variant?: FormControlVariant;
}

export const [provideDatePickerContext, , useDatePickerContextRef] =
  createContext("DatePicker")<DatePickerContextValue>({
    defaultValue: {},
    strict: false,
  });
