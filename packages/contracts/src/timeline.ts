import type {
  TimelineItemRecipeFn,
  TimelineItemRecipeSlot,
  TimelineRecipeFn,
  TimelineVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface TimelinePresetItem {
  id?: string;
  /** Item title. */
  title: unknown;
  /** Supporting copy. */
  description?: unknown;
  /** Leading indicator content. */
  indicator?: unknown;
}

/**
 * Shared Timeline root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface TimelineRootContract extends TimelineVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue timelineRecipe
   */
  recipe?: TimelineRecipeFn;
}

/**
 * Timeline shorthand content contract. Compose with `TimelineRootContract` /
 * framework `TimelineRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface TimelineContract {
  /** Shorthand items (Root + Item composition). */
  items?: TimelinePresetItem[];
}

/**
 * Shared TimelineItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TimelineItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue timelineItemRecipe
   */
  recipe?: TimelineItemRecipeFn;
}

/**
 * TimelineItem shorthand content contract. Compose with
 * `TimelineItemRootContract` / framework `TimelineItemRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface TimelineItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TimelineItemRecipeSlot>;
}
