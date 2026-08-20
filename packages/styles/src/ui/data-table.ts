import { tv, type VariantProps } from "tailwind-variants";

export const dataTableToolbarVariants = tv({
  base: ["flex flex-col gap-3"],
});

export const dataTableFooterVariants = tv({
  base: ["flex flex-col gap-3"],
});

export const dataTableVariants = tv({
  base: ["flex w-full flex-col gap-3"],
});

export const dataTableInlineVariants = tv({
  base: ["py-6 text-center text-muted-foreground"],
});
export type DataTableToolbarVariantProps = VariantProps<typeof dataTableToolbarVariants>;
export type DataTableFooterVariantProps = VariantProps<typeof dataTableFooterVariants>;
export type DataTableVariantProps = VariantProps<typeof dataTableVariants>;
export type DataTableInlineVariantProps = VariantProps<typeof dataTableInlineVariants>;
