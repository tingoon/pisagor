import { tv } from "tailwind-variants";

export const fileInputRecipe = tv({
  slots: {
    control: "sr-only",
    label: ["min-w-0 flex-1 cursor-pointer truncate px-0"],
    root: ["m-0 min-w-0 border-solid p-0"],
  },
});

export type FileInputRecipeFn = typeof fileInputRecipe;
export type FileInputRecipe = ReturnType<FileInputRecipeFn>;
export type FileInputRecipeSlot = keyof FileInputRecipe;
