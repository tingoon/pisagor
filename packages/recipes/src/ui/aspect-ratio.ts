import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioRecipe = tv({
  base: ["[--ratio:1]", "relative", "w-full", "aspect-(--ratio)"],
});

export type AspectRatioVariantProps = VariantProps<typeof aspectRatioRecipe>;
export type AspectRatioSlots = ReturnType<typeof aspectRatioRecipe>;
