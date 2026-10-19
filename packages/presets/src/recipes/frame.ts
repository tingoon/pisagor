import { tv, type VariantProps } from "tailwind-variants";

export const frameRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
  },
  slots: {
    base: [
      "relative",
      "p-1",
      "flex flex-col",
      "bg-muted/72",
      "rounded-2xl",
      "*:[[data-scope=frame][data-part=panel]+[data-scope=frame][data-part=panel]]:mt-1",
    ],
    panel: [
      "relative",
      "p-5",
      "bg-card",
      "border-border/50 rounded-xl border shadow-xs",
    ],
    panelDescription: ["text-muted-foreground text-sm leading-relaxed"],
    panelFooter: ["px-5 py-4"],
    panelHeader: ["flex flex-col", "px-5 py-4"],
    panelTitle: ["text-sm font-semibold tracking-tight"],
  },
  variants: {
    size: {
      lg: {
        base: "p-1.5",
        panel: "p-6",
        panelFooter: "px-6 py-5",
        panelHeader: "px-6 py-5",
        panelTitle: "text-base",
      },
      md: {},
      sm: {
        base: "p-0.5",
        panel: "p-4",
        panelFooter: "px-4 py-3",
        panelHeader: "px-4 py-3",
      },
    },
  },
});

export type FrameRecipeFn = typeof frameRecipe;
export type FrameRecipe = ReturnType<FrameRecipeFn>;
export type FrameRecipeSlot = keyof FrameRecipe;
export type FrameVariantProps = VariantProps<FrameRecipeFn>;
