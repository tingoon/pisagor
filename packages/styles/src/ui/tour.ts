import { tv } from "tailwind-variants";

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
