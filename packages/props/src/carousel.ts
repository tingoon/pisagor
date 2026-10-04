import type { CarouselRecipeFn } from "@pisagor/recipes";

/** Carousel props. */
export interface CarouselProps {
  /**
   * Style recipe override.
   * @defaultValue carouselRecipe
   */
  recipe?: CarouselRecipeFn;
}
