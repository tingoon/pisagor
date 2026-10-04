import type { MarqueeRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface MarqueeContextValue {
  slots: MarqueeRecipe;
}

const ctx = createContext("Marquee")<MarqueeContextValue>();
export const setMarqueeContext = ctx.setContext;
export const useMarquee = ctx.getContext;
