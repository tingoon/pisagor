import { createContext } from "../../utils";

const [SelectRootContext, useSelectRoot] = createContext<{ testId?: string }>({
  name: "SelectRoot",
  strict: false,
});

export { SelectRootContext, useSelectRoot };
