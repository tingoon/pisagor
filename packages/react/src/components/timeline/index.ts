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

export type {
  TimelineContentProps,
  TimelineDescriptionProps,
  TimelineIndicatorProps,
  TimelineItemProps,
  TimelinePresetItem,
  TimelineProps,
  TimelineRootProps,
  TimelineSeparatorProps,
  TimelineTitleProps,
} from "./timeline";

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
