import type {
  ScrollAreaRecipeFn,
  ScrollAreaVariantProps,
} from "@pisagor/recipes";

/** ScrollArea props. */
export interface ScrollAreaProps extends ScrollAreaVariantProps {
  /**
   * Style recipe override.
   * @defaultValue scrollAreaRecipe
   */
  recipe?: ScrollAreaRecipeFn;
}
