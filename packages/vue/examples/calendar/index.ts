import { stripVueExample } from "@pisagor/utils";
import booked_datesRaw from "./booked-dates.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_cell_sizeRaw from "./custom-cell-size.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import fixed_weeksRaw from "./fixed-weeks.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import month_year_selectorRaw from "./month-year-selector.vue?raw";
import multiple_monthsRaw from "./multiple-months.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import presetsRaw from "./presets.vue?raw";
import rangeRaw from "./range.vue?raw";
import select_todayRaw from "./select-today.vue?raw";

export const imports = `import { Calendar } from "@pisagor/vue/calendar";`;

export const sources = {
  BookedDates: stripVueExample(booked_datesRaw),
  Controlled: stripVueExample(controlledRaw),
  CustomCellSize: stripVueExample(custom_cell_sizeRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  FixedWeeks: stripVueExample(fixed_weeksRaw),
  Invalid: stripVueExample(invalidRaw),
  MinMax: stripVueExample(min_maxRaw),
  MonthYearSelector: stripVueExample(month_year_selectorRaw),
  MultipleMonths: stripVueExample(multiple_monthsRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Presets: stripVueExample(presetsRaw),
  Range: stripVueExample(rangeRaw),
  SelectToday: stripVueExample(select_todayRaw),
} as const;

export { default as BookedDates } from "./booked-dates.vue";
export { default as Controlled } from "./controlled.vue";
export { default as CustomCellSize } from "./custom-cell-size.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as FixedWeeks } from "./fixed-weeks.vue";
export { default as Invalid } from "./invalid.vue";
export { default as MinMax } from "./min-max.vue";
export { default as MonthYearSelector } from "./month-year-selector.vue";
export { default as MultipleMonths } from "./multiple-months.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Presets } from "./presets.vue";
export { default as Range } from "./range.vue";
export { default as SelectToday } from "./select-today.vue";
