import { ControlledSource as Controlled } from "./controlled";
import { CountdownSource as Countdown } from "./countdown";
import { CountdownDateSource as CountdownDate } from "./countdown-date";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSeparatorSource as CustomSeparator } from "./custom-separator";
import { DefaultSource as Default } from "./default";
import { IntervalSource as Interval } from "./interval";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { PomodoroSource as Pomodoro } from "./pomodoro";

export const imports = `import { Timer } from "@pisagor/react";`;

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
