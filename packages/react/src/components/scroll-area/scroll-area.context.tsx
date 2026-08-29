import type { ScrollAreaSlots } from "@pisagor/recipes/scroll-area";
import { createContext } from "../../internal/utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaSlots;
}

export const { ScrollAreaContext, useScrollArea } = createContext<ScrollAreaContextValue>()({
  name: "ScrollArea",
});
