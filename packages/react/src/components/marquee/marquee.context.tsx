import type { MarqueeSlots } from "@pisagor/recipes/marquee";
import { createContext } from "../../internal/utils";

interface MarqueeContextValue {
  slots: MarqueeSlots;
}

export const { MarqueeContext, useMarquee } = createContext<MarqueeContextValue>()({
  name: "Marquee",
});
