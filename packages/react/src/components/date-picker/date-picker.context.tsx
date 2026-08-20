import { createContext } from "../../utils";

const [DatePickerRootContext, useDatePickerRoot] = createContext<{ testId?: string }>({
  name: "DatePickerRoot",
  strict: false,
});

export { DatePickerRootContext, useDatePickerRoot };
