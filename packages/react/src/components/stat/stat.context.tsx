import type { StatRecipe } from "@pisagor/recipes/stat";
import { createContext } from "../../utils";

interface StatContextValue {
  slots: StatRecipe;
}

export const { StatContext, useStat } = createContext<StatContextValue>()({
  name: "Stat",
});
