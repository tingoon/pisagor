import type { SelectRecipeFn, SelectRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface SelectPresetItem {
  value: string;
  /** Option label. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared Select root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SelectRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue selectRecipe
   */
  recipe?: SelectRecipeFn;
}

/**
 * Select shorthand content contract. Compose with `SelectRootContract` /
 * framework `SelectRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface SelectContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SelectRecipeSlot>;
  /** Shorthand items for the collection. */
  items?: SelectPresetItem[];
  /** Placeholder when no value is selected. */
  placeholder?: unknown;
}

/**
 * SelectItemGroup shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface SelectItemGroupContract {
  /** Group heading. */
  heading?: unknown;
}
