import type { CarouselRecipeFn } from "@pisagor/recipes";

export interface CarouselPresetItem {
  /** Slide content. */
  content: unknown;
  key?: string;
}

/**
 * Shared Carousel root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CarouselRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue carouselRecipe
   */
  recipe?: CarouselRecipeFn;
}

/**
 * Carousel shorthand content contract. Compose with `CarouselRootContract` /
 * framework `CarouselRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface CarouselContract {
  /** Shorthand slides (Item + composition). */
  slides?: CarouselPresetItem[];
}
