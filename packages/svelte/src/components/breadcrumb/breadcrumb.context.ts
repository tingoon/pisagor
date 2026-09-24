import type { BreadcrumbItemRecipe, BreadcrumbRecipe } from "@pisagor/recipes/breadcrumb";
import { createContext } from "../../utils/create-context";

interface BreadcrumbContextValue {
  slots: BreadcrumbRecipe;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemRecipe;
}

const root = createContext<BreadcrumbContextValue>({ name: "Breadcrumb" });
const item = createContext<BreadcrumbItemContextValue>({ name: "BreadcrumbItem" });

export const setBreadcrumbContext = root.setContext;
export const useBreadcrumb = root.getContext;
export const setBreadcrumbItemContext = item.setContext;
export const useBreadcrumbItem = item.getContext;
