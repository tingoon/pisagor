import type { CarouselSlots } from "@pisagor/recipes/carousel";
import { createContext } from "../../internal/utils";

interface CarouselContextValue {
  slots: CarouselSlots;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
