import type { StatVariants } from "@pisagor/styles/ui/stat";
import { createContext } from "../../utils";

interface StatContextValue {
  slots: StatVariants;
}

export const { StatContext, useStat } = createContext<StatContextValue>()({
  name: "Stat",
});
