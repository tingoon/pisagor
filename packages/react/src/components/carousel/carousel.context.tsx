import type { CarouselRecipe } from "@pisagor/recipes/carousel";
import { createContext } from "../../internal/utils";

interface CarouselContextValue {
  slots: CarouselRecipe;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
