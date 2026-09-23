import type { ScrollAreaRecipeFn, ScrollAreaVariantProps } from "@pisagor/recipes/scroll-area";

/** ScrollArea props. */
export interface ScrollAreaProps extends ScrollAreaVariantProps {
  /**
   * Style recipe override.
   * @defaultValue scrollAreaRecipe
   */
  recipe?: ScrollAreaRecipeFn;
}
