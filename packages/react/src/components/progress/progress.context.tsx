import type { ProgressVariants } from "@pisagor/styles/ui/progress";
import { createContext } from "../../utils";

interface ProgressContextValue {
  slots: ProgressVariants;
}

export const { ProgressContext, useProgress } = createContext<ProgressContextValue>()({
  name: "Progress",
});
