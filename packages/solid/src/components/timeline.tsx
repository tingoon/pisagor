import { ark } from "@ark-ui/solid/factory";
import type {
  TimelineItemProps as BaseTimelineItemProps,
  TimelineProps as BaseTimelineRootProps,
} from "@pisagor/props";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
// #endregion

// #region Types
export interface TimelineRootProps
  extends ComponentProps<typeof ark.ol>,
    BaseTimelineRootProps {}

export interface TimelineItemProps
  extends ComponentProps<typeof ark.li>,
    BaseTimelineItemProps {}

export type TimelineIndicatorProps = ComponentProps<typeof ark.div>;
export type TimelineContentProps = ComponentProps<typeof ark.div>;
export type TimelineTitleProps = ComponentProps<typeof ark.div>;
export type TimelineDescriptionProps = ComponentProps<typeof ark.div>;
export type TimelineSeparatorProps = ComponentProps<typeof ark.div>;

export interface TimelinePresetItem {
  id?: string;
  title: JSX.Element;
  description?: JSX.Element;
  indicator?: JSX.Element;
}

export interface TimelineProps extends Omit<TimelineRootProps, "children"> {
  items?: TimelinePresetItem[];
}
// #endregion

// #region Parts
export function TimelineRoot(props: TimelineRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "recipe", "class"]);
  const orientation = () => local.orientation ?? "vertical";

  return (
    <ark.ol
      {...rest}
      class={(local.recipe ?? timelineRecipe)({
        class: local.class,
        orientation: orientation(),
      })}
      data-orientation={orientation()}
      data-part="root"
      data-scope="timeline"
    />
  );
}

export const TimelineItem: Component<TimelineItemProps> = withProvider(ark.li, {
  defaultProps: { "data-part": "item" },
  name: "Item",
  slot: "base",
});

export const TimelineIndicator = withContext(ark.div, { name: "Indicator" });

export const TimelineSeparator = withContext(ark.div, {
  defaultProps: { "aria-hidden": "true" },
  name: "Separator",
});

export const TimelineContent = withContext(ark.div, { name: "Content" });

export const TimelineTitle = withContext(ark.div, { name: "Title" });

export const TimelineDescription = withContext(ark.div, {
  name: "Description",
});
// #endregion

// #region Shorthand
export function TimelineShorthand(props: TimelineProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <TimelineRoot {...rest}>
      <For each={local.items ?? []}>
        {(item) => (
          <TimelineItem>
            <TimelineSeparator />
            <TimelineIndicator>{item.indicator}</TimelineIndicator>
            <TimelineContent>
              <TimelineTitle>{item.title}</TimelineTitle>
              <Show when={item.description}>
                <TimelineDescription>{item.description}</TimelineDescription>
              </Show>
            </TimelineContent>
          </TimelineItem>
        )}
      </For>
    </TimelineRoot>
  );
}
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
