import type { BreadcrumbItemSlots, BreadcrumbSlots } from "@pisagor/recipes/breadcrumb";
import { createContext } from "../../internal/utils";

interface BreadcrumbContextValue {
  slots: BreadcrumbSlots;
}

interface BreadcrumbItemContextValue {
  slots: BreadcrumbItemSlots;
}

export const { BreadcrumbContext, useBreadcrumb } = createContext<BreadcrumbContextValue>()({
  name: "Breadcrumb",
});

export const { BreadcrumbItemContext, useBreadcrumbItem } =
  createContext<BreadcrumbItemContextValue>()({
    name: "BreadcrumbItem",
  });
