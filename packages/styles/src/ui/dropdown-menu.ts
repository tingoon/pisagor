import { tv } from "tailwind-variants";

export const dropdownMenuContentVariants = tv({
  base: [
    "z-[calc(50+var(--nested-layer-count,0))]",
    "max-h-(--available-height) not-[class*='w-']:min-w-32",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "origin-(--transform-origin)",
    "outline-hidden",
    "overflow-y-auto",
    "duration-100",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-[98%]",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=left]:slide-in-from-end-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=top]:slide-in-from-bottom-2",
    "motion-reduce:animate-none!",
  ],
});

export const dropdownMenuItemVariants = tv({
  base: [
    "group/dropdown-menu-item",
    "relative",
    "w-full",
    "px-2.5 py-1.5",
    "flex items-center gap-2",
    "select-none text-sm",
    "rounded-lg",
    "outline-hidden",
    "group-data-[date=open]/trigger-item:bg-accent group-data-[date=open]/trigger-item:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: ["data-highlighted:bg-accent data-highlighted:text-accent-foreground"],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
        "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
      ],
    },
  },
});

export const dropdownMenuPositionerVariants = tv({
  base: "outline-hidden",
});

export const dropdownMenuSeparatorVariants = tv({
  base: ["my-1 h-px bg-border"],
});

export const dropdownMenuQuickItemVariants = tv({
  base: ["flex-col gap-1", "[&_svg:not([class*='size-'])]:size-4.5"],
});

export const dropdownMenuInlineVariants = tv({
  base: "ps-8",
});

export const dropdownMenuGroupLabelVariants = tv({
  base: ["px-2 py-1.5", "font-medium text-muted-foreground text-sm", "pointer-events-none"],
});

export const dropdownMenuRadioItemVariants = tv({
  base: "ps-8",
});

export const dropdownMenuShortcutVariants = tv({
  base: [
    "ms-auto rtl:me-auto",
    "text-muted-foreground text-xs tracking-widest",
    "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
  ],
});

export const dropdownMenuInline2Variants = tv({
  base: ["pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center"],
});

export const dropdownMenuInline3Variants = tv({
  base: ["flex items-center gap-2"],
});

export const dropdownMenuInline4Variants = tv({
  base: ["pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center"],
});

export const dropdownMenuRadioItemTextVariants = tv({
  base: ["flex items-center gap-2"],
});

export const dropdownMenuInline5Variants = tv({
  base: ["border-s border-t"],
});
