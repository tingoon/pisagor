import { tv } from "tailwind-variants";

export const tagsInputVariants = tv({
  base: ["group/tags-input", "flex w-full flex-col gap-2"],
});

export const tagsInputInlineVariants = tv({
  base: [
    "h-auto in-data-[size=lg]:min-h-9 in-data-[size=sm]:min-h-7 min-h-8",
    "p-1",
    "flex-wrap content-start items-center gap-1",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

export const tagsInputItemVariants = tv({
  base: [
    "h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5 max-w-full",
    "pe-0.5 in-data-[size=lg]:ps-2 in-data-[size=sm]:ps-1 ps-1.5",
    "inline-flex shrink-0 items-center gap-1",
    "bg-secondary",
    "in-data-[size=lg]:text-sm text-secondary-foreground text-xs",
    "rounded-md border outline-hidden",
    "data-highlighted:border-primary/30 data-highlighted:bg-primary/10",
  ],
});

export const tagsInputItemPreviewVariants = tv({
  base: ["inline-flex max-w-full items-center gap-1"],
});

export const tagsInputItemTextVariants = tv({
  base: "truncate",
});

export const tagsInputInline2Variants = tv({
  base: [
    "in-data-[size=lg]:size-6 in-data-[size=sm]:size-4 size-5",
    "shrink-0",
    "text-muted-foreground",
    "rounded-[calc(var(--radius)-5px)]",
    "[&_svg:not([class*='size-'])]:size-3",
    "hover:text-foreground",
  ],
});

export const tagsInputInline3Variants = tv({
  base: ["px-1 text-xs", "h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5"],
});

export const tagsInputInline4Variants = tv({
  base: [
    "w-auto min-w-18 max-w-full flex-auto shrink basis-auto",
    "h-7 in-data-[size=lg]:h-8 in-data-[size=sm]:h-6",
  ],
});

export const tagsInputInline5Variants = tv({
  base: ["ms-auto shrink-0 self-center text-muted-foreground hover:text-foreground"],
});

export const tagsInputRootProviderVariants = tv({
  base: ["group/tags-input", "flex w-full flex-col gap-2"],
});
