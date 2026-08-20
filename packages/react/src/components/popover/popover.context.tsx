import { createContext } from "../../utils";

const [PopoverRootContext, usePopoverRoot] = createContext<{ testId?: string }>({
  name: "PopoverRoot",
  strict: false,
});

export { PopoverRootContext, usePopoverRoot };
