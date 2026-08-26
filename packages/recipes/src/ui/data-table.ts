import { tv, type VariantProps } from "tailwind-variants";

export const dataTableVariants = tv({
  slots: {
    base: ["flex w-full flex-col gap-3"],
    empty: ["py-6 text-center text-muted-foreground"],
    footer: ["flex flex-col gap-3"],
    toolbar: ["flex flex-col gap-3"],
  },
});

export type DataTableVariantProps = VariantProps<typeof dataTableVariants>;
export type DataTableVariants = ReturnType<typeof dataTableVariants>;
export type DataTableSlots = keyof DataTableVariants;
