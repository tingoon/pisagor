import { tv } from "tailwind-variants";

export const bottomNavigationVariants = tv({
  base: ["w-full", "min-h-[calc(var(--spacing)*14+env(safe-area-inset-bottom,0))]"],
});

export const bottomNavigationListVariants = tv({
  base: [
    "fixed inset-x-0 bottom-0 z-10",
    "flex w-full items-center justify-around",
    "min-h-14 shrink-0",
    "border-t bg-background/60 backdrop-blur-xs",
    "pb-[env(safe-area-inset-bottom,0px)]",
  ],
});

export const bottomNavigationItemVariants = tv({
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
});

export const bottomNavigationItemIconVariants = tv({
  base: ["flex items-center justify-center"],
});

export const bottomNavigationItemLabelVariants = tv({
  base: ["truncate font-medium text-xs"],
});
