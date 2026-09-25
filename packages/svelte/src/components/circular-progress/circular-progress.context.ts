import type { CircularProgressRecipe } from "@pisagor/recipes/circular-progress";
import { createContext } from "../../utils/create-context";

export interface CircularProgressContextValue {
  slots: CircularProgressRecipe;
}

const ctx = createContext<CircularProgressContextValue>({
  name: "CircularProgress",
});

export const setCircularProgressContext = ctx.setContext;
export const useCircularProgressSlots = ctx.getContext;
