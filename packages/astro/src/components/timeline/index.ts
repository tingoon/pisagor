import TimelineShorthand from "./timeline.astro";
import TimelineContent from "./timeline-content.astro";
import TimelineDescription from "./timeline-description.astro";
import TimelineIndicator from "./timeline-indicator.astro";
import TimelineItem from "./timeline-item.astro";
import TimelineRoot from "./timeline-root.astro";
import TimelineSeparator from "./timeline-separator.astro";
import TimelineTitle from "./timeline-title.astro";

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
