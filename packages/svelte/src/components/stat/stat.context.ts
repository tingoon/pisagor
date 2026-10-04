import type { StatRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface StatContextValue {
  slots: StatRecipe;
}

const ctx = createContext("Stat")<StatContextValue>();

export const setStatContext = ctx.setContext;
export const useStat = ctx.getContext;
