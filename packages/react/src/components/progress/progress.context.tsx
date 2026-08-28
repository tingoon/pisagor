import type { ProgressVariants } from "@pisagor/recipes/progress";
import { createContext } from "../../internal/utils";

interface ProgressContextValue {
  slots: ProgressVariants;
}

export const { ProgressContext, useProgress } = createContext<ProgressContextValue>()({
  name: "Progress",
});
