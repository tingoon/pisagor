import type {
  AlertRecipeFn,
  AlertRecipeSlot,
  AlertVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Alert root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface AlertRootContract extends AlertVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue alertRecipe
   */
  recipe?: AlertRecipeFn;
}

/**
 * Alert shorthand content contract. Compose with `AlertRootContract` /
 * framework `AlertRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface AlertContract {
  /** Buttons or links shown after the message. */
  action?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<AlertRecipeSlot>;
  /** Supporting text below the title. */
  description?: unknown;
  /**
   * Leading icon. Info, success, warning, and destructive variants supply a
   * default; pass `null` to hide it.
   */
  icon?: unknown;
  /** Primary heading of the alert. */
  title?: unknown;
}
