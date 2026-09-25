import type {
  PhoneInputRecipeFn,
  PhoneInputVariantProps,
} from "@pisagor/recipes/phone-input";

/** PhoneInput props. */
export interface PhoneInputProps extends PhoneInputVariantProps {
  /**
   * Style recipe override.
   * @defaultValue phoneInputRecipe
   */
  recipe?: PhoneInputRecipeFn;
}
