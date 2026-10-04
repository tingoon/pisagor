import type { CarouselRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface CarouselContextValue {
  slots: CarouselRecipe;
}

export const { CarouselContext, useCarousel } =
  createContext("Carousel")<CarouselContextValue>();
