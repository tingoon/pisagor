import { createContext } from "../../utils";

export const { PopoverRootContext, usePopoverRoot } = createContext<{ testId?: string }>()({
  name: "PopoverRoot",
  strict: false,
});
