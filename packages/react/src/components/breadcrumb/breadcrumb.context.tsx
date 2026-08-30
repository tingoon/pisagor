import type { BreadcrumbItemRecipe, BreadcrumbRecipe } from "@pisagor/recipes/breadcrumb";
import { createContext } from "../../utils";

interface BreadcrumbContextValue {
  slots: BreadcrumbRecipe;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemRecipe;
}

export const { BreadcrumbContext, useBreadcrumb } = createContext<BreadcrumbContextValue>()({
  name: "Breadcrumb",
});

export const { BreadcrumbItemContext, useBreadcrumbItem } =
  createContext<BreadcrumbItemContextValue>()({
    name: "BreadcrumbItem",
  });
