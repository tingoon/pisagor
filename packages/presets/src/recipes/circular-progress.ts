import { tv } from "tailwind-variants";

export const circularProgressRecipe = tv({
  slots: {
    base: [
      "group/circular-progress",
      "relative",
      "inline-flex items-center justify-center",
    ],
    range: [
      "stroke-primary duration-slow fill-none transition-all ease-out motion-reduce:transition-none!",
    ],
    track: [
      "block",
      "-rotate-90",
      "pointer-events-none",
      "motion-reduce:animate-none!",
      "group-data-[state=indeterminate]/circular-progress:animate-spin!",
      "**:data-[scope=circular-progress]:data-[part=track-bg]:fill-none",
      "**:data-[scope=circular-progress]:data-[part=track-bg]:stroke-input",
    ],
    valueText: ["text-xs font-medium tabular-nums", "pointer-events-none"],
    valueWrapper: [
      "pointer-events-none absolute inset-0 flex items-center justify-center",
    ],
  },
});

export type CircularProgressRecipeFn = typeof circularProgressRecipe;
export type CircularProgressRecipe = ReturnType<CircularProgressRecipeFn>;
export type CircularProgressRecipeSlot = keyof CircularProgressRecipe;
