import Controlled from "./controlled.vue?raw";
import Countdown from "./countdown.vue?raw";
import CountdownDate from "./countdown-date.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSeparator from "./custom-separator.vue?raw";
import Default from "./default.vue?raw";
import Interval from "./interval.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Pomodoro from "./pomodoro.vue?raw";

export const imports = `import { Timer } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  Countdown,
  CountdownDate,
  CustomRecipe,
  CustomSeparator,
  Default,
  Interval,
  OrientationHorizontal,
  OrientationVertical,
  Pomodoro,
} as const;
