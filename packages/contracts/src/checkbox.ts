import type {
  CheckboxGroupRecipeFn,
  CheckboxRecipeFn,
  CheckboxRecipeSlot,
  CheckboxVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared CheckboxGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CheckboxGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxGroupRecipe
   */
  recipe?: CheckboxGroupRecipeFn;
}

/**
 * Shared Checkbox root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface CheckboxRootContract extends CheckboxVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxRecipe
   */
  recipe?: CheckboxRecipeFn;
}

/** Checkbox shorthand contract. Compose with `CheckboxRootContract`. */
export interface CheckboxContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CheckboxRecipeSlot>;
}
