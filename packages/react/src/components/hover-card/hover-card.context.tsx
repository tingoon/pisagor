import type { HoverCardSlots } from "@pisagor/recipes/hover-card";
import { createContext } from "../../internal/utils";

interface HoverCardContextValue {
  slots: HoverCardSlots;
}

export const { HoverCardContext, useHoverCard } = createContext<HoverCardContextValue>()({
  name: "HoverCard",
});
