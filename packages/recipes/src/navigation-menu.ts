import { tv } from "tailwind-variants";

export const navigationMenuRecipe = tv({
  slots: {
    base: ["group/navigation-menu", "w-full"],
    item: ["shrink-0"],
    link: [
      "inline-flex items-center gap-2",
      "rounded-md px-3 py-2",
      "font-medium text-sm",
      "text-muted-foreground",
      "outline-hidden",
      "transition-[color,background-color] duration-fast ease-out motion-reduce:transition-none!",
      "hover:text-foreground",
      "focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
    ],
    list: ["flex flex-wrap items-center gap-1"],
  },
});

export type NavigationMenuRecipeFn = typeof navigationMenuRecipe;
export type NavigationMenuRecipe = ReturnType<NavigationMenuRecipeFn>;
export type NavigationMenuRecipeSlot = keyof NavigationMenuRecipe;
