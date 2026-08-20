import { tv, type VariantProps } from "tailwind-variants";

export const colorPickerVariants = tv({
  base: ["group/color-picker", "w-fit", "flex gap-2"],
});

export const colorPickerControlVariants = tv({
  base: ["flex flex-row items-center gap-2"],
});

export const colorPickerInlineVariants = tv({
  base: [
    "size-full rounded-[calc(var(--radius-sm)-0.5px)]",
    "bg-[linear-gradient(45deg,#e4e4e4_25%,transparent_25%),linear-gradient(-45deg,#e4e4e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e4e4e4_75%),linear-gradient(-45deg,transparent_75%,#e4e4e4_75%)]",
    "bg-position-[0_0,0_4px,4px_-4px,-4px_0] bg-size-(--spacing(2))",
  ],
});

export const colorPickerContentVariants = tv({
  base: [
    "[--space:--spacing(3)]",
    "z-50",
    "relative",
    "w-full min-w-56",
    "flex flex-col gap-4",
    "p-(--space)",
    "bg-popover",
    "rounded-xl border shadow-lg/5",
    "outline-hidden",
    "origin-(--transform-origin)",
    "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
    "motion-reduce:animate-none!",
  ],
});

export const colorPickerViewVariants = tv({
  base: ["relative flex size-full flex-1 flex-col gap-4"],
});

export const colorPickerChannelSliderVariants = tv({
  slots: {
    base: [
      "relative",
      "flex items-center",
      "touch-none select-none",
      "rounded-full border",
      "data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
      "group-data-disabled/color-picker:pointer-events-none group-data-disabled/color-picker:cursor-not-allowed group-data-disabled/color-picker:opacity-64",
    ],
    thumb: [
      "relative shrink-0",
      "size-4.5",
      "-translate-1/2",
      "rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(0,0,0,0.1)]",
      "outline-hidden ring-1 ring-border/64",
      "origin-left data-[orientation=vertical]:origin-bottom",
    ],
    track: [
      "grow",
      "rounded-full",
      "select-none overflow-hidden",
      "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
    ],
  },
});

export const colorPickerSwatchGroupVariants = tv({
  base: ["flex flex-wrap items-center gap-2"],
});

export const colorPickerSwatchTriggerVariants = tv({
  base: [
    "relative",
    "size-8",
    "flex items-center justify-center",
    "rounded-full",
    "transition-[border-color,box-shadow] duration-100 ease-out will-change-transform",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "data-[state=checked]:shadow-xs/5 data-[state=checked]:ring-(--color) data-[state=checked]:ring-2",
    "motion-reduce:transition-none!",
  ],
});

export const colorPickerSwatchVariants = tv({
  base: [
    "size-full",
    "shrink-0",
    "overflow-hidden",
    "rounded-[inherit]",
    "transition-transform duration-100 ease-out will-change-transform",
    "not-[data-state=checked]:hover:scale-110",
    "data-[state=checked]:scale-[0.8]",
    "motion-reduce:transition-none!",
  ],
});

export const colorPickerSwatchIndicatorVariants = tv({
  base: [
    "absolute inset-0 z-10",
    "flex items-center justify-center",
    "text-white",
    "pointer-events-none",
    "zoom-in-5 animate-in blur-in-md",
    "[&_svg]:size-1/2",
    "motion-reduce:animate-none!",
  ],
});

export const colorPickerValueTextVariants = tv({
  base: ["font-medium text-sm"],
});

export const colorPickerValueSwatchVariants = tv({
  base: ["relative size-8 shrink-0", "overflow-hidden", "rounded-full border"],
});

export const colorPickerAreaVariants = tv({
  slots: {
    background: ["size-full rounded-[inherit]"],
    base: ["relative", "aspect-square size-full", "rounded-xl border", "touch-none"],
  },
});

export const colorPickerAreaThumbVariants = tv({
  base: [
    "size-4.5",
    "rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(0,0,0,0.1)]",
    "outline-hidden ring-border/64",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

export const colorPickerInputSwatchVariants = tv({
  slots: {
    base: [
      "relative",
      "size-8",
      "shrink-0",
      "rounded-full border",
      "pointer-events-none overflow-hidden",
      "group-data-[size=lg]/input-group:size-5",
      "group-data-[size=md]/input-group:size-4",
      "group-data-[size=sm]/input-group:size-3.5",
      "group-data-disabled/color-input:opacity-64",
    ],
    grid: [
      "size-full rounded-[calc(var(--radius-sm)-0.5px)]",
      "bg-[linear-gradient(45deg,#e4e4e4_25%,transparent_25%),linear-gradient(-45deg,#e4e4e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e4e4e4_75%),linear-gradient(-45deg,transparent_75%,#e4e4e4_75%)]",
      "bg-position-[0_0,0_4px,4px_-4px,-4px_0] bg-size-(--spacing(2))",
    ],
    swatch: ["z-1 size-full"],
  },
});

export const colorPickerInline4Variants = tv({
  base: ["flex items-center gap-3"],
});

export const colorPickerInline5Variants = tv({
  base: ["flex flex-1 flex-col gap-2.5"],
});

export type ColorPickerVariantProps = VariantProps<typeof colorPickerVariants>;
export type ColorPickerVariants = ReturnType<typeof colorPickerVariants>;

export type ColorPickerControlVariantProps = VariantProps<typeof colorPickerControlVariants>;
export type ColorPickerControlVariants = ReturnType<typeof colorPickerControlVariants>;

export type ColorPickerInlineVariantProps = VariantProps<typeof colorPickerInlineVariants>;
export type ColorPickerInlineVariants = ReturnType<typeof colorPickerInlineVariants>;

export type ColorPickerContentVariantProps = VariantProps<typeof colorPickerContentVariants>;
export type ColorPickerContentVariants = ReturnType<typeof colorPickerContentVariants>;

export type ColorPickerViewVariantProps = VariantProps<typeof colorPickerViewVariants>;
export type ColorPickerViewVariants = ReturnType<typeof colorPickerViewVariants>;

export type ColorPickerChannelSliderVariantProps = VariantProps<
  typeof colorPickerChannelSliderVariants
>;
export type ColorPickerChannelSliderVariants = ReturnType<typeof colorPickerChannelSliderVariants>;
export type ColorPickerChannelSliderSlots = keyof ColorPickerChannelSliderVariants;

export type ColorPickerSwatchGroupVariantProps = VariantProps<
  typeof colorPickerSwatchGroupVariants
>;
export type ColorPickerSwatchGroupVariants = ReturnType<typeof colorPickerSwatchGroupVariants>;

export type ColorPickerSwatchTriggerVariantProps = VariantProps<
  typeof colorPickerSwatchTriggerVariants
>;
export type ColorPickerSwatchTriggerVariants = ReturnType<typeof colorPickerSwatchTriggerVariants>;

export type ColorPickerSwatchVariantProps = VariantProps<typeof colorPickerSwatchVariants>;
export type ColorPickerSwatchVariants = ReturnType<typeof colorPickerSwatchVariants>;

export type ColorPickerSwatchIndicatorVariantProps = VariantProps<
  typeof colorPickerSwatchIndicatorVariants
>;
export type ColorPickerSwatchIndicatorVariants = ReturnType<
  typeof colorPickerSwatchIndicatorVariants
>;

export type ColorPickerValueTextVariantProps = VariantProps<typeof colorPickerValueTextVariants>;
export type ColorPickerValueTextVariants = ReturnType<typeof colorPickerValueTextVariants>;

export type ColorPickerValueSwatchVariantProps = VariantProps<
  typeof colorPickerValueSwatchVariants
>;
export type ColorPickerValueSwatchVariants = ReturnType<typeof colorPickerValueSwatchVariants>;

export type ColorPickerAreaVariantProps = VariantProps<typeof colorPickerAreaVariants>;
export type ColorPickerAreaVariants = ReturnType<typeof colorPickerAreaVariants>;
export type ColorPickerAreaSlots = keyof ColorPickerAreaVariants;

export type ColorPickerAreaThumbVariantProps = VariantProps<typeof colorPickerAreaThumbVariants>;
export type ColorPickerAreaThumbVariants = ReturnType<typeof colorPickerAreaThumbVariants>;

export type ColorPickerInputSwatchVariantProps = VariantProps<
  typeof colorPickerInputSwatchVariants
>;
export type ColorPickerInputSwatchVariants = ReturnType<typeof colorPickerInputSwatchVariants>;
export type ColorPickerInputSwatchSlots = keyof ColorPickerInputSwatchVariants;

export type ColorPickerInline4VariantProps = VariantProps<typeof colorPickerInline4Variants>;
export type ColorPickerInline4Variants = ReturnType<typeof colorPickerInline4Variants>;

export type ColorPickerInline5VariantProps = VariantProps<typeof colorPickerInline5Variants>;
export type ColorPickerInline5Variants = ReturnType<typeof colorPickerInline5Variants>;
