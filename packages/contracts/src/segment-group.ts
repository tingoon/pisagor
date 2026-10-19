import type {
  SegmentGroupRecipeFn,
  SegmentGroupRecipeSlot,
  SegmentGroupVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface SegmentGroupPresetItem {
  value: string;
  /** Item label content. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared SegmentGroup root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface SegmentGroupRootContract extends SegmentGroupVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue segmentGroupRecipe
   */
  recipe?: SegmentGroupRecipeFn;
}

/**
 * SegmentGroup shorthand content contract. Compose with
 * `SegmentGroupRootContract` / framework `SegmentGroupRootProps` — do not
 * extend the root here so root fields are not applied twice. Content fields
 * stay `unknown` so consumers can narrow them.
 */
export interface SegmentGroupContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SegmentGroupRecipeSlot>;
  /** Shorthand items (Item composition). */
  items?: SegmentGroupPresetItem[];
}

/**
 * SegmentGroupItem shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface SegmentGroupItemContract {
  /** Item text content. */
  text?: unknown;
}
