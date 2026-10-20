import type {
  FormControlShellVariantProps,
  InputOtpRecipeFn,
  InputOtpRecipeSlot,
  InputOtpVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared InputOtp root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface InputOtpRootContract
  extends InputOtpVariantProps, FormControlShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue inputOtpRecipe
   */
  recipe?: InputOtpRecipeFn;
}

/**
 * InputOtp shorthand contract. Compose with `InputOtpRootContract` / framework
 * `InputOTPRootProps`.
 */
export interface InputOtpContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<InputOtpRecipeSlot>;
}
