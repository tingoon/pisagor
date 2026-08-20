import { tv, type VariantProps } from "tailwind-variants";

export const frameVariants = tv({
  base: [
    "relative",
    "p-1",
    "flex flex-col",
    "bg-muted/72",
    "rounded-2xl",
    "*:[[data-scope=frame][data-part=panel]+[data-scope=frame][data-part=panel]]:mt-1",
  ],
});

export const framePanelVariants = tv({
  base: ["relative", "p-5", "bg-background", "rounded-xl border shadow-xs/5"],
});

export const framePanelHeaderVariants = tv({
  base: ["flex flex-col", "px-5 py-4"],
});

export const framePanelTitleVariants = tv({
  base: ["font-semibold text-sm"],
});

export const framePanelDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const framePanelFooterVariants = tv({
  base: ["px-5 py-4"],
});

export type FrameVariantProps = VariantProps<typeof frameVariants>;
export type FrameVariants = ReturnType<typeof frameVariants>;

export type FramePanelVariantProps = VariantProps<typeof framePanelVariants>;
export type FramePanelVariants = ReturnType<typeof framePanelVariants>;

export type FramePanelHeaderVariantProps = VariantProps<typeof framePanelHeaderVariants>;
export type FramePanelHeaderVariants = ReturnType<typeof framePanelHeaderVariants>;

export type FramePanelTitleVariantProps = VariantProps<typeof framePanelTitleVariants>;
export type FramePanelTitleVariants = ReturnType<typeof framePanelTitleVariants>;

export type FramePanelDescriptionVariantProps = VariantProps<typeof framePanelDescriptionVariants>;
export type FramePanelDescriptionVariants = ReturnType<typeof framePanelDescriptionVariants>;

export type FramePanelFooterVariantProps = VariantProps<typeof framePanelFooterVariants>;
export type FramePanelFooterVariants = ReturnType<typeof framePanelFooterVariants>;
