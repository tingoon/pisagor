import type { CircularProgressRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface CircularProgressContextValue {
  slots: CircularProgressRecipe;
}

const ctx = createContext("CircularProgress")<CircularProgressContextValue>();

export const setCircularProgressContext = ctx.setContext;
export const useCircularProgressSlots = ctx.getContext;
