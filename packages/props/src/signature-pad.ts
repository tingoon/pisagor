import type { SignaturePadRecipeFn } from "@pisagor/recipes/signature-pad";

/** SignaturePad props. */
export interface SignaturePadProps {
  /**
   * Style recipe override.
   * @defaultValue signaturePadRecipe
   */
  recipe?: SignaturePadRecipeFn;
}
