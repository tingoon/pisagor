import { tv, type VariantProps } from "tailwind-variants";

export const listboxItemVariants = tv({
  base: [
    "group/listbox-item",
    "relative",
    "flex items-center gap-2",
    "px-2.5 py-2",
    "rounded-xl",
    "select-none text-sm",
    "cursor-pointer",
    "outline-hidden",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "text-popover-foreground",
        "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        "hover:bg-accent hover:text-accent-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      ],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "hover:bg-destructive/10 dark:hover:bg-destructive-foreground/10",
        "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
        "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
      ],
    },
  },
});

export const listboxVariants = tv({
  base: ["w-full", "flex flex-col gap-1.5", "text-foreground"],
});

export const listboxContentVariants = tv({
  base: [
    "w-full",
    "flex flex-col gap-1",
    "outline-hidden",
    "overflow-hidden",
    "data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row",
  ],
});

export const listboxItemTextVariants = tv({
  base: ["min-w-0", "flex-1", "text-ellipsis whitespace-nowrap", "overflow-hidden"],
});

export const listboxItemGroupVariants = tv({
  base: ["flex flex-col gap-1"],
});

export const listboxItemGroupLabelVariants = tv({
  base: ["px-2.5 py-2", "font-medium text-muted-foreground", "pointer-events-none"],
});

export const listboxValueTextVariants = tv({
  base: "font-normal",
});

export const listboxItemIndicatorVariants = tv({
  base: [
    "flex shrink-0 items-center justify-center",
    "[&_svg]:text-primary!",
    "zoom-in-95 fade-in-0 animate-in",
    "motion-reduce:animate-none!",
  ],
});

export const listboxEmptyVariants = tv({
  base: ["px-2 py-1.5", "text-center text-muted-foreground text-sm"],
});
export type ListboxItemVariantProps = VariantProps<typeof listboxItemVariants>;
export type ListboxVariantProps = VariantProps<typeof listboxVariants>;
export type ListboxContentVariantProps = VariantProps<typeof listboxContentVariants>;
export type ListboxItemTextVariantProps = VariantProps<typeof listboxItemTextVariants>;
export type ListboxItemGroupVariantProps = VariantProps<typeof listboxItemGroupVariants>;
export type ListboxItemGroupLabelVariantProps = VariantProps<typeof listboxItemGroupLabelVariants>;
export type ListboxValueTextVariantProps = VariantProps<typeof listboxValueTextVariants>;
export type ListboxItemIndicatorVariantProps = VariantProps<typeof listboxItemIndicatorVariants>;
export type ListboxEmptyVariantProps = VariantProps<typeof listboxEmptyVariants>;
