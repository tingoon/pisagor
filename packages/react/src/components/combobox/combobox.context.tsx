import { createContext } from "../../utils";

const [ComboboxRootContext, useComboboxRoot] = createContext<{ testId?: string }>({
  name: "ComboboxRoot",
  strict: false,
});

export { ComboboxRootContext, useComboboxRoot };
