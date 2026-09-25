import { tv } from "tailwind-variants";

export const bottomNavigationRecipe = tv({
  slots: {
    base: [
      "w-full",
      "min-h-[calc(var(--spacing)*14+env(safe-area-inset-bottom,0))]",
    ],
    list: [
      "fixed inset-x-0 bottom-0 z-10",
      "flex w-full items-center justify-around",
      "min-h-14 shrink-0",
      "border-t border-border/40 bg-background/72",
      "backdrop-blur-xl backdrop-saturate-150",
      "shadow-[0_-1px_0_0_rgb(255_255_255/0.5)] dark:shadow-[0_-1px_0_0_rgb(255_255_255/0.06)]",
      "pb-[env(safe-area-inset-bottom,0px)]",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100 transparency-reduce:shadow-none",
      "contrast-more:border-border contrast-more:bg-background contrast-more:backdrop-blur-none contrast-more:shadow-none",
    ],
  },
});

export const bottomNavigationItemRecipe = tv({
  slots: {
    base: [
      "relative",
      "min-w-0",
      "flex flex-1 flex-col items-center justify-center gap-0.5",
      "p-2",
      "text-muted-foreground",
      "cursor-pointer",
      "transition-[color,transform] duration-fast ease-out",
      "hover:text-foreground",
      "active:scale-[0.97]",
      "aria-selected:font-semibold aria-selected:text-primary",
      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "has-[[data-scope=bottom-navigation][data-part=item-label]]:size-4",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    icon: ["flex items-center justify-center"],
    label: ["truncate font-medium text-xs tracking-wide"],
  },
});

export type BottomNavigationRecipeFn = typeof bottomNavigationRecipe;
export type BottomNavigationRecipe = ReturnType<BottomNavigationRecipeFn>;
export type BottomNavigationRecipeSlot = keyof BottomNavigationRecipe;

export type BottomNavigationItemRecipeFn = typeof bottomNavigationItemRecipe;
export type BottomNavigationItemRecipe =
  ReturnType<BottomNavigationItemRecipeFn>;
export type BottomNavigationItemRecipeSlot = keyof BottomNavigationItemRecipe;
