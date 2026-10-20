import type {
  FormControlGroupShellVariantProps,
  PasswordInputRecipeFn,
  PasswordInputRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared PasswordInput root contract: visual variants and recipe override.
 * Shell variants from `formControlGroupShellRecipe`. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface PasswordInputRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue passwordInputRecipe
   */
  recipe?: PasswordInputRecipeFn;
}

/** PasswordInput shorthand contract. Compose with `PasswordInputRootContract`. */
export interface PasswordInputContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<PasswordInputRecipeSlot>;
}
