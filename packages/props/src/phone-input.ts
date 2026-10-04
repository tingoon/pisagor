import type {
  PhoneInputRecipeFn,
  PhoneInputVariantProps,
} from "@pisagor/recipes";

/** PhoneInput props. */
export interface PhoneInputProps extends PhoneInputVariantProps {
  /**
   * Style recipe override.
   * @defaultValue phoneInputRecipe
   */
  recipe?: PhoneInputRecipeFn;
}
