import { tv, type VariantProps } from "tailwind-variants";

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
      "rounded-xl border shadow-lg/5",
      "outline-hidden",
      "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[placement=bottom]:slide-in-from-top-2",
      "data-[placement=left]:slide-in-from-end-2",
      "data-[placement=right]:slide-in-from-start-2",
      "data-[placement=top]:slide-in-from-bottom-2",
      "motion-reduce:animate-none!",
    ],
  },
});

export type HoverCardVariantProps = VariantProps<typeof hoverCardRecipe>;
export type HoverCardRecipe = ReturnType<typeof hoverCardRecipe>;
export type HoverCardRecipeSlot = keyof HoverCardRecipe;
