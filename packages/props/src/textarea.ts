import type {
  TextareaRecipeFn,
  TextareaRecipeSlot,
  TextareaVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Textarea root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface TextareaRootContract extends TextareaVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue textareaRecipe
   */
  recipe?: TextareaRecipeFn;
}

/**
 * Textarea shorthand content contract. Compose with `TextareaRootContract` /
 * framework `TextareaRootProps` — do not extend the root here so root fields
 * are not applied twice.
 */
export interface TextareaContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TextareaRecipeSlot>;
}
