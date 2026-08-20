import { tv, type VariantProps } from "tailwind-variants";

export const calendarVariants = tv({
  base: ["[--cell-size:--spacing(9)]", "w-fit"],
});

export const calendarRangeTextVariants = tv({
  base: ["font-medium text-sm"],
});

export const calendarSelectWrapperVariants = tv({
  slots: {
    base: ["relative w-fit has-[select:disabled]:opacity-64"],
    icon: [
      "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
      "size-4",
      "select-none text-muted-foreground",
      "pointer-events-none",
    ],
  },
});

export const calendarViewVariants = tv({
  base: ["flex flex-col gap-1"],
});

export const calendarViewControlVariants = tv({
  base: ["relative", "h-auto w-full", "flex items-center gap-1.5"],
});

export const calendarTableVariants = tv({
  base: ["group", "w-full min-w-60", "border-collapse"],
});

export const calendarTableRowVariants = tv({
  base: ["mt-1 flex w-full"],
});

export const calendarTableHeaderVariants = tv({
  base: [
    "h-(--cell-size) w-full",
    "flex items-center justify-center",
    "select-none font-medium text-muted-foreground/64 text-xs",
    "rounded-lg",
  ],
});

export const calendarTableCellVariants = tv({
  slots: {
    base: [
      "relative",
      "h-(--cell-size) w-full",
      "select-none text-center",
      "[&:first-child[aria-selected=true]_div]:rounded-s-lg",
      "[&:last-child[aria-selected=true]_div]:rounded-e-lg",
    ],
    trigger: [
      "inline-flex items-center justify-center gap-1",
      "h-(--cell-size) w-full min-w-(--cell-size) data-[view=day]:h-(--cell-size)",
      "select-none whitespace-nowrap font-normal text-base text-foreground leading-none sm:text-sm",
      "rounded-lg border border-transparent",
      "hover:bg-accent hover:text-accent-foreground",
      "data-today:data-selected:after:bg-background data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary",
      "data-focus:border-primary data-focus:bg-accent/30 data-focus:text-primary data-focus:ring-[3px] data-focus:ring-ring/32",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-64",
      "data-[view=day]:data-in-range:rounded-none data-[view=day]:data-in-range:not-[data-selected]:bg-primary/10",
      "data-selected:bg-primary! data-selected:text-primary-foreground!",
      "data-hover-range-start:rounded-s-lg! data-range-start:rounded-s-lg!",
      "data-hover-range-end:rounded-e-lg! data-range-end:rounded-e-lg!",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
  },
});

export const calendarControlVariants = tv({
  base: ["inline-flex items-center gap-2"],
});

export const calendarLabelVariants = tv({
  base: ["font-medium text-sm"],
});

export const calendarInlineVariants = tv({
  base: "me-auto",
});

export const calendarInline2Variants = tv({
  base: "rtl:rotate-180",
});

export const calendarInline3Variants = tv({
  base: "ms-auto",
});

export const calendarInline4Variants = tv({
  base: "rtl:rotate-180",
});

export const calendarSelectLayoutVariants = tv({
  base: [
    "appearance-none",
    "w-full min-w-0",
    "ps-2.5 pe-8",
    "select-none text-sm",
    "transition-colors",
    "outline-hidden",
    "[&:has(option[value='']:checked)]:text-muted-foreground/64",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20",
    "motion-reduce:transition-none!",
  ],
});

export type CalendarVariantProps = VariantProps<typeof calendarVariants>;
export type CalendarVariants = ReturnType<typeof calendarVariants>;

export type CalendarRangeTextVariantProps = VariantProps<typeof calendarRangeTextVariants>;
export type CalendarRangeTextVariants = ReturnType<typeof calendarRangeTextVariants>;

export type CalendarSelectWrapperVariantProps = VariantProps<typeof calendarSelectWrapperVariants>;
export type CalendarSelectWrapperVariants = ReturnType<typeof calendarSelectWrapperVariants>;
export type CalendarSelectWrapperSlots = keyof CalendarSelectWrapperVariants;

export type CalendarViewVariantProps = VariantProps<typeof calendarViewVariants>;
export type CalendarViewVariants = ReturnType<typeof calendarViewVariants>;

export type CalendarViewControlVariantProps = VariantProps<typeof calendarViewControlVariants>;
export type CalendarViewControlVariants = ReturnType<typeof calendarViewControlVariants>;

export type CalendarTableVariantProps = VariantProps<typeof calendarTableVariants>;
export type CalendarTableVariants = ReturnType<typeof calendarTableVariants>;

export type CalendarTableRowVariantProps = VariantProps<typeof calendarTableRowVariants>;
export type CalendarTableRowVariants = ReturnType<typeof calendarTableRowVariants>;

export type CalendarTableHeaderVariantProps = VariantProps<typeof calendarTableHeaderVariants>;
export type CalendarTableHeaderVariants = ReturnType<typeof calendarTableHeaderVariants>;

export type CalendarTableCellVariantProps = VariantProps<typeof calendarTableCellVariants>;
export type CalendarTableCellVariants = ReturnType<typeof calendarTableCellVariants>;
export type CalendarTableCellSlots = keyof CalendarTableCellVariants;

export type CalendarControlVariantProps = VariantProps<typeof calendarControlVariants>;
export type CalendarControlVariants = ReturnType<typeof calendarControlVariants>;

export type CalendarLabelVariantProps = VariantProps<typeof calendarLabelVariants>;
export type CalendarLabelVariants = ReturnType<typeof calendarLabelVariants>;

export type CalendarInlineVariantProps = VariantProps<typeof calendarInlineVariants>;
export type CalendarInlineVariants = ReturnType<typeof calendarInlineVariants>;

export type CalendarInline2VariantProps = VariantProps<typeof calendarInline2Variants>;
export type CalendarInline2Variants = ReturnType<typeof calendarInline2Variants>;

export type CalendarInline3VariantProps = VariantProps<typeof calendarInline3Variants>;
export type CalendarInline3Variants = ReturnType<typeof calendarInline3Variants>;

export type CalendarInline4VariantProps = VariantProps<typeof calendarInline4Variants>;
export type CalendarInline4Variants = ReturnType<typeof calendarInline4Variants>;

export type CalendarSelectLayoutVariantProps = VariantProps<typeof calendarSelectLayoutVariants>;
export type CalendarSelectLayoutVariants = ReturnType<typeof calendarSelectLayoutVariants>;
