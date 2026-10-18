import type {
  StatRecipeFn,
  StatRecipeSlot,
  StatTrendRecipeFn,
  StatTrendVariantProps,
  StatVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Stat root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface StatRootContract extends StatVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue statRecipe
   */
  recipe?: StatRecipeFn;
}

/**
 * Stat shorthand content contract. Compose with `StatRootContract` / framework
 * `StatRootProps` — do not extend the root here so root fields are not applied
 * twice. Content fields stay `unknown` so consumers can narrow them.
 */
export interface StatContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<StatRecipeSlot>;
  /** Supporting copy below the value. */
  description?: unknown;
  /** Metric label. */
  label?: unknown;
  /** Trend indicator content. */
  trend?: unknown;
  /** Primary metric value (display copy — not a controlled input). */
  value?: unknown;
}

/**
 * Shared StatTrend root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface StatTrendRootContract extends StatTrendVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue statTrendRecipe
   */
  recipe?: StatTrendRecipeFn;
}
