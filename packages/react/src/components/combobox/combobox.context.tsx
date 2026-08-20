import { createContext } from "../../utils";

export const { ComboboxRootContext, useComboboxRoot } = createContext<{ testId?: string }>()({
  name: "ComboboxRoot",
  strict: false,
});
