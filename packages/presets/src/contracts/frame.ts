import { tv } from "tailwind-variants";

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
    panel: [
      "relative",
      "p-5",
      "bg-card",
      "rounded-[calc(var(--radius-2xl)-(--spacing(1)))] border border-border/50 shadow-xs",
    ],
    panelDescription: ["text-muted-foreground text-sm leading-relaxed"],
    panelFooter: ["px-5 py-4"],
    panelHeader: ["flex flex-col", "px-5 py-4"],
    panelTitle: ["font-semibold text-sm tracking-tight"],
  },
});

export type FrameRecipeFn = typeof frameRecipe;
export type FrameRecipe = ReturnType<FrameRecipeFn>;
export type FrameRecipeSlot = keyof FrameRecipe;
