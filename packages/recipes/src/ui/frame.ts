import { tv, type VariantProps } from "tailwind-variants";

export const frameRecipe = tv({
  slots: {
    base: [
      "relative",
      "p-1",
      "flex flex-col",
      "bg-muted/72",
      "rounded-2xl",
      "*:[[data-scope=frame][data-part=panel]+[data-scope=frame][data-part=panel]]:mt-1",
    ],
    panel: ["relative", "p-5", "bg-background", "rounded-xl border shadow-xs/5"],
    panelDescription: ["text-muted-foreground text-sm"],
    panelFooter: ["px-5 py-4"],
    panelHeader: ["flex flex-col", "px-5 py-4"],
    panelTitle: ["font-semibold text-sm"],
  },
});

export type FrameVariantProps = VariantProps<typeof frameRecipe>;
export type FrameRecipe = ReturnType<typeof frameRecipe>;
export type FrameRecipeSlot = keyof FrameRecipe;
