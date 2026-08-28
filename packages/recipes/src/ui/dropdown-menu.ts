import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    arrowTip: ["border-s border-t"],
    content: [
      "z-[calc(var(--z-popover)+var(--nested-layer-count,0))]",
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
    itemGroupLabel: [
      "px-2 py-1.5",
      "font-medium text-muted-foreground text-sm",
      "pointer-events-none",
    ],
    positioner: "outline-hidden",
    quickItem: ["flex-col gap-1", "[&_svg:not([class*='size-'])]:size-4.5"],
    separator: ["my-1 h-px bg-border"],
    shortcut: [
      "ms-auto rtl:me-auto",
      "text-muted-foreground text-xs tracking-widest",
      "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
    ],
  },
});

export const dropdownMenuItemVariants = tv({
  defaultVariants: {
    inset: false,
    variant: "default",
  },
  slots: {
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
    indicator: ["pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center"],
    text: ["flex items-center gap-2"],
  },
  variants: {
    inset: {
      true: { base: "ps-8" },
    },
    variant: {
      default: { base: ["data-highlighted:bg-accent data-highlighted:text-accent-foreground"] },
      destructive: {
        base: [
          "text-destructive dark:text-destructive-foreground",
          "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
          "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
        ],
      },
    },
  },
});

export type DropdownMenuVariantProps = VariantProps<typeof dropdownMenuVariants>;
export type DropdownMenuVariants = ReturnType<typeof dropdownMenuVariants>;
export type DropdownMenuSlots = keyof DropdownMenuVariants;

export type DropdownMenuItemVariantProps = VariantProps<typeof dropdownMenuItemVariants>;
export type DropdownMenuItemVariants = ReturnType<typeof dropdownMenuItemVariants>;
export type DropdownMenuItemSlots = keyof DropdownMenuItemVariants;
