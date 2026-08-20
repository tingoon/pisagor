import { createContext } from "../../utils";

export const { FloatingPanelRootContext, useFloatingPanelRoot } = createContext<{
  testId?: string;
}>()({
  name: "FloatingPanelRoot",
  strict: false,
});
