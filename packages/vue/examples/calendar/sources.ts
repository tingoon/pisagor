import BookedDates from "./booked-dates.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomCellSize from "./custom-cell-size.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import FixedWeeks from "./fixed-weeks.vue?raw";
import Invalid from "./invalid.vue?raw";
import MinMax from "./min-max.vue?raw";
import MonthYearSelector from "./month-year-selector.vue?raw";
import MultipleMonths from "./multiple-months.vue?raw";
import Presets from "./presets.vue?raw";
import Range from "./range.vue?raw";
import SelectToday from "./select-today.vue?raw";

export const imports = `import { Calendar } from "@pisagor/vue";`;

export const sources = {
  BookedDates,
  Controlled,
  CustomCellSize,
  CustomRecipe,
  Default,
  Disabled,
  FixedWeeks,
  Invalid,
  MinMax,
  MonthYearSelector,
  MultipleMonths,
  Presets,
  Range,
  SelectToday,
} as const;
