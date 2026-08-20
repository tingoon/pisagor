import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioVariants = tv({
  base: ["[--ratio:1]", "relative", "w-full", "aspect-(--ratio)"],
});

export type AspectRatioVariantProps = VariantProps<typeof aspectRatioVariants>;
export type AspectRatioVariants = ReturnType<typeof aspectRatioVariants>;
