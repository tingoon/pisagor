import { tv } from "tailwind-variants";

export const menuVariants = tv({
  slots: {
    group: ["flex flex-col gap-1"],
    groupLabel: ["px-2 py-1.5", "font-medium text-muted-foreground text-sm", "pointer-events-none"],
    item: [
      "group/menu-item",
      "relative",
      "w-full",
      "px-2.5 py-1.5",
      "flex items-center gap-2",
      "select-none text-sm",
      "rounded-lg",
      "outline-hidden",
      "transition-colors duration-100 motion-reduce:transition-none!",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:bg-accent focus-visible:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    link: [
      "group/menu-item",
      "relative",
      "w-full",
      "px-2.5 py-1.5",
      "inline-flex items-center gap-2",
      "select-none text-sm",
      "rounded-lg",
      "text-foreground",
      "outline-hidden",
      "transition-colors duration-100 motion-reduce:transition-none!",
      "hover:bg-accent hover:text-accent-foreground",
      "focus-visible:bg-accent focus-visible:text-accent-foreground",
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    list: ["flex flex-col gap-1 p-1"],
    root: ["group/menu", "w-full"],
    separator: ["my-1 h-px bg-border"],
    shortcut: [
      "ms-auto rtl:me-auto",
      "text-muted-foreground text-xs tracking-widest",
      "group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
    ],
  },
});

export const menuItemVariants = tv({
  base: menuVariants().item(),
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "hover:bg-destructive/10 dark:hover:bg-destructive-foreground/10",
        "focus-visible:bg-destructive/10 dark:focus-visible:bg-destructive-foreground/10",
        "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
      ],
    },
  },
});

export const menuItemWrapperVariants = tv({
  base: "list-none",
});

export const menuItemWrapper2Variants = tv({
  base: "list-none",
});
