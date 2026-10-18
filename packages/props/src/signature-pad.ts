import type {
  SignaturePadRecipeFn,
  SignaturePadRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared SignaturePad root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SignaturePadRootContract {
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
