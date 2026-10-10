import booked_datesRaw from "./booked-dates.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_cell_sizeRaw from "./custom-cell-size.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
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
  BookedDates: booked_datesRaw,
  Controlled: controlledRaw,
  CustomCellSize: custom_cell_sizeRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  FixedWeeks: fixed_weeksRaw,
  Invalid: invalidRaw,
  MinMax: min_maxRaw,
  MonthYearSelector: month_year_selectorRaw,
  MultipleMonths: multiple_monthsRaw,
  Presets: presetsRaw,
  Range: rangeRaw,
  SelectToday: select_todayRaw,
} as const;
