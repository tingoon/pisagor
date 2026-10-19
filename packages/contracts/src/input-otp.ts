import type {
  FormControlShellVariantProps,
  InputOtpRecipeFn,
  InputOtpVariantProps,
} from "@pisagor/recipes";

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
