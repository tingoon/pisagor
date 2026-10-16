import { tv, type VariantProps } from "tailwind-variants";

export const menuRecipe = tv({
  slots: {
    base: ["group/menu", "w-full"],
    group: ["flex flex-col gap-1"],
    groupLabel: [
      "px-2 py-1.5",
      "text-muted-foreground text-sm font-medium",
      "pointer-events-none",
    ],
    item: [
      "group/menu-item",
      "relative",
      "w-full",
      "px-2.5 py-1.5",
      "flex items-center gap-2",
      "text-sm select-none",
      "rounded-lg",
      "outline-hidden",
      "duration-fast transition-colors ease-out motion-reduce:transition-none!",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:bg-accent focus-visible:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    ],
    link: [
      "group/menu-item",
      "relative",
      "w-full",
      "px-2.5 py-1.5",
      "inline-flex items-center gap-2",
      "text-sm select-none",
      "rounded-lg",
      "text-foreground",
      "outline-hidden",
      "duration-fast transition-colors ease-out motion-reduce:transition-none!",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:bg-accent focus-visible:text-accent-foreground",
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    ],
    list: ["flex flex-col gap-1 p-1"],
    separator: ["bg-border my-1 h-px"],
    shortcut: [
      "ms-auto rtl:me-auto",
      "text-muted-foreground text-xs tracking-widest",
      "group-data-[variant=destructive]/menu-item:text-destructive",
    ],
    wrapper: "list-none",
  },
});

export const menuItemRecipe = tv({
  base: menuRecipe().item(),
  defaultVariants: {
    /** Visual emphasis. */
    variant: "default",
  },
  variants: {
    variant: {
      default: [],
      destructive: [
        "text-destructive",
        "hover:bg-destructive/10",
        "focus-visible:bg-destructive/10",
        "**:[svg]:text-destructive!",
      ],
    },
  },
});

export type MenuRecipeFn = typeof menuRecipe;
export type MenuRecipe = ReturnType<MenuRecipeFn>;
export type MenuRecipeSlot = keyof MenuRecipe;

export type MenuItemRecipeFn = typeof menuItemRecipe;
export type MenuItemVariantProps = VariantProps<MenuItemRecipeFn>;
export type MenuItemRecipe = ReturnType<MenuItemRecipeFn>;
export type MenuItemRecipeSlot = keyof MenuItemRecipe;
