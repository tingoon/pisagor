import { BookedDatesSource as BookedDates } from "./booked-dates";
import { ControlledSource as Controlled } from "./controlled";
import { CustomCellSizeSource as CustomCellSize } from "./custom-cell-size";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { FixedWeeksSource as FixedWeeks } from "./fixed-weeks";
import { InvalidSource as Invalid } from "./invalid";
import { MinMaxSource as MinMax } from "./min-max";
import { MonthYearSelectorSource as MonthYearSelector } from "./month-year-selector";
import { MultipleMonthsSource as MultipleMonths } from "./multiple-months";
import { PresetsSource as Presets } from "./presets";
import { RangeSource as Range } from "./range";
import { SelectTodaySource as SelectToday } from "./select-today";

export const imports = `import { Calendar } from "@pisagor/solid";`;

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
