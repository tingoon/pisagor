import type { StatVariants } from "@pisagor/recipes/stat";
import { createContext } from "../../internal/utils";

interface StatContextValue {
  slots: StatVariants;
}

export const { StatContext, useStat } = createContext<StatContextValue>()({
  name: "Stat",
});
