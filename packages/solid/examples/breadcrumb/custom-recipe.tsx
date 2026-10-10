import { breadcrumbRecipe } from "@pisagor/recipes";
import { Breadcrumb } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandBreadcrumbRecipe = tv({
  extend: breadcrumbRecipe,
  slots: {
    list: "text-emerald-700 dark:text-emerald-300",
    separator: "text-emerald-500",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Breadcrumb
      items={[
        { href: "https://example.com/", label: "Home" },
        { href: "https://example.com/", label: "Components" },
        { isCurrentPage: true, label: "Breadcrumb" },
      ]}
      recipe={brandBreadcrumbRecipe}
    />
  );
}
