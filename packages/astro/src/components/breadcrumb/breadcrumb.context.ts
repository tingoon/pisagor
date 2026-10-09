import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const { useStyles: useBreadcrumb, withContext: withBreadcrumbContext } =
  createSlotRecipeContext({
    name: "Breadcrumb",
    recipe: breadcrumbRecipe,
  });

export const {
  withContext: withBreadcrumbItemContext,
  withProvider: withBreadcrumbItemProvider,
} = createSlotRecipeContext({
  name: "BreadcrumbItem",
  recipe: breadcrumbItemRecipe,
});
