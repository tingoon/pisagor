import { tv, type VariantProps } from "tailwind-variants";

export const tourOverlayVariants = tv({
  base: "duration-initial",
});

export const tourPositionerVariants = tv({
  base: [
    "z-50",
    "flex items-center justify-center",
    "data-[type=dialog]:fixed data-[type=dialog]:inset-0",
    "data-[type=tooltip]:absolute",
  ],
});

export const tourContentVariants = tv({
  base: [
    "[--space:--spacing(4)]",
    "z-[calc(50+var(--layer-index,0))]",
    "relative",
    "w-full max-w-md",
    "flex flex-col gap-4",
    "bg-background",
    "rounded-lg border shadow-lg",
    "focus:outline-hidden focus:ring-0",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
    "motion-reduce:animate-none!",
  ],
});

export const tourTitleVariants = tv({
  base: ["font-semibold text-base leading-none tracking-tight"],
});

export const tourDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const tourProgressTextVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const tourActionsVariants = tv({
  base: ["flex flex-wrap gap-2"],
});

export const tourInlineVariants = tv({
  base: ["absolute top-4 right-4"],
});

export const tourInline2Variants = tv({
  base: ["size-8 border-none opacity-70 hover:opacity-100"],
});

export const tourInline3Variants = tv({
  base: "sr-only",
});

export const tourSpotlightVariants = tv({
  base: ["z-50 border-2 border-primary"],
});

export type TourOverlayVariantProps = VariantProps<typeof tourOverlayVariants>;
export type TourOverlayVariants = ReturnType<typeof tourOverlayVariants>;

export type TourPositionerVariantProps = VariantProps<typeof tourPositionerVariants>;
export type TourPositionerVariants = ReturnType<typeof tourPositionerVariants>;

export type TourContentVariantProps = VariantProps<typeof tourContentVariants>;
export type TourContentVariants = ReturnType<typeof tourContentVariants>;

export type TourTitleVariantProps = VariantProps<typeof tourTitleVariants>;
export type TourTitleVariants = ReturnType<typeof tourTitleVariants>;

export type TourDescriptionVariantProps = VariantProps<typeof tourDescriptionVariants>;
export type TourDescriptionVariants = ReturnType<typeof tourDescriptionVariants>;

export type TourProgressTextVariantProps = VariantProps<typeof tourProgressTextVariants>;
export type TourProgressTextVariants = ReturnType<typeof tourProgressTextVariants>;

export type TourActionsVariantProps = VariantProps<typeof tourActionsVariants>;
export type TourActionsVariants = ReturnType<typeof tourActionsVariants>;

export type TourInlineVariantProps = VariantProps<typeof tourInlineVariants>;
export type TourInlineVariants = ReturnType<typeof tourInlineVariants>;

export type TourInline2VariantProps = VariantProps<typeof tourInline2Variants>;
export type TourInline2Variants = ReturnType<typeof tourInline2Variants>;

export type TourInline3VariantProps = VariantProps<typeof tourInline3Variants>;
export type TourInline3Variants = ReturnType<typeof tourInline3Variants>;

export type TourSpotlightVariantProps = VariantProps<typeof tourSpotlightVariants>;
export type TourSpotlightVariants = ReturnType<typeof tourSpotlightVariants>;
