import type { ScrollAreaVariants } from "@pisagor/styles/ui/scroll-area";
import { createContext } from "../../utils";

interface ScrollAreaContextValue {
  slots: ScrollAreaVariants;
}

export const { ScrollAreaContext, useScrollArea } = createContext<ScrollAreaContextValue>()({
  name: "ScrollArea",
});
