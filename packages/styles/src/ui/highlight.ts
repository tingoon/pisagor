import { tv, type VariantProps } from "tailwind-variants";

export const highlightVariants = tv({
  base: ["px-1", "bg-primary/20", "text-primary", "rounded-md", "box-decoration-clone"],
});
export type HighlightVariantProps = VariantProps<typeof highlightVariants>;
