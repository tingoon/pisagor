import type { HoverCardVariants } from "@pisagor/styles/ui/hover-card";
import { createContext } from "../../utils";

interface HoverCardContextValue {
  slots: HoverCardVariants;
}

export const { HoverCardContext, useHoverCard } = createContext<HoverCardContextValue>()({
  name: "HoverCard",
});
