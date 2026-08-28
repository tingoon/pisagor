import type { CarouselVariants } from "@pisagor/recipes/carousel";
import { createContext } from "../../internal/utils";

interface CarouselContextValue {
  slots: CarouselVariants;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
