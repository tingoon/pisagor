import { tv, type VariantProps } from "tailwind-variants";

export const radioGroupRecipe = tv({
  base: [
    "flex flex-col gap-3",
    "data-invalid:text-destructive dark:data-invalid:text-destructive-foreground",
  ],
});

export const radioGroupItemRecipe = tv({
  slots: {
    base: ["inline-flex items-center gap-2", "data-disabled:opacity-64"],
    control: [
      "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
      "data-invalid:data-[state=checked]:bg-transparent data-invalid:data-[state=checked]:before:bg-destructive-foreground",
    ],
  },
});

export type RadioGroupVariantProps = VariantProps<typeof radioGroupRecipe>;
export type RadioGroupSlots = ReturnType<typeof radioGroupRecipe>;

export type RadioGroupItemVariantProps = VariantProps<typeof radioGroupItemRecipe>;
export type RadioGroupItemSlots = ReturnType<typeof radioGroupItemRecipe>;
