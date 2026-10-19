import { tv } from "tailwind-variants";

export const breadcrumbRecipe = tv({
  slots: {
    ellipsis: "flex size-4 items-center justify-center [&_svg]:size-full",
    list: [
      "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
      "text-muted-foreground text-sm wrap-break-word",
    ],
    separator: ["inline-flex items-center opacity-64 [&_svg]:size-4"],
  },
});

export const breadcrumbItemRecipe = tv({
  slots: {
    base: ["inline-flex items-center gap-1.5"],
    link: [
      "text-nowrap",
      "rounded-md border border-transparent",
      "duration-fast transition-colors ease-out",
      "hover:text-foreground",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32 focus-visible:ring-offset-background outline-hidden focus-visible:ring-offset-2",
      "motion-reduce:transition-none!",
    ],
    page: ["text-foreground font-normal"],
  },
});

export type BreadcrumbRecipeFn = typeof breadcrumbRecipe;
export type BreadcrumbRecipe = ReturnType<BreadcrumbRecipeFn>;
export type BreadcrumbRecipeSlot = keyof BreadcrumbRecipe;

export type BreadcrumbItemRecipeFn = typeof breadcrumbItemRecipe;
export type BreadcrumbItemRecipe = ReturnType<BreadcrumbItemRecipeFn>;
export type BreadcrumbItemRecipeSlot = keyof BreadcrumbItemRecipe;
