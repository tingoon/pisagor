import type { CarouselRecipe } from "@pisagor/recipes/carousel";
import { createContext } from "../../utils";

interface CarouselContextValue {
  slots: CarouselRecipe;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
