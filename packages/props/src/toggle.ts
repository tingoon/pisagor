import type { ToggleRecipeFn, ToggleVariantProps } from "@pisagor/recipes/toggle";

/** Toggle props. */
export interface ToggleProps extends ToggleVariantProps {
  /**
   * Style recipe override.
   * @defaultValue toggleRecipe
   */
  recipe?: ToggleRecipeFn;
}
