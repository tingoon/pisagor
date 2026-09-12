import BreadcrumbShorthand from "./breadcrumb.astro";
import BreadcrumbEllipsis from "./breadcrumb-ellipsis.astro";
import BreadcrumbItem from "./breadcrumb-item.astro";
import BreadcrumbLink from "./breadcrumb-link.astro";
import BreadcrumbList from "./breadcrumb-list.astro";
import BreadcrumbPage from "./breadcrumb-page.astro";
import BreadcrumbRoot from "./breadcrumb-root.astro";
import BreadcrumbSeparator from "./breadcrumb-separator.astro";

export const Breadcrumb = Object.assign(BreadcrumbShorthand, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
});
