import type { MarqueeVariants } from "@pisagor/recipes/marquee";
import { createContext } from "../../internal/utils";

interface MarqueeContextValue {
  slots: MarqueeVariants;
}

export const { MarqueeContext, useMarquee } = createContext<MarqueeContextValue>()({
  name: "Marquee",
});
