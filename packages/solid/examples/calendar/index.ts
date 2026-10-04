import { stripTsxExample } from "@pisagor/utils";
import booked_datesRaw from "./booked-dates.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_cell_sizeRaw from "./custom-cell-size.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import fixed_weeksRaw from "./fixed-weeks.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import min_maxRaw from "./min-max.tsx?raw";
import month_year_selectorRaw from "./month-year-selector.tsx?raw";
import multiple_monthsRaw from "./multiple-months.tsx?raw";
import presetsRaw from "./presets.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import select_todayRaw from "./select-today.tsx?raw";

export const imports = `import { Calendar } from "@pisagor/solid";`;

export const sources = {
  BookedDates: stripTsxExample(booked_datesRaw),
  Controlled: stripTsxExample(controlledRaw),
  CustomCellSize: stripTsxExample(custom_cell_sizeRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  FixedWeeks: stripTsxExample(fixed_weeksRaw),
  Invalid: stripTsxExample(invalidRaw),
  MinMax: stripTsxExample(min_maxRaw),
  MonthYearSelector: stripTsxExample(month_year_selectorRaw),
  MultipleMonths: stripTsxExample(multiple_monthsRaw),
  Presets: stripTsxExample(presetsRaw),
  Range: stripTsxExample(rangeRaw),
  SelectToday: stripTsxExample(select_todayRaw),
} as const;

export * from "./booked-dates";
export * from "./controlled";
export * from "./custom-cell-size";
export * from "./default";
export * from "./disabled";
export * from "./fixed-weeks";
export * from "./invalid";
export * from "./min-max";
export * from "./month-year-selector";
export * from "./multiple-months";
export * from "./presets";
export * from "./range";
export * from "./select-today";
