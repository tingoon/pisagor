import type { ScrollAreaVariants } from "@pisagor/recipes/scroll-area";
import { createContext } from "../../internal/utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaVariants;
}

export const { ScrollAreaContext, useScrollArea } = createContext<ScrollAreaContextValue>()({
  name: "ScrollArea",
});
