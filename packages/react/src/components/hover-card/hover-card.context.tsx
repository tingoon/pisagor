import { createContext } from "../../utils";

export const { HoverCardRootContext, useHoverCardRoot } = createContext<{ testId?: string }>()({
  name: "HoverCardRoot",
  strict: false,
});
