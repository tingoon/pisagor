import type {
  DataListItemRecipeFn,
  DataListItemRecipeSlot,
  DataListRecipeFn,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface DataListPresetItem {
  /** Row label. */
  label: unknown;
  /** Row value. */
  value: unknown;
}

/**
 * Shared DataList root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DataListRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue dataListRecipe
   */
  recipe?: DataListRecipeFn;
}

/**
 * DataList shorthand content contract. Compose with `DataListRootContract` /
 * framework `DataListRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface DataListContract {
  /** Shorthand items (Item + Label + Value). */
  items?: DataListPresetItem[];
}

/**
 * Shared DataListItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DataListItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue dataListItemRecipe
   */
  recipe?: DataListItemRecipeFn;
}

/**
 * DataListItem shorthand content contract. Compose with
 * `DataListItemRootContract` / framework `DataListItemRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface DataListItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DataListItemRecipeSlot>;
}
