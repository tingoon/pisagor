import type { QrCodeRecipeFn, QrCodeVariantProps } from "@pisagor/recipes";

/** QrCode props. */
export interface QrCodeProps extends QrCodeVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue qrCodeRecipe
   */
  recipe?: QrCodeRecipeFn;
}
