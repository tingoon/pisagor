import type { BreadcrumbItemRecipe, BreadcrumbRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface BreadcrumbContextValue {
  slots: BreadcrumbRecipe;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemRecipe;
}

export const { BreadcrumbContext, useBreadcrumb } =
  createContext("Breadcrumb")<BreadcrumbContextValue>();

export const { BreadcrumbItemContext, useBreadcrumbItem } =
  createContext("BreadcrumbItem")<BreadcrumbItemContextValue>();
