import type { BreadcrumbItemRecipe, BreadcrumbRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface BreadcrumbContextValue {
  slots: BreadcrumbRecipe;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemRecipe;
}

const root = createContext("Breadcrumb")<BreadcrumbContextValue>();
const item = createContext("BreadcrumbItem")<BreadcrumbItemContextValue>();

export const setBreadcrumbContext = root.setContext;
export const useBreadcrumb = root.getContext;
export const setBreadcrumbItemContext = item.setContext;
export const useBreadcrumbItem = item.getContext;
