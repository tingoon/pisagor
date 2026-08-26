import { tv, type VariantProps } from "tailwind-variants";

export const timerVariants = tv({
  slots: {
    area: ["flex items-center gap-2", "has-[[data-scope=timer][data-part=item-label]]:items-start"],
    base: ["min-w-0", "flex flex-col items-start gap-4", "text-foreground"],
    control: ["flex items-center gap-2"],
    item: [
      "w-fit min-w-[2.5ch]",
      "text-center font-semibold text-3xl text-foreground tabular-nums tracking-wider",
    ],
    itemGroup: [
      "flex items-center",
      "data-[orientation=horizontal]:flex-row",
      "data-[orientation=vertical]:flex-col",
    ],
    itemLabel: ["text-muted-foreground text-xs"],
    separator: ["font-semibold text-2xl text-muted-foreground"],
  },
});

export type TimerVariantProps = VariantProps<typeof timerVariants>;
export type TimerVariants = ReturnType<typeof timerVariants>;
export type TimerSlots = keyof TimerVariants;
