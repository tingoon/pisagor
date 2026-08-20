import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbListVariants = tv({
  base: [
    "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
    "wrap-break-word text-muted-foreground text-sm",
  ],
});

export const breadcrumbItemVariants = tv({
  base: ["inline-flex items-center gap-1.5"],
});

export const breadcrumbLinkVariants = tv({
  base: [
    "text-nowrap",
    "rounded-md border border-transparent",
    "transition-colors",
    "hover:text-foreground",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "motion-reduce:transition-none!",
  ],
});

export const breadcrumbPageVariants = tv({
  base: ["font-normal text-foreground"],
});

export const breadcrumbSeparatorVariants = tv({
  base: ["inline-flex items-center opacity-64 [&_svg]:size-4"],
});

export const breadcrumbInlineVariants = tv({
  base: "size-4",
});
export type BreadcrumbListVariantProps = VariantProps<typeof breadcrumbListVariants>;
export type BreadcrumbItemVariantProps = VariantProps<typeof breadcrumbItemVariants>;
export type BreadcrumbLinkVariantProps = VariantProps<typeof breadcrumbLinkVariants>;
export type BreadcrumbPageVariantProps = VariantProps<typeof breadcrumbPageVariants>;
export type BreadcrumbSeparatorVariantProps = VariantProps<typeof breadcrumbSeparatorVariants>;
export type BreadcrumbInlineVariantProps = VariantProps<typeof breadcrumbInlineVariants>;
