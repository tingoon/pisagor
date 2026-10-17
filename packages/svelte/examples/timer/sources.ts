import Controlled from "./controlled.svelte?raw";
import Countdown from "./countdown.svelte?raw";
import CountdownDate from "./countdown-date.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSeparator from "./custom-separator.svelte?raw";
import Default from "./default.svelte?raw";
import Interval from "./interval.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Pomodoro from "./pomodoro.svelte?raw";

export const imports = `import { Timer } from "@pisagor/svelte";`;

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
