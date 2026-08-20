import { createContext } from "../../utils";

const [FloatingPanelRootContext, useFloatingPanelRoot] = createContext<{ testId?: string }>({
  name: "FloatingPanelRoot",
  strict: false,
});

export { FloatingPanelRootContext, useFloatingPanelRoot };
