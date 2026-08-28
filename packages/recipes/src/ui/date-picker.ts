import { tv, type VariantProps } from "tailwind-variants";

export const datePickerVariants = tv({
  slots: {
    content: [
      "[--cell-size:--spacing(8)]",
      "z-[calc(var(--z-popover)+var(--layer-index,0))]",
      "w-fit min-w-72",
      "p-3",
      "bg-popover",
      "text-popover-foreground",
      "rounded-xl border shadow-lg/5",
      "outline-hidden",
      "origin-(--transform-origin)",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
      "motion-reduce:animate-none!",
    ],
    control: ["flex w-fit items-center gap-1"],
    icon: "text-muted-foreground",
    timer: [
      "[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
    ],
    trigger: [
      "justify-start",
      "text-left data-placeholder-shown:[&>span]:text-muted-foreground",
      "active:scale-100",
      "[&_svg:not([class*='text-'])]:opacity-64",
    ],
    valueText: ["font-medium text-sm"],
  },
});

export type DatePickerVariantProps = VariantProps<typeof datePickerVariants>;
export type DatePickerVariants = ReturnType<typeof datePickerVariants>;
export type DatePickerSlots = keyof DatePickerVariants;
