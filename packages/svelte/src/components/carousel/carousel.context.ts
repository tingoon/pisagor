import type { CarouselRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface CarouselContextValue {
  slots: CarouselRecipe;
}

const ctx = createContext("Carousel")<CarouselContextValue>();
export const setCarouselContext = ctx.setContext;
export const useCarousel = ctx.getContext;
