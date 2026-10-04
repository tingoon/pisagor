import controlledRaw from "./controlled.vue?raw";
import countdownRaw from "./countdown.vue?raw";
import countdown_dateRaw from "./countdown-date.vue?raw";
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
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  Interval: intervalRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Pomodoro: pomodoroRaw,
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Countdown } from "./countdown.vue";
export { default as CountdownDate } from "./countdown-date.vue";
export { default as CustomSeparator } from "./custom-separator.vue";
export { default as Default } from "./default.vue";
export { default as Interval } from "./interval.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as Pomodoro } from "./pomodoro.vue";
