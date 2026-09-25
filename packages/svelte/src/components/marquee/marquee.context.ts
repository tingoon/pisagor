import type { MarqueeRecipe } from "@pisagor/recipes/marquee";
import { createContext } from "../../utils/create-context";

interface MarqueeContextValue {
  slots: MarqueeRecipe;
}

const ctx = createContext<MarqueeContextValue>({ name: "Marquee" });
export const setMarqueeContext = ctx.setContext;
export const useMarquee = ctx.getContext;
