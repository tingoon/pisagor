import TimelineContent from "./timeline-content.svelte";
import TimelineDescription from "./timeline-description.svelte";
import TimelineIndicator from "./timeline-indicator.svelte";
import TimelineItem from "./timeline-item.svelte";
import TimelineRoot from "./timeline-root.svelte";
import TimelineSeparator from "./timeline-separator.svelte";
import TimelineShorthand from "./timeline-shorthand.svelte";
import TimelineTitle from "./timeline-title.svelte";

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
