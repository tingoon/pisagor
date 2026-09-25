import type {
  BreadcrumbItemRecipeFn,
  BreadcrumbRecipeFn,
} from "@pisagor/recipes/breadcrumb";

/** Breadcrumb props. */
export interface BreadcrumbProps {
  /**
   * Style recipe override.
   * @defaultValue breadcrumbRecipe
   */
  recipe?: BreadcrumbRecipeFn;
}

/** BreadcrumbItem props. */
export interface BreadcrumbItemProps {
  /**
   * Style recipe override.
   * @defaultValue breadcrumbItemRecipe
   */
  recipe?: BreadcrumbItemRecipeFn;
}
