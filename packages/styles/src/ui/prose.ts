import { tv, type VariantProps } from "tailwind-variants";

export const proseVariants = tv({
  base: ["prose prose-neutral dark:prose-invert mx-auto max-w-prose"],
});
export type ProseVariantProps = VariantProps<typeof proseVariants>;
