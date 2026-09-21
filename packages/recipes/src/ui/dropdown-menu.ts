import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuRecipe = tv({
  slots: {
    arrowTip: ["border-s border-t"],
    content: [
      "z-[calc(var(--z-index-popover)+var(--nested-layer-count,0))]",
      "max-h-(--available-height) not-[class*='w-']:min-w-32",
      "p-1",
      "bg-popover",
      "text-popover-foreground",
      "rounded-2xl border border-border/50 shadow-md",
      "origin-(--transform-origin)",
      "outline-hidden",
      "overflow-y-auto",
      "duration-fast",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]",
      "data-[placement=bottom]:slide-in-from-top-2 data-[state=closed]:data-[placement=bottom]:slide-out-to-top-2",
      "data-[placement=left]:slide-in-from-end-2 data-[state=closed]:data-[placement=left]:slide-out-to-end-2",
      "data-[placement=right]:slide-in-from-start-2 data-[state=closed]:data-[placement=right]:slide-out-to-start-2",
      "data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:data-[placement=top]:slide-out-to-bottom-2",
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
      "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive",
    ],
  },
});

export const dropdownMenuItemRecipe = tv({
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
      "rounded-[calc(var(--radius-2xl)-(--spacing(1)))]",
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
          "text-destructive",
          "data-highlighted:bg-destructive/10",
          "**:[svg]:text-destructive!",
        ],
      },
    },
  },
});

export type DropdownMenuVariantProps = VariantProps<typeof dropdownMenuRecipe>;
export type DropdownMenuRecipe = ReturnType<typeof dropdownMenuRecipe>;
export type DropdownMenuRecipeSlot = keyof DropdownMenuRecipe;

export type DropdownMenuItemVariantProps = VariantProps<typeof dropdownMenuItemRecipe>;
export type DropdownMenuItemRecipe = ReturnType<typeof dropdownMenuItemRecipe>;
export type DropdownMenuItemRecipeSlot = keyof DropdownMenuItemRecipe;
