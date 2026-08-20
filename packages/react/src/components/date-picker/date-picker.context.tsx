import { createContext } from "../../utils";

export const { DatePickerRootContext, useDatePickerRoot } = createContext<{ testId?: string }>()({
  name: "DatePickerRoot",
  strict: false,
});
