import { createContext } from "../../utils";

export const { SelectRootContext, useSelectRoot } = createContext<{ testId?: string }>()({
  name: "SelectRoot",
  strict: false,
});
