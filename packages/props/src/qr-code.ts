import type { QrCodeRecipeFn, QrCodeVariantProps } from "@pisagor/recipes";

/**
 * Shared QrCode root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface QrCodeRootContract extends QrCodeVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue qrCodeRecipe
   */
  recipe?: QrCodeRecipeFn;
}
