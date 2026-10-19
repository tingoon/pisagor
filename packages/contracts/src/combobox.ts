import type {
  ComboboxRecipeFn,
  ComboboxRecipeSlot,
  ComboboxVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface ComboboxPresetItem {
  value: string;
  /** Option label. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared Combobox root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ComboboxRootContract extends ComboboxVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue comboboxRecipe
   */
  recipe?: ComboboxRecipeFn;
}

/**
 * Combobox shorthand content contract. Compose with `ComboboxRootContract` /
 * framework `ComboboxRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ComboboxContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ComboboxRecipeSlot>;
  /** Shorthand items for the collection. */
  items?: ComboboxPresetItem[];
  /** Placeholder when no value is selected. */
  placeholder?: unknown;
}

/**
 * ComboboxItemGroup shorthand content contract. Content fields stay `unknown`
 * so consumers can narrow them.
 */
export interface ComboboxItemGroupContract {
  /** Group heading. */
  heading?: unknown;
}
