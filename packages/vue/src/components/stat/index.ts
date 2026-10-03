import {
  StatDescription,
  StatLabel,
  StatRoot,
  StatShorthand,
  StatTrend,
  StatValue,
} from "./stat";

export type {
  StatProps,
  StatTrendProps,
} from "./stat";

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
