import StatShorthand from "./stat.astro";
import StatDescription from "./stat-description.astro";
import StatLabel from "./stat-label.astro";
import StatRoot from "./stat-root.astro";
import StatTrend from "./stat-trend.astro";
import StatValue from "./stat-value.astro";

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
