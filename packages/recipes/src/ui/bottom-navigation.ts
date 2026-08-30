import { tv, type VariantProps } from "tailwind-variants";

export const bottomNavigationRecipe = tv({
  slots: {
    base: ["w-full", "min-h-[calc(var(--spacing)*14+env(safe-area-inset-bottom,0))]"],
    list: [
      "fixed inset-x-0 bottom-0 z-10",
      "flex w-full items-center justify-around",
      "min-h-14 shrink-0",
      "border-t bg-background/60 backdrop-blur-xs",
      "pb-[env(safe-area-inset-bottom,0px)]",
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
      "transition-colors",
      "hover:text-foreground",
      "aria-selected:text-primary",
      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "has-[[data-scope=bottom-navigation][data-part=item-label]]:size-4",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none!",
    ],
    icon: ["flex items-center justify-center"],
    label: ["truncate font-medium text-xs"],
  },
});

export type BottomNavigationVariantProps = VariantProps<typeof bottomNavigationRecipe>;
export type BottomNavigationRecipe = ReturnType<typeof bottomNavigationRecipe>;
export type BottomNavigationRecipeSlot = keyof BottomNavigationRecipe;

export type BottomNavigationItemVariantProps = VariantProps<typeof bottomNavigationItemRecipe>;
export type BottomNavigationItemRecipe = ReturnType<typeof bottomNavigationItemRecipe>;
export type BottomNavigationItemRecipeSlot = keyof BottomNavigationItemRecipe;
