import type { CarouselVariants } from "@pisagor/recipes/carousel";
import { createContext } from "../../utils";

interface CarouselContextValue {
  slots: CarouselVariants;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
