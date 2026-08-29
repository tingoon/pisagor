import type { StatSlots } from "@pisagor/recipes/stat";
import { createContext } from "../../internal/utils";

interface StatContextValue {
  slots: StatSlots;
}

export const { StatContext, useStat } = createContext<StatContextValue>()({
  name: "Stat",
});
