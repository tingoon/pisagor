import { tv, type VariantProps } from "tailwind-variants";

export const paginationVariants = tv({
  base: ["mx-auto", "w-full", "flex justify-center gap-1"],
});

export const paginationInlineVariants = tv({
  base: [
    "tabular-nums",
    "data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/30",
    "data-selected:not-[hover]:text-foreground",
    "data-selected:not-[hover]:border-input",
  ],
});

export const paginationEllipsisVariants = tv({
  base: [
    "h-8 w-12",
    "flex items-end justify-center",
    "text-muted-foreground",
    "pointer-events-none select-none",
    "[&_svg]:size-4",
  ],
});
export type PaginationVariantProps = VariantProps<typeof paginationVariants>;
export type PaginationInlineVariantProps = VariantProps<typeof paginationInlineVariants>;
export type PaginationEllipsisVariantProps = VariantProps<typeof paginationEllipsisVariants>;
