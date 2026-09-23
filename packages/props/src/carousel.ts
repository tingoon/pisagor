import type { CarouselRecipeFn } from "@pisagor/recipes/carousel";

/** Carousel props. */
export interface CarouselProps {
  /**
   * Style recipe override.
   * @defaultValue carouselRecipe
   */
  recipe?: CarouselRecipeFn;
}
