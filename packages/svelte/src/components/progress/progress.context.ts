import type { ProgressRecipe } from "@pisagor/recipes/progress";
import { createContext } from "../../utils/create-context";

export interface ProgressContextValue {
  slots: ProgressRecipe;
}

const ctx = createContext<ProgressContextValue>({ name: "Progress" });

export const setProgressContext = ctx.setContext;
export const useProgress = ctx.getContext;
