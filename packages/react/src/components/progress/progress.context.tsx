import type { ProgressSlots } from "@pisagor/recipes/progress";
import { createContext } from "../../internal/utils";

interface ProgressContextValue {
  slots: ProgressSlots;
}

export const { ProgressContext, useProgress } = createContext<ProgressContextValue>()({
  name: "Progress",
});
