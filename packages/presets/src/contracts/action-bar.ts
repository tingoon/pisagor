import { tv, type VariantProps } from "tailwind-variants";

export const actionBarRecipe = tv({
  defaultVariants: {
    /**
     * Preferred placement.
     */
    placement: "bottom",
  },
  slots: {
    body: [
      "flex items-center gap-1",
      "**:data-[scope=action-bar]:data-[part=separator]:h-2",
    ],
    close: [
      "opacity-64 transition-opacity",
      "hover:opacity-100",
      "motion-reduce:transition-none!",
    ],
    content: [
      "[--space:--spacing(2)]",
      "flex w-fit items-center gap-1",
      "rounded-2xl border border-border/50 shadow-md",
      "px-[calc(var(--space)+2px)] py-(--space)",
      "bg-popover/80 backdrop-blur-xl backdrop-saturate-150",
      "text-popover-foreground",
      "pointer-events-auto",
      "transparency-reduce:bg-popover transparency-reduce:backdrop-blur-none transparency-reduce:backdrop-saturate-100",
      "contrast-more:border-border contrast-more:bg-popover contrast-more:backdrop-blur-none",
    ],
    positioner: [
      "fixed inset-x-0 bottom-0 z-modal",
      "flex",
      "px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]",
      "pointer-events-none",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
      "motion-reduce:animate-none! motion-reduce:data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:fade-out-0",
    ],
    separator: ["mx-1 h-1/2"],
    value: ["shrink-0 font-medium text-sm tabular-nums"],
  },
  variants: {
    placement: {
      bottom: {
        positioner: "justify-center",
      },
      "bottom-end": {
        positioner: "justify-end",
      },
      "bottom-start": {
        positioner: "justify-start",
      },
    },
  },
});

export type ActionBarRecipeFn = typeof actionBarRecipe;
export type ActionBarVariantProps = VariantProps<ActionBarRecipeFn>;
export type ActionBarRecipe = ReturnType<ActionBarRecipeFn>;
export type ActionBarRecipeSlot = keyof ActionBarRecipe;
