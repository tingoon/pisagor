import type { ProgressRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface ProgressContextValue {
  slots: ProgressRecipe;
}

const ctx = createContext("Progress")<ProgressContextValue>();

export const setProgressContext = ctx.setContext;
