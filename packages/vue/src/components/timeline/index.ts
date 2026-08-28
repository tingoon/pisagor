import {
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineShorthand,
  TimelineTitle,
} from "./timeline";

export type { TimelinePresetItem, TimelineProps } from "./timeline";

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
