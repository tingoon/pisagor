import StatShorthand from "./stat.svelte";
import StatDescription from "./stat-description.svelte";
import StatLabel from "./stat-label.svelte";
import StatRoot from "./stat-root.svelte";
import StatTrend from "./stat-trend.svelte";
import StatValue from "./stat-value.svelte";

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
