import { createContext } from "../../utils";

const [HoverCardRootContext, useHoverCardRoot] = createContext<{ testId?: string }>({
  name: "HoverCardRoot",
  strict: false,
});

export { HoverCardRootContext, useHoverCardRoot };
