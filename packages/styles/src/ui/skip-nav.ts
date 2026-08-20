import { tv, type VariantProps } from "tailwind-variants";

export const skipNavLinkVariants = tv({
  base: [
    "focus:fixed focus:inset-s-4 focus:top-4 focus:z-9999",
    "focus:px-4 focus:py-2",
    "focus:bg-primary",
    "focus:text-primary-foreground focus:text-sm",
    "sr-only focus:not-sr-only",
    "focus:rounded-lg",
    "focus:outline-hidden focus:ring-2 focus:ring-ring",
  ],
});

export const skipNavContentVariants = tv({
  base: "outline-hidden",
});
export type SkipNavLinkVariantProps = VariantProps<typeof skipNavLinkVariants>;
export type SkipNavContentVariantProps = VariantProps<typeof skipNavContentVariants>;
