import type { BreadcrumbItemVariants, BreadcrumbVariants } from "@pisagor/recipes/breadcrumb";
import { createContext } from "../../internal/utils";

interface BreadcrumbContextValue {
  slots: BreadcrumbVariants;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemVariants;
}

export const { BreadcrumbContext, useBreadcrumb } = createContext<BreadcrumbContextValue>()({
  name: "Breadcrumb",
});

export const { BreadcrumbItemContext, useBreadcrumbItem } =
  createContext<BreadcrumbItemContextValue>()({
    name: "BreadcrumbItem",
  });
