import { tv, type VariantProps } from "tailwind-variants";

export const calendarRecipe = tv({
  slots: {
    base: ["[--cell-size:--spacing(9)]", "w-fit"],
    control: ["inline-flex items-center gap-2"],
    label: ["font-medium text-sm"],
    nextIcon: "rtl:rotate-180",
    nextTrigger: "ms-auto",
    prevIcon: "rtl:rotate-180",
    prevTrigger: "me-auto",
    rangeText: ["font-medium text-sm"],
    select: [
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
    selectIcon: [
      "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
      "size-4",
      "select-none text-muted-foreground",
      "pointer-events-none",
    ],
    selectWrapper: ["relative w-fit has-[select:disabled]:opacity-64"],
    table: ["group", "w-full min-w-60", "border-collapse"],
    tableHeader: [
      "h-(--cell-size) w-full",
      "flex items-center justify-center",
      "select-none font-medium text-muted-foreground/64 text-xs",
      "rounded-lg",
    ],
    tableRow: ["mt-1 flex w-full"],
    view: ["flex flex-col gap-1"],
    viewControl: ["relative", "h-auto w-full", "flex items-center gap-1.5"],
  },
});

export const calendarTableCellRecipe = tv({
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

export type CalendarVariantProps = VariantProps<typeof calendarRecipe>;
export type CalendarRecipe = ReturnType<typeof calendarRecipe>;
export type CalendarRecipeSlot = keyof CalendarRecipe;

export type CalendarTableCellVariantProps = VariantProps<typeof calendarTableCellRecipe>;
export type CalendarTableCellRecipe = ReturnType<typeof calendarTableCellRecipe>;
export type CalendarTableCellRecipeSlot = keyof CalendarTableCellRecipe;
