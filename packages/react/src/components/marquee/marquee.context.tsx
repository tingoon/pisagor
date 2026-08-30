import type { MarqueeRecipe } from "@pisagor/recipes/marquee";
import { createContext } from "../../internal/utils";

interface MarqueeContextValue {
  slots: MarqueeRecipe;
}

export const { MarqueeContext, useMarquee } = createContext<MarqueeContextValue>()({
  name: "Marquee",
});
