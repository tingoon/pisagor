import type {
  BreadcrumbItemRecipeFn,
  BreadcrumbItemRecipeSlot,
  BreadcrumbRecipeFn,
  BreadcrumbRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface BreadcrumbPresetItem {
  /** Link or current-page label. */
  label: unknown;
  href?: string;
  isCurrentPage?: boolean;
}

/**
 * Shared Breadcrumb root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface BreadcrumbRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue breadcrumbRecipe
   */
  recipe?: BreadcrumbRecipeFn;
}

/**
 * Breadcrumb shorthand content contract. Compose with `BreadcrumbRootContract`
 * / framework `BreadcrumbRootProps` — do not extend the root here so root
 * fields are not applied twice. Content fields stay `unknown` so consumers can
 * narrow them.
 */
export interface BreadcrumbContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<BreadcrumbRecipeSlot>;
  /** Shorthand items (List + Item + Link/Page). */
  items?: BreadcrumbPresetItem[];
}

/**
 * Shared BreadcrumbItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface BreadcrumbItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue breadcrumbItemRecipe
   */
  recipe?: BreadcrumbItemRecipeFn;
}

/**
 * BreadcrumbItem shorthand content contract. Compose with
 * `BreadcrumbItemRootContract` / framework `BreadcrumbItemRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface BreadcrumbItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<BreadcrumbItemRecipeSlot>;
}
