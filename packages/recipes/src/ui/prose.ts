import { tv, type VariantProps } from "tailwind-variants";

export const proseRecipe = tv({
  base: ["prose prose-neutral dark:prose-invert mx-auto max-w-prose"],
});

export type ProseVariantProps = VariantProps<typeof proseRecipe>;
export type ProseSlots = ReturnType<typeof proseRecipe>;
