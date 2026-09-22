import type { InputOtpRecipeFn } from "@pisagor/recipes/input-otp";

/** InputOtp props. */
export interface InputOtpProps {
  /**
   * Style recipe override.
   * @defaultValue inputOtpRecipe
   */
  recipe?: InputOtpRecipeFn;
}
