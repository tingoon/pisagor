import { tv } from "tailwind-variants";

export const hoverCardRecipe = tv({
  slots: {
    arrowTip: ["border-s border-t"],
    content: [
      "z-popover",
      "w-64",
      "p-4",
      "bg-popover",
      "text-popover-foreground",
      "origin-(--transform-origin)",
      "rounded-2xl border border-border/50 shadow-md",
      "outline-hidden",
      "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[placement=bottom]:slide-in-from-top-2 data-[state=closed]:data-[placement=bottom]:slide-out-to-top-2",
      "data-[placement=left]:slide-in-from-end-2 data-[state=closed]:data-[placement=left]:slide-out-to-end-2",
      "data-[placement=right]:slide-in-from-start-2 data-[state=closed]:data-[placement=right]:slide-out-to-start-2",
      "data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:data-[placement=top]:slide-out-to-bottom-2",
      "motion-reduce:animate-none!",
    ],
  },
});

export type HoverCardRecipeFn = typeof hoverCardRecipe;
export type HoverCardRecipe = ReturnType<HoverCardRecipeFn>;
export type HoverCardRecipeSlot = keyof HoverCardRecipe;
