import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import countdownRaw from "./countdown.svelte?raw";
import countdown_dateRaw from "./countdown-date.svelte?raw";
import custom_separatorRaw from "./custom-separator.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import intervalRaw from "./interval.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import pomodoroRaw from "./pomodoro.svelte?raw";

export const imports = `import { Timer } from "@pisagor/svelte/timer";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Countdown: stripSvelteExample(countdownRaw),
  CountdownDate: stripSvelteExample(countdown_dateRaw),
  CustomSeparator: stripSvelteExample(custom_separatorRaw),
  Default: stripSvelteExample(defaultRaw),
  Interval: stripSvelteExample(intervalRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  Pomodoro: stripSvelteExample(pomodoroRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Countdown } from "./countdown.svelte";
export { default as CountdownDate } from "./countdown-date.svelte";
export { default as CustomSeparator } from "./custom-separator.svelte";
export { default as Default } from "./default.svelte";
export { default as Interval } from "./interval.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as Pomodoro } from "./pomodoro.svelte";
