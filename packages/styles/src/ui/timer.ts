import { tv, type VariantProps } from "tailwind-variants";

export const timerVariants = tv({
  slots: {
    area: ["flex items-center gap-2", "has-[[data-scope=timer][data-part=item-label]]:items-start"],
    base: ["min-w-0", "flex flex-col items-start gap-4", "text-foreground"],
    control: ["flex items-center gap-2"],
    separator: ["font-semibold text-2xl text-muted-foreground"],
  },
});

export const timerItemGroupVariants = tv({
  slots: {
    base: [
      "flex items-center",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ],
    item: [
      "w-fit min-w-[2.5ch]",
      "text-center font-semibold text-3xl text-foreground tabular-nums tracking-wider",
    ],
    label: ["text-muted-foreground text-xs"],
  },
});

export type TimerVariantProps = VariantProps<typeof timerVariants>;
export type TimerVariants = ReturnType<typeof timerVariants>;
export type TimerSlots = keyof TimerVariants;

export type TimerItemGroupVariantProps = VariantProps<typeof timerItemGroupVariants>;
export type TimerItemGroupVariants = ReturnType<typeof timerItemGroupVariants>;
export type TimerItemGroupSlots = keyof TimerItemGroupVariants;
