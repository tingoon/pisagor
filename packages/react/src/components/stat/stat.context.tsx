import type { StatRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface StatContextValue {
  slots: StatRecipe;
}

export const { StatContext, useStat } =
  createContext("Stat")<StatContextValue>();
