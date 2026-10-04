import { stripSvelteExample } from "@pisagor/utils";
import booked_datesRaw from "./booked-dates.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_cell_sizeRaw from "./custom-cell-size.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import fixed_weeksRaw from "./fixed-weeks.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import min_maxRaw from "./min-max.svelte?raw";
import month_year_selectorRaw from "./month-year-selector.svelte?raw";
import multiple_monthsRaw from "./multiple-months.svelte?raw";
import presetsRaw from "./presets.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import select_todayRaw from "./select-today.svelte?raw";

export const imports = `import { Calendar } from "@pisagor/svelte";`;

export const sources = {
  BookedDates: stripSvelteExample(booked_datesRaw),
  Controlled: stripSvelteExample(controlledRaw),
  CustomCellSize: stripSvelteExample(custom_cell_sizeRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  FixedWeeks: stripSvelteExample(fixed_weeksRaw),
  Invalid: stripSvelteExample(invalidRaw),
  MinMax: stripSvelteExample(min_maxRaw),
  MonthYearSelector: stripSvelteExample(month_year_selectorRaw),
  MultipleMonths: stripSvelteExample(multiple_monthsRaw),
  Presets: stripSvelteExample(presetsRaw),
  Range: stripSvelteExample(rangeRaw),
  SelectToday: stripSvelteExample(select_todayRaw),
} as const;

export { default as BookedDates } from "./booked-dates.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as CustomCellSize } from "./custom-cell-size.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as FixedWeeks } from "./fixed-weeks.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as MinMax } from "./min-max.svelte";
export { default as MonthYearSelector } from "./month-year-selector.svelte";
export { default as MultipleMonths } from "./multiple-months.svelte";
export { default as Presets } from "./presets.svelte";
export { default as Range } from "./range.svelte";
export { default as SelectToday } from "./select-today.svelte";
