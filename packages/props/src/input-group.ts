import type {
  InputGroupAddonRecipeFn,
  InputGroupAddonVariantProps,
  InputGroupButtonRecipeFn,
  InputGroupButtonVariantProps,
  InputGroupControlRecipeFn,
  InputGroupTextareaControlRecipeFn,
  InputGroupTextRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared InputGroupAddon root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface InputGroupAddonRootContract extends InputGroupAddonVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue inputGroupAddonRecipe
   */
  recipe?: InputGroupAddonRecipeFn;
}

/**
 * Shared InputGroupButton root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface InputGroupButtonRootContract extends InputGroupButtonVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue inputGroupButtonRecipe
   */
  recipe?: InputGroupButtonRecipeFn;
}

/**
 * Shared InputGroupText root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface InputGroupTextRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue inputGroupTextRecipe
   */
  recipe?: InputGroupTextRecipeFn;
}

/**
 * Shared InputGroupControl root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface InputGroupControlRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue inputGroupControlRecipe
   */
  recipe?: InputGroupControlRecipeFn;
}

/**
 * Shared InputGroupTextareaControl root contract: recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface InputGroupTextareaControlRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue inputGroupTextareaControlRecipe
   */
  recipe?: InputGroupTextareaControlRecipeFn;
}
