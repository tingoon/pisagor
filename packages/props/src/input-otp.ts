import type {
  FormControlShellVariantProps,
  InputOtpRecipeFn,
  InputOtpVariantProps,
} from "@pisagor/recipes";

/** InputOtp props. */
export interface InputOtpProps
  extends InputOtpVariantProps, FormControlShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue inputOtpRecipe
   */
  recipe?: InputOtpRecipeFn;
}
