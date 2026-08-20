import { tv, type VariantProps } from "tailwind-variants";

export const timerVariants = tv({
  base: ["min-w-0", "flex flex-col items-start gap-4", "text-foreground"],
});

export const timerAreaVariants = tv({
  base: ["flex items-center gap-2", "has-[[data-scope=timer][data-part=item-label]]:items-start"],
});

export const timerItemGroupVariants = tv({
  base: [
    "flex items-center",
    "data-[orientation=horizontal]:flex-row",
    "data-[orientation=vertical]:flex-col",
  ],
});

export const timerItemVariants = tv({
  base: [
    "w-fit min-w-[2.5ch]",
    "text-center font-semibold text-3xl text-foreground tabular-nums tracking-wider",
  ],
});

export const timerItemLabelVariants = tv({
  base: ["text-muted-foreground text-xs"],
});

export const timerSeparatorVariants = tv({
  base: ["font-semibold text-2xl text-muted-foreground"],
});

export const timerControlVariants = tv({
  base: ["flex items-center gap-2"],
});
export type TimerVariantProps = VariantProps<typeof timerVariants>;
export type TimerAreaVariantProps = VariantProps<typeof timerAreaVariants>;
export type TimerItemGroupVariantProps = VariantProps<typeof timerItemGroupVariants>;
export type TimerItemVariantProps = VariantProps<typeof timerItemVariants>;
export type TimerItemLabelVariantProps = VariantProps<typeof timerItemLabelVariants>;
export type TimerSeparatorVariantProps = VariantProps<typeof timerSeparatorVariants>;
export type TimerControlVariantProps = VariantProps<typeof timerControlVariants>;
