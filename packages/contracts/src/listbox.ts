import type {
  ListboxItemRecipeFn,
  ListboxItemRecipeSlot,
  ListboxItemVariantProps,
  ListboxRecipeFn,
  ListboxRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface ListboxPresetItem {
  value: string;
  /** Option label. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared Listbox root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ListboxRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue listboxRecipe
   */
  recipe?: ListboxRecipeFn;
}

/**
 * Listbox shorthand content contract. Compose with `ListboxRootContract` /
 * framework `ListboxRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ListboxContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ListboxRecipeSlot>;
  /** Empty-state content when there are no items. */
  emptyText?: unknown;
  /** Shorthand items for the collection. */
  items?: ListboxPresetItem[];
}

/**
 * Shared ListboxItem root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface ListboxItemRootContract extends ListboxItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue listboxItemRecipe
   */
  recipe?: ListboxItemRecipeFn;
}

/**
 * ListboxItem shorthand content contract. Compose with
 * `ListboxItemRootContract` / framework `ListboxItemRootProps` — do not extend
 * the root here so root fields are not applied twice.
 */
export interface ListboxItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ListboxItemRecipeSlot>;
}
