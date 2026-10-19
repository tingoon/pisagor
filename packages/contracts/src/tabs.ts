import type {
  TabsRecipeFn,
  TabsRecipeSlot,
  TabsVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface TabsPresetItem {
  value: string;
  /** Tab trigger label. */
  label: unknown;
  /** Tab panel content. */
  content: unknown;
  disabled?: boolean;
}

/**
 * Shared Tabs root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface TabsRootContract extends TabsVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tabsRecipe
   */
  recipe?: TabsRecipeFn;
}

/**
 * Tabs shorthand content contract. Compose with `TabsRootContract` / framework
 * `TabsRootProps` — do not extend the root here so root fields are not applied
 * twice. Content fields stay `unknown` so consumers can narrow them.
 */
export interface TabsContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TabsRecipeSlot>;
  /** Shorthand items (List + Trigger + Content). */
  items?: TabsPresetItem[];
}
