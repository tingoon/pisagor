import type {
  QrCodeRecipeFn,
  QrCodeRecipeSlot,
  QrCodeVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

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

/**
 * QrCode shorthand contract. Compose with `QrCodeRootContract` / framework
 * `QrCodeRootProps`.
 */
export interface QrCodeContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<QrCodeRecipeSlot>;
}
