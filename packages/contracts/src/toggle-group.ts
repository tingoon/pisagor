import type {
  ToggleGroupRecipeFn,
  ToggleGroupRecipeSlot,
  ToggleGroupVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface ToggleGroupPresetItem {
  value: string;
  /** Item content. */
  content: unknown;
  disabled?: boolean;
}

/**
 * Shared ToggleGroup root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface ToggleGroupRootContract extends ToggleGroupVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue toggleGroupRecipe
   */
  recipe?: ToggleGroupRecipeFn;
}

/**
 * ToggleGroup shorthand content contract. Compose with
 * `ToggleGroupRootContract` / framework `ToggleGroupRootProps` — do not extend
 * the root here so root fields are not applied twice. Content fields stay
 * `unknown` so consumers can narrow them.
 */
export interface ToggleGroupContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ToggleGroupRecipeSlot>;
  /** Shorthand items (Item composition). */
  items?: ToggleGroupPresetItem[];
}
