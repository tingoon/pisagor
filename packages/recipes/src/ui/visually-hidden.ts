import { tv, type VariantProps } from "tailwind-variants";

export const visuallyHiddenVariants = tv({
  base: "sr-only",
});

export type VisuallyHiddenVariantProps = VariantProps<typeof visuallyHiddenVariants>;
export type VisuallyHiddenVariants = ReturnType<typeof visuallyHiddenVariants>;
