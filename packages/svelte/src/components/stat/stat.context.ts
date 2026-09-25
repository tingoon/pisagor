import type { StatRecipe } from "@pisagor/recipes/stat";
import { createContext } from "../../utils/create-context";

export interface StatContextValue {
  slots: StatRecipe;
}

const ctx = createContext<StatContextValue>({ name: "Stat" });

export const setStatContext = ctx.setContext;
export const useStat = ctx.getContext;
