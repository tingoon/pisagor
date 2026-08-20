import { tv, type VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
  base: ["size-4 animate-spin"],
});
export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
