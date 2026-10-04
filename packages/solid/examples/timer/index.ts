import controlledRaw from "./controlled.tsx?raw";
import countdownRaw from "./countdown.tsx?raw";
import countdown_dateRaw from "./countdown-date.tsx?raw";
import custom_separatorRaw from "./custom-separator.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import intervalRaw from "./interval.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import pomodoroRaw from "./pomodoro.tsx?raw";

export const imports = `import { Timer } from "@pisagor/solid";`;

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

export * from "./controlled";
export * from "./countdown";
export * from "./countdown-date";
export * from "./custom-separator";
export * from "./default";
export * from "./interval";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./pomodoro";
