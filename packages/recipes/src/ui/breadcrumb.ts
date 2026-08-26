import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbVariants = tv({
  slots: {
    ellipsis: "size-4",
    list: [
      "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
      "wrap-break-word text-muted-foreground text-sm",
    ],
    separator: ["inline-flex items-center opacity-64 [&_svg]:size-4"],
  },
});

export const breadcrumbItemVariants = tv({
  slots: {
    base: ["inline-flex items-center gap-1.5"],
    link: [
      "text-nowrap",
      "rounded-md border border-transparent",
      "transition-colors",
      "hover:text-foreground",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "motion-reduce:transition-none!",
    ],
    page: ["font-normal text-foreground"],
  },
});

export type BreadcrumbVariantProps = VariantProps<typeof breadcrumbVariants>;
export type BreadcrumbVariants = ReturnType<typeof breadcrumbVariants>;
export type BreadcrumbSlots = keyof BreadcrumbVariants;

export type BreadcrumbItemVariantProps = VariantProps<typeof breadcrumbItemVariants>;
export type BreadcrumbItemVariants = ReturnType<typeof breadcrumbItemVariants>;
export type BreadcrumbItemSlots = keyof BreadcrumbItemVariants;
