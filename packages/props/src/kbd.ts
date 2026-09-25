import type {
  KbdGroupRecipeFn,
  KbdRecipeFn,
  KbdVariantProps,
} from "@pisagor/recipes/kbd";

/** Kbd props. */
export interface KbdProps extends KbdVariantProps {
  /**
   * Style recipe override.
   * @defaultValue kbdRecipe
   */
  recipe?: KbdRecipeFn;
}

/** KbdGroup props. */
export interface KbdGroupProps {
  /**
   * Style recipe override.
   * @defaultValue kbdGroupRecipe
   */
  recipe?: KbdGroupRecipeFn;
}
