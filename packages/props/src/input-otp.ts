import type { InputOtpRecipeFn } from "@pisagor/recipes";

/** InputOtp props. */
export interface InputOtpProps {
  /**
   * Style recipe override.
   * @defaultValue inputOtpRecipe
   */
  recipe?: InputOtpRecipeFn;
}
