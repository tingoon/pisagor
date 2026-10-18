import type {
  ClipboardRecipeFn,
  ClipboardRecipeSlot,
  ClipboardVariantProps,
  FormControlShellVariantProps,
} from "@pisagor/recipes";
import type { ButtonRootContract } from "./button";
import type { SlotClassNames } from "./internal";

/**
 * Shared Clipboard root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ClipboardRootContract extends ClipboardVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue clipboardRecipe
   */
  recipe?: ClipboardRecipeFn;
}

/**
 * Clipboard shorthand content contract. Compose with `ClipboardRootContract` /
 * framework `ClipboardRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ClipboardContract {
  /** Accessible label for icon-only copy buttons. */
  buttonAriaLabel?: string;
  /**
   * Size of the copy button.
   *
   * @defaultValue "icon-md"
   */
  buttonSize?: ButtonRootContract["size"];
  /** Variant of the copy button. */
  buttonVariant?: ButtonRootContract["variant"];
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ClipboardRecipeSlot>;
  /**
   * Visual shell variant for input/value display modes.
   *
   * @defaultValue "primary"
   */
  controlVariant?: FormControlShellVariantProps["variant"];
  /** Icon shown after a successful copy. */
  copiedIcon?: unknown;
  /** Icon shown before copying. */
  copyIcon?: unknown;
  /** Optional label rendered above the control. */
  label?: unknown;
  /**
   * Display mode for the copy control.
   *
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
}
