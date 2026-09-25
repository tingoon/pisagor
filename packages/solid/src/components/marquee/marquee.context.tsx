import type { MarqueeRecipe } from "@pisagor/recipes/marquee";
import { createContext } from "../../utils";

interface MarqueeContextValue {
  slots: MarqueeRecipe;
}

export const { MarqueeContext, useMarquee } = createContext<MarqueeContextValue>()({
  name: "Marquee",
});
