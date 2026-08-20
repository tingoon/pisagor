import { tv, type VariantProps } from "tailwind-variants";

export const tableVariants = tv({
  base: ["group/table", "w-full", "caption-bottom", "text-foreground text-sm"],
});

export const tableHeaderVariants = tv({
  base: "[&_tr]:border-b",
});

export const tableBodyVariants = tv({
  base: "[&_tr:last-child]:border-0",
});

export const tableFooterVariants = tv({
  base: ["border-t", "bg-muted/48", "font-medium", "last:[&>tr]:border-b-0"],
});

export const tableRowVariants = tv({
  base: [
    "border-b transition-colors",
    "group-data-[variant=striped]/table:even:bg-muted/30",
    "data-[state=selected]:bg-muted",
    "data-[active=true]:bg-primary/10 data-[active=true]:shadow-[inset_3px_0_0_0_var(--primary)]",
    "group-data-[hoverable=true]/table:[&:has(td):hover:not([data-state=selected]):not([data-active=true])]:bg-muted/48",
  ],
});

export const tableHeadVariants = tv({
  base: [
    "h-10 px-2",
    "text-left align-middle",
    "font-medium text-muted-foreground",
    "rtl:text-right",
    "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
  ],
});

export const tableCellVariants = tv({
  base: [
    "whitespace-nowrap p-2 align-middle",
    "has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
  ],
});

export const tableCaptionVariants = tv({
  base: ["mt-4", "text-muted-foreground text-sm"],
});

export const tableWrapperVariants = tv({
  base: ["relative w-full overflow-auto"],
});

export type TableVariantProps = VariantProps<typeof tableVariants>;
export type TableVariants = ReturnType<typeof tableVariants>;

export type TableHeaderVariantProps = VariantProps<typeof tableHeaderVariants>;
export type TableHeaderVariants = ReturnType<typeof tableHeaderVariants>;

export type TableBodyVariantProps = VariantProps<typeof tableBodyVariants>;
export type TableBodyVariants = ReturnType<typeof tableBodyVariants>;

export type TableFooterVariantProps = VariantProps<typeof tableFooterVariants>;
export type TableFooterVariants = ReturnType<typeof tableFooterVariants>;

export type TableRowVariantProps = VariantProps<typeof tableRowVariants>;
export type TableRowVariants = ReturnType<typeof tableRowVariants>;

export type TableHeadVariantProps = VariantProps<typeof tableHeadVariants>;
export type TableHeadVariants = ReturnType<typeof tableHeadVariants>;

export type TableCellVariantProps = VariantProps<typeof tableCellVariants>;
export type TableCellVariants = ReturnType<typeof tableCellVariants>;

export type TableCaptionVariantProps = VariantProps<typeof tableCaptionVariants>;
export type TableCaptionVariants = ReturnType<typeof tableCaptionVariants>;

export type TableWrapperVariantProps = VariantProps<typeof tableWrapperVariants>;
export type TableWrapperVariants = ReturnType<typeof tableWrapperVariants>;
