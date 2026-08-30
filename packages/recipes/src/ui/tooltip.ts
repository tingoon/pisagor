import { tv, type VariantProps } from "tailwind-variants";

export const tooltipRecipe = tv({
  slots: {
    arrow: ["[--arrow-background:var(--foreground)]", "[--arrow-size:calc(1.5*var(--spacing))]"],
    content: [
      "z-popover w-fit",
      "px-3 py-1.5",
      "bg-foreground",
      "text-background text-xs",
      "rounded-lg shadow-lg/5",
      "origin-(--transform-origin) animate-in",
      "fade-in-0 zoom-in-[98%]",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%]",
      "data-[state=closed]:animate-out",
      "data-[placement=bottom]:slide-in-from-top-2",
      "data-[placement=left]:slide-in-from-end-2",
      "data-[placement=right]:slide-in-from-start-2",
      "data-[placement=top]:slide-in-from-bottom-2",
      "motion-reduce:animate-none!",
    ],
  },
});

export type TooltipVariantProps = VariantProps<typeof tooltipRecipe>;
export type TooltipRecipe = ReturnType<typeof tooltipRecipe>;
export type TooltipRecipeSlot = keyof TooltipRecipe;
