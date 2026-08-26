import type { HoverCardVariants } from "@pisagor/recipes/hover-card";
import { createContext } from "../../utils";

interface HoverCardContextValue {
  slots: HoverCardVariants;
}

export const { HoverCardContext, useHoverCard } = createContext<HoverCardContextValue>()({
  name: "HoverCard",
});
