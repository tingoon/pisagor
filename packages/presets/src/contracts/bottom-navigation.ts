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
      "border-border/40 bg-background/72 border-t",
      "backdrop-blur-xl backdrop-saturate-150",
      "shadow-edge-t",
      "pb-[env(safe-area-inset-bottom,0px)]",
      "transparency-reduce:bg-background transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100 transparency-reduce:shadow-none",
      "contrast-more:border-border contrast-more:bg-background contrast-more:shadow-none contrast-more:backdrop-blur-none",
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
      "duration-fast transition ease-out",
      "hover:text-foreground",
      "active:scale-97",
      "aria-selected:text-primary aria-selected:font-semibold",
      "data-current:text-primary data-current:font-semibold",
      "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
      "has-[[data-scope=bottom-navigation][data-part=item-label]]:**:[svg]:size-4",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    icon: ["flex items-center justify-center"],
    label: ["truncate text-xs font-medium tracking-wide"],
  },
});

export type BottomNavigationRecipeFn = typeof bottomNavigationRecipe;
export type BottomNavigationRecipe = ReturnType<BottomNavigationRecipeFn>;
export type BottomNavigationRecipeSlot = keyof BottomNavigationRecipe;

export type BottomNavigationItemRecipeFn = typeof bottomNavigationItemRecipe;
export type BottomNavigationItemRecipe =
  ReturnType<BottomNavigationItemRecipeFn>;
export type BottomNavigationItemRecipeSlot = keyof BottomNavigationItemRecipe;
