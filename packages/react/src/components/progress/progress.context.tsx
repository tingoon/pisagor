import type { ProgressRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ProgressContextValue {
  slots: ProgressRecipe;
}

export const { ProgressContext, useProgress } =
  createContext("Progress")<ProgressContextValue>();
