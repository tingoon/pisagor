import type {
  TimelineContract,
  TimelineItemContract,
  TimelineItemRootContract,
  TimelinePresetItem as BaseTimelinePresetItem,
  TimelineRootContract,
} from "@pisagor/contracts";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

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
}: ComponentProps<"ol"> & TimelineRootContract) {
  return (
    <ol
      {...rest}
      className={recipe({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="timeline"
    />
  );
}

export const TimelineItem = withProvider<
  ComponentProps<"li"> & TimelineItemRootContract
>("li", {
  name: "Item",
  slot: "base",
});

export const TimelineIndicator = withContext<ComponentProps<"div">>("div", {
  name: "Indicator",
});

export const TimelineSeparator = withContext<ComponentProps<"div">>("div", {
  defaultProps: {
    "aria-hidden": "true",
  },
  name: "Separator",
});

export const TimelineContent = withContext<ComponentProps<"div">>("div", {
  name: "Content",
});

export const TimelineTitle = withContext<ComponentProps<"div">>("div", {
  name: "Title",
});

export const TimelineDescription = withContext<ComponentProps<"div">>("div", {
  name: "Description",
});
// #endregion

// #region Types
export type TimelineRootProps = ComponentProps<typeof TimelineRoot>;
export type TimelineItemRootProps = ComponentProps<typeof TimelineItem>;
export type TimelineItemProps = TimelineItemRootProps & TimelineItemContract;
export type TimelineIndicatorProps = ComponentProps<typeof TimelineIndicator>;
export type TimelineContentProps = ComponentProps<typeof TimelineContent>;
export type TimelineTitleProps = ComponentProps<typeof TimelineTitle>;
export type TimelineDescriptionProps = ComponentProps<
  typeof TimelineDescription
>;
export type TimelineSeparatorProps = ComponentProps<typeof TimelineSeparator>;

export interface TimelinePresetItem extends Omit<
  BaseTimelinePresetItem,
  "title" | "description" | "indicator"
> {
  title: ReactNode;
  description?: ReactNode;
  indicator?: ReactNode;
}

export interface TimelineProps
  extends Omit<TimelineRootProps, "children">, TimelineContract {
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
