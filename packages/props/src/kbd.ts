import type {
  KbdGroupRecipeFn,
  KbdRecipeFn,
  KbdVariantProps,
} from "@pisagor/recipes";

/**
 * Shared Kbd root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface KbdRootContract extends KbdVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue kbdRecipe
   */
  recipe?: KbdRecipeFn;
}

/**
 * Shared KbdGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface KbdGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue kbdGroupRecipe
   */
  recipe?: KbdGroupRecipeFn;
}
