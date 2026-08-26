import type { ScrollAreaVariants } from "@pisagor/recipes/scroll-area";
import { createContext } from "../../utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaVariants;
}

export const { ScrollAreaContext, useScrollArea } = createContext<ScrollAreaContextValue>()({
  name: "ScrollArea",
});
