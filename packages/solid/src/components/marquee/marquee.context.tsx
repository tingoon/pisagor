import type { MarqueeRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface MarqueeContextValue {
  slots: MarqueeRecipe;
}

export const { MarqueeContext, useMarquee } =
  createContext("Marquee")<MarqueeContextValue>();
