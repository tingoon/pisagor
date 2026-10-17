import BookedDates from "./booked-dates.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomCellSize from "./custom-cell-size.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import FixedWeeks from "./fixed-weeks.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import MinMax from "./min-max.svelte?raw";
import MonthYearSelector from "./month-year-selector.svelte?raw";
import MultipleMonths from "./multiple-months.svelte?raw";
import Presets from "./presets.svelte?raw";
import Range from "./range.svelte?raw";
import SelectToday from "./select-today.svelte?raw";

export const imports = `import { Calendar } from "@pisagor/svelte";`;

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
