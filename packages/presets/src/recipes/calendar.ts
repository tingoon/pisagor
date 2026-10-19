import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const calendarRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "select" }),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: ["[--cell-size:--spacing(9)]", "w-fit"],
    control: ["inline-flex items-center gap-2"],
    label: ["text-sm font-medium"],
    nextTrigger: "ms-auto",
    prevTrigger: "me-auto",
    rangeText: ["text-sm font-medium"],
    select: [
      ...formControlShellBase,
      "appearance-none",
      "w-full min-w-0",
      "ps-2.5 pe-8",
      "text-sm select-none",
      "duration-fast transition-colors ease-out",
      "outline-hidden",
      "[&:has(option[value='']:checked)]:text-muted-foreground/64",
      "disabled:pointer-events-none disabled:cursor-not-allowed",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32",
      "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-0.75 aria-invalid:ring-destructive/24",
      "motion-reduce:transition-none!",
    ],
    selectIcon: [
      "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
      "size-4",
      "text-muted-foreground select-none",
      "pointer-events-none",
    ],
    selectWrapper: ["relative w-fit has-[select:disabled]:opacity-64"],
    table: ["group", "w-full min-w-60", "border-collapse"],
    tableHeader: [
      "h-(--cell-size) w-full",
      "flex items-center justify-center",
      "text-muted-foreground/64 text-xs font-medium select-none",
      "rounded-lg",
    ],
    tableRow: ["mt-1 flex w-full"],
    view: ["flex flex-col gap-1"],
    viewControl: ["relative", "h-auto w-full", "flex items-center gap-1.5"],
  },
  variants: {
    size: {
      lg: { select: "h-9" },
      md: { select: "h-8" },
      sm: { select: "h-7" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export const calendarTableCellRecipe = tv({
  slots: {
    base: [
      "relative",
      "h-(--cell-size) w-full",
      "text-center select-none",
      "[&:first-child[aria-selected=true]_div]:rounded-s-lg",
      "[&:last-child[aria-selected=true]_div]:rounded-e-lg",
    ],
    trigger: [
      "inline-flex items-center justify-center gap-1",
      "h-(--cell-size) w-full min-w-(--cell-size) data-[view=day]:h-(--cell-size)",
      "text-foreground text-base leading-none font-normal whitespace-nowrap select-none sm:text-sm",
      "rounded-lg border border-transparent",
      "duration-fast transition ease-out",
      "hover:bg-accent hover:text-accent-foreground",
      "active:scale-97",
      "data-today:data-selected:after:bg-background data-today:after:bg-primary data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full",
      "data-focus:border-primary data-focus:bg-accent/30 data-focus:text-primary data-focus:ring-0.75 data-focus:ring-ring/32",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32 outline-hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-64",
      "data-[view=day]:data-in-range:not-[data-selected]:bg-primary/10 data-[view=day]:data-in-range:rounded-none",
      "data-selected:bg-primary! data-selected:text-primary-foreground!",
      "data-hover-range-start:rounded-s-lg! data-range-start:rounded-s-lg!",
      "data-hover-range-end:rounded-e-lg! data-range-end:rounded-e-lg!",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
  },
});

export type CalendarRecipeFn = typeof calendarRecipe;
export type CalendarRecipe = ReturnType<CalendarRecipeFn>;
export type CalendarRecipeSlot = keyof CalendarRecipe;
export type CalendarVariantProps = VariantProps<CalendarRecipeFn>;

export type CalendarTableCellRecipeFn = typeof calendarTableCellRecipe;
export type CalendarTableCellRecipe = ReturnType<CalendarTableCellRecipeFn>;
export type CalendarTableCellRecipeSlot = keyof CalendarTableCellRecipe;
