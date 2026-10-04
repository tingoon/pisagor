import type {
  ClipboardRecipeFn,
  ClipboardVariantProps,
} from "@pisagor/recipes";

/** Clipboard props. */
export interface ClipboardProps extends ClipboardVariantProps {
  /**
   * Style recipe override.
   * @defaultValue clipboardRecipe
   */
  recipe?: ClipboardRecipeFn;
}
