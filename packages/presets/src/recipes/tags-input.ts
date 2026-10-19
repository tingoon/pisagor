import { tv } from "tailwind-variants";

export const tagsInputRecipe = tv({
  slots: {
    base: ["group/tags-input", "flex w-full flex-col gap-2"],
    clearTrigger: [
      "text-muted-foreground hover:text-foreground ms-auto shrink-0 self-center",
      "duration-fast transition ease-out",
      "active:scale-97",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    control: [
      "h-auto min-h-8 in-data-[size=lg]:min-h-9 in-data-[size=sm]:min-h-7",
      "p-1",
      "flex-wrap content-start items-center gap-1",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    input: [
      "w-auto max-w-full min-w-18 flex-auto shrink basis-auto",
      "h-7 in-data-[size=lg]:h-8 in-data-[size=sm]:h-6",
    ],
  },
});

export const tagsInputItemRecipe = tv({
  slots: {
    base: [
      "h-6 max-w-full in-data-[size=lg]:h-7 in-data-[size=sm]:h-5",
      "ps-1.5 pe-0.5 in-data-[size=lg]:ps-2 in-data-[size=sm]:ps-1",
      "inline-flex shrink-0 items-center gap-1",
      "bg-secondary",
      "text-secondary-foreground text-xs in-data-[size=lg]:text-sm",
      "rounded-sm border outline-hidden",
      "data-highlighted:border-primary/30 data-highlighted:bg-primary/10",
    ],
    delete: [
      "size-5 in-data-[size=lg]:size-6 in-data-[size=sm]:size-4",
      "shrink-0",
      "text-muted-foreground",
      "rounded-sm",
      "[&_svg:not([class*='size-'])]:size-3",
      "duration-fast transition ease-out",
      "hover:text-foreground",
      "active:scale-97",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    input: ["px-1 text-xs", "h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5"],
    preview: ["inline-flex max-w-full items-center gap-1"],
    text: "truncate",
  },
});

export type TagsInputRecipeFn = typeof tagsInputRecipe;
export type TagsInputRecipe = ReturnType<TagsInputRecipeFn>;
export type TagsInputRecipeSlot = keyof TagsInputRecipe;

export type TagsInputItemRecipeFn = typeof tagsInputItemRecipe;
export type TagsInputItemRecipe = ReturnType<TagsInputItemRecipeFn>;
export type TagsInputItemRecipeSlot = keyof TagsInputItemRecipe;
