import type {
  StatRecipeFn,
  StatTrendRecipeFn,
  StatTrendVariantProps,
  StatVariantProps,
} from "@pisagor/recipes/stat";

/** Stat props. */
export interface StatProps extends StatVariantProps {
  /**
   * Style recipe override.
   * @defaultValue statRecipe
   */
  recipe?: StatRecipeFn;
}

/** StatTrend props. */
export interface StatTrendProps extends StatTrendVariantProps {
  /**
   * Style recipe override.
   * @defaultValue statTrendRecipe
   */
  recipe?: StatTrendRecipeFn;
}
