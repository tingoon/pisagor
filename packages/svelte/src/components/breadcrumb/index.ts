import BreadcrumbEllipsis from "./breadcrumb-ellipsis.svelte";
import BreadcrumbItem from "./breadcrumb-item.svelte";
import BreadcrumbLink from "./breadcrumb-link.svelte";
import BreadcrumbList from "./breadcrumb-list.svelte";
import BreadcrumbPage from "./breadcrumb-page.svelte";
import BreadcrumbRoot from "./breadcrumb-root.svelte";
import BreadcrumbSeparator from "./breadcrumb-separator.svelte";
import BreadcrumbShorthand from "./breadcrumb-shorthand.svelte";

export const Breadcrumb = Object.assign(BreadcrumbShorthand, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
});
