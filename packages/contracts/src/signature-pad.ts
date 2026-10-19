import type {
  SignaturePadRecipeFn,
  SignaturePadRecipeSlot,
  SignaturePadVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared SignaturePad root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface SignaturePadRootContract extends SignaturePadVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue signaturePadRecipe
   */
  recipe?: SignaturePadRecipeFn;
}

/**
 * SignaturePad shorthand content contract. Compose with
 * `SignaturePadRootContract` / framework `SignaturePadRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface SignaturePadContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SignaturePadRecipeSlot>;
}
