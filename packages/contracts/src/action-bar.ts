import type {
  ActionBarRecipeFn,
  ActionBarRecipeSlot,
  ActionBarVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface ActionBarActionItem {
  id?: string;
  /** Action icon. */
  icon?: unknown;
  /** Accessible / visible label. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared ActionBar root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ActionBarRootContract extends ActionBarVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue actionBarRecipe
   */
  recipe?: ActionBarRecipeFn;
}

/**
 * ActionBar shorthand content contract. Compose with `ActionBarRootContract` /
 * framework `ActionBarRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ActionBarContract {
  /** Shorthand action items. */
  actions?: ActionBarActionItem[];
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ActionBarRecipeSlot>;
}

/**
 * ActionBarValue shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface ActionBarValueContract {
  /** Selection count. */
  count?: unknown;
  /** Value label. */
  label?: unknown;
}
