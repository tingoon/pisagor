import booked_datesRaw from "./booked-dates.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_cell_sizeRaw from "./custom-cell-size.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import fixed_weeksRaw from "./fixed-weeks.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import month_year_selectorRaw from "./month-year-selector.vue?raw";
import multiple_monthsRaw from "./multiple-months.vue?raw";
import presetsRaw from "./presets.vue?raw";
import rangeRaw from "./range.vue?raw";
import select_todayRaw from "./select-today.vue?raw";

export const imports = `import { Calendar } from "@pisagor/vue";`;

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
