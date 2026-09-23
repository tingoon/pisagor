import type { QrCodeRecipeFn } from "@pisagor/recipes/qr-code";

/** QrCode props. */
export interface QrCodeProps {
  /**
   * Style recipe override.
   * @defaultValue qrCodeRecipe
   */
  recipe?: QrCodeRecipeFn;
}
