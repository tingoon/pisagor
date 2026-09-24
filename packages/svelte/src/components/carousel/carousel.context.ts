import type { CarouselRecipe } from "@pisagor/recipes/carousel";
import { createContext } from "../../utils/create-context";

interface CarouselContextValue {
  slots: CarouselRecipe;
}

const ctx = createContext<CarouselContextValue>({ name: "Carousel" });
export const setCarouselContext = ctx.setContext;
export const useCarousel = ctx.getContext;
