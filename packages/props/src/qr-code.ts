import type { QrCodeRecipeFn } from "@pisagor/recipes";

/** QrCode props. */
export interface QrCodeProps {
  /**
   * Style recipe override.
   * @defaultValue qrCodeRecipe
   */
  recipe?: QrCodeRecipeFn;
}
