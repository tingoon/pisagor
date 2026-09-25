import type {
  ClipboardRecipeFn,
  ClipboardVariantProps,
} from "@pisagor/recipes/clipboard";

/** Clipboard props. */
export interface ClipboardProps extends ClipboardVariantProps {
  /**
   * Style recipe override.
   * @defaultValue clipboardRecipe
   */
  recipe?: ClipboardRecipeFn;
}
