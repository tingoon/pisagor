import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: BreadcrumbStylesContext,
  useStyles: useBreadcrumb,
  withContext: withBreadcrumbContext,
  withProvider: withBreadcrumbProvider,
} = createSlotRecipeContext({
  name: "Breadcrumb",
  recipe: breadcrumbRecipe,
});

export const {
  Context: BreadcrumbItemStylesContext,
  useStyles: useBreadcrumbItem,
  withContext: withBreadcrumbItemContext,
  withProvider: withBreadcrumbItemProvider,
} = createSlotRecipeContext({
  name: "BreadcrumbItem",
  recipe: breadcrumbItemRecipe,
});
