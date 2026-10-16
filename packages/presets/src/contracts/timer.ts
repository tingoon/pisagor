import { tv } from "tailwind-variants";

export const timerRecipe = tv({
  slots: {
    area: [
      "flex items-center gap-2",
      "has-[[data-scope=timer][data-part=item-label]]:items-start",
    ],
    base: ["min-w-0", "flex flex-col items-start gap-4", "text-foreground"],
    control: ["flex items-center gap-2"],
    separator: ["text-muted-foreground text-2xl font-semibold tracking-tight"],
  },
});

export const timerItemGroupRecipe = tv({
  slots: {
    base: [
      "flex items-center",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ],
    item: [
      "w-fit min-w-[2.5ch]",
      "text-foreground text-center text-3xl font-semibold tracking-tight tabular-nums",
    ],
    label: ["text-muted-foreground text-xs"],
  },
});

export type TimerRecipeFn = typeof timerRecipe;
export type TimerRecipe = ReturnType<TimerRecipeFn>;
export type TimerRecipeSlot = keyof TimerRecipe;

export type TimerItemGroupRecipeFn = typeof timerItemGroupRecipe;
export type TimerItemGroupRecipe = ReturnType<TimerItemGroupRecipeFn>;
export type TimerItemGroupRecipeSlot = keyof TimerItemGroupRecipe;
