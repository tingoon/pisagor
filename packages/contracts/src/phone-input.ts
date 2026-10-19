import type {
  PhoneInputRecipeFn,
  PhoneInputRecipeSlot,
  PhoneInputVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared PhoneInput root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface PhoneInputRootContract extends PhoneInputVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue phoneInputRecipe
   */
  recipe?: PhoneInputRecipeFn;
}

/**
 * PhoneInput shorthand content contract. Compose with `PhoneInputRootContract`
 * / framework `PhoneInputRootProps` — do not extend the root here so root
 * fields are not applied twice.
 */
export interface PhoneInputContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<PhoneInputRecipeSlot>;
}
