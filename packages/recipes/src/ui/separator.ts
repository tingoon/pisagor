import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
  base: [
    "shrink-0",
    "bg-input",
    "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
    "data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
  ],
});

export type SeparatorVariantProps = VariantProps<typeof separatorVariants>;
export type SeparatorVariants = ReturnType<typeof separatorVariants>;
