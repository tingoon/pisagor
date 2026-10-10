import controlledRaw from "./controlled.vue?raw";
import countdownRaw from "./countdown.vue?raw";
import countdown_dateRaw from "./countdown-date.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_separatorRaw from "./custom-separator.vue?raw";
import defaultRaw from "./default.vue?raw";
import intervalRaw from "./interval.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import pomodoroRaw from "./pomodoro.vue?raw";

export const imports = `import { Timer } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  Countdown: countdownRaw,
  CountdownDate: countdown_dateRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  Interval: intervalRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Pomodoro: pomodoroRaw,
} as const;
