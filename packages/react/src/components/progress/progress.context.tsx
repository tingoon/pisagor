import type { ProgressRecipe } from "@pisagor/recipes/progress";
import { createContext } from "../../internal/utils";

interface ProgressContextValue {
  slots: ProgressRecipe;
}

export const { ProgressContext, useProgress } = createContext<ProgressContextValue>()({
  name: "Progress",
});
