import type {
  RadioGroupItemRecipeFn,
  RadioGroupItemVariantProps,
  RadioGroupRecipeFn,
} from "@pisagor/recipes";

export interface RadioGroupPresetItem {
  value: string;
  /** Item label content. */
  label: unknown;
  disabled?: boolean;
}

/**
 * Shared RadioGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface RadioGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue radioGroupRecipe
   */
  recipe?: RadioGroupRecipeFn;
}

/**
 * RadioGroup shorthand content contract. Compose with `RadioGroupRootContract`
 * / framework `RadioGroupRootProps` — do not extend the root here so root
 * fields are not applied twice.
 */
export interface RadioGroupContract {
  /** Shorthand items (Item composition). */
  items?: RadioGroupPresetItem[];
}

/**
 * Shared RadioGroupItem root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface RadioGroupItemRootContract extends RadioGroupItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue radioGroupItemRecipe
   */
  recipe?: RadioGroupItemRecipeFn;
}
