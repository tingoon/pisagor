import { tv } from "tailwind-variants";

export const navigationMenuRecipe = tv({
  slots: {
    base: ["group/navigation-menu", "w-full"],
    content: [
      "absolute start-0 top-full z-50 mt-1",
      "flex min-w-48 flex-col gap-1",
      "bg-popover text-popover-foreground rounded-lg border p-1 shadow-lg",
    ],
    indicator: [
      "size-3.5 shrink-0",
      "duration-fast transition-transform ease-out motion-reduce:transition-none!",
      "group-aria-expanded/navigation-menu-trigger:rotate-180",
    ],
    item: ["relative shrink-0"],
    link: [
      "inline-flex items-center gap-2",
      "rounded-md px-3 py-2",
      "text-sm font-medium",
      "text-muted-foreground",
      "outline-hidden",
      "duration-fast transition-colors ease-out motion-reduce:transition-none!",
      "hover:text-foreground",
      "focus-visible:ring-0.75 focus-visible:ring-ring/32",
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
    ],
    list: ["flex flex-wrap items-center gap-1"],
    trigger: [
      "group/navigation-menu-trigger",
      "inline-flex items-center gap-1",
      "rounded-md px-3 py-2",
      "text-sm font-medium",
      "text-muted-foreground",
      "outline-hidden",
      "duration-fast transition-colors ease-out motion-reduce:transition-none!",
      "hover:text-foreground aria-expanded:text-foreground",
      "focus-visible:ring-0.75 focus-visible:ring-ring/32",
    ],
  },
});

export type NavigationMenuRecipeFn = typeof navigationMenuRecipe;
export type NavigationMenuRecipe = ReturnType<NavigationMenuRecipeFn>;
export type NavigationMenuRecipeSlot = keyof NavigationMenuRecipe;
