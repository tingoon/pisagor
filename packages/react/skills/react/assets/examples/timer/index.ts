import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import countdownRaw from "./countdown.tsx?raw";
import countdown_dateRaw from "./countdown-date.tsx?raw";
import custom_separatorRaw from "./custom-separator.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import intervalRaw from "./interval.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import pomodoroRaw from "./pomodoro.tsx?raw";

export const imports = `import { Timer } from "@pisagor/react/timer";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Countdown: stripTsxExample(countdownRaw),
  CountdownDate: stripTsxExample(countdown_dateRaw),
  CustomSeparator: stripTsxExample(custom_separatorRaw),
  Default: stripTsxExample(defaultRaw),
  Interval: stripTsxExample(intervalRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  Pomodoro: stripTsxExample(pomodoroRaw),
} as const;

export { Controlled } from "./controlled";
export { Countdown } from "./countdown";
export { CountdownDate } from "./countdown-date";
export { CustomSeparator } from "./custom-separator";
export { Default } from "./default";
export { Interval } from "./interval";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { Pomodoro } from "./pomodoro";
