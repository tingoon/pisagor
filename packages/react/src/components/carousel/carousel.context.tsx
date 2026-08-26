import type { CarouselVariants } from "@pisagor/styles/ui/carousel";
import { createContext } from "../../utils";

interface CarouselContextValue {
  slots: CarouselVariants;
}

export const { CarouselContext, useCarousel } = createContext<CarouselContextValue>()({
  name: "Carousel",
});
