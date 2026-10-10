import { ark } from "@ark-ui/react/factory";
import type {
  TimelineItemProps as BaseTimelineItemProps,
  TimelineProps as BaseTimelineRootProps,
} from "@pisagor/props";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
// #endregion

// #region Parts
export function TimelineRoot({
  orientation = "vertical",
  recipe = timelineRecipe,
  className,
  ...rest
}: ComponentProps<typeof ark.ol> & BaseTimelineRootProps) {
  return (
    <ark.ol
      {...rest}
      className={recipe({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="timeline"
    />
  );
}

export const TimelineItem = withProvider(ark.li, {
  defaultProps: {
    "data-part": "item",
  },
  name: "Item",
  slot: "base",
}) as FunctionComponent<ComponentProps<typeof ark.li> & BaseTimelineItemProps>;

export const TimelineIndicator = withContext(ark.div, {
  name: "Indicator",
  slot: "indicator",
});

export const TimelineSeparator = withContext(ark.div, {
  defaultProps: {
    "aria-hidden": "true",
  },
  name: "Separator",
  slot: "separator",
});

export const TimelineContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const TimelineTitle = withContext(ark.div, {
  name: "Title",
  slot: "title",
});

export const TimelineDescription = withContext(ark.div, {
  name: "Description",
  slot: "description",
});
// #endregion

// #region Types
export type TimelineRootProps = ComponentProps<typeof TimelineRoot>;
export type TimelineItemProps = ComponentProps<typeof TimelineItem>;
export type TimelineIndicatorProps = ComponentProps<typeof TimelineIndicator>;
export type TimelineContentProps = ComponentProps<typeof TimelineContent>;
export type TimelineTitleProps = ComponentProps<typeof TimelineTitle>;
export type TimelineDescriptionProps = ComponentProps<
  typeof TimelineDescription
>;
export type TimelineSeparatorProps = ComponentProps<typeof TimelineSeparator>;

export interface TimelinePresetItem {
  /** Stable key for the item when title is not a string. */
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  indicator?: ReactNode;
}

export interface TimelineProps extends Omit<TimelineRootProps, "children"> {
  items?: TimelinePresetItem[];
}
// #endregion

// #region Shorthand
export function TimelineShorthand({ items = [], ...rest }: TimelineProps) {
  return (
    <TimelineRoot {...rest}>
      {items.map((item, index) => {
        const key =
          item.id ??
          (typeof item.title === "string" || typeof item.title === "number"
            ? String(item.title)
            : `timeline-item-${index}`);

        return (
          <TimelineItem key={key}>
            <TimelineSeparator />

            <TimelineIndicator>{item.indicator}</TimelineIndicator>

            <TimelineContent>
              <TimelineTitle>{item.title}</TimelineTitle>

              {item.description ? (
                <TimelineDescription>{item.description}</TimelineDescription>
              ) : null}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </TimelineRoot>
  );
}

TimelineRoot.displayName = "Timeline.Root";
TimelineShorthand.displayName = "Timeline";
// #endregion

export const Timeline = Object.assign(TimelineShorthand, {
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle,
});
