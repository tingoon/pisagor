import { tv, type VariantProps } from "tailwind-variants";

export const listboxRecipe = tv({
  slots: {
    base: ["w-full", "flex flex-col gap-1.5", "text-foreground"],
    content: [
      "w-full",
      "flex flex-col gap-1",
      "outline-hidden",
      "overflow-hidden",
      "data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row",
    ],
    empty: ["px-2 py-1.5", "text-center text-muted-foreground text-sm"],
    itemGroup: ["flex flex-col gap-1"],
    itemGroupLabel: ["px-2.5 py-2", "font-medium text-muted-foreground", "pointer-events-none"],
    valueText: "font-normal",
  },
});

export const listboxItemRecipe = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
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
    indicator: [
      "flex shrink-0 items-center justify-center",
      "[&_svg]:text-primary!",
      "zoom-in-95 fade-in-0 animate-in",
      "motion-reduce:animate-none!",
    ],
    text: ["min-w-0", "flex-1", "text-ellipsis whitespace-nowrap", "overflow-hidden"],
  },
  variants: {
    variant: {
      default: {
        base: [
          "text-popover-foreground",
          "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        ],
      },
      destructive: {
        base: [
          "text-destructive dark:text-destructive-foreground",
          "hover:bg-destructive/10 dark:hover:bg-destructive-foreground/10",
          "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
          "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
        ],
      },
    },
  },
});

export type ListboxVariantProps = VariantProps<typeof listboxRecipe>;
export type ListboxSlots = ReturnType<typeof listboxRecipe>;

export type ListboxItemVariantProps = VariantProps<typeof listboxItemRecipe>;
export type ListboxItemSlots = ReturnType<typeof listboxItemRecipe>;
