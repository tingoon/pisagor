import { tv } from "tailwind-variants";

export const collapsibleRecipe = tv({
  slots: {
    base: "group/collapsible",
    content: [
      "h-(--collapsed-height)",
      "group-data-partial-collapse/collapsible:h-full",
      "transition-[height] duration-normal ease-out",
      "overflow-hidden",
      "data-[state=open]:animate-expand",
      "data-[state=closed]:animate-collapse",
      "motion-reduce:animate-none! motion-reduce:transition-none!",
    ],
    icon: [
      "transition-transform duration-normal ease-out motion-reduce:transition-none!",
    ],
    indicator: "data-[state=open]:[&_svg]:rotate-180",
    trigger: [
      "cursor-pointer",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "has-[[data-scope=collapsible][data-part=indicator]]:[button]:justify-between",
    ],
  },
});

export type CollapsibleRecipeFn = typeof collapsibleRecipe;
export type CollapsibleRecipe = ReturnType<CollapsibleRecipeFn>;
export type CollapsibleRecipeSlot = keyof CollapsibleRecipe;
