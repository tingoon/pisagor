import type {
  TimelineItemRootContract,
  TimelineItemContract,
  TimelinePresetItem as BaseTimelinePresetItem,
  TimelineRootContract,
  TimelineContract,
} from "@pisagor/contracts";
import { timelineItemRecipe, timelineRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
// #endregion

// #region Types
export interface TimelineRootProps
  extends ComponentProps<"ol">, Omit<TimelineRootContract, "items"> {}

export interface TimelineItemProps
  extends
    ComponentProps<"li">,
    TimelineItemRootContract,
    TimelineItemContract {}

export type TimelineIndicatorProps = ComponentProps<"div">;
export type TimelineContentProps = ComponentProps<"div">;
export type TimelineTitleProps = ComponentProps<"div">;
export type TimelineDescriptionProps = ComponentProps<"div">;
export type TimelineSeparatorProps = ComponentProps<"div">;

export interface TimelinePresetItem extends Omit<
  BaseTimelinePresetItem,
  "title" | "description" | "indicator"
> {
  title: JSX.Element;
  description?: JSX.Element;
  indicator?: JSX.Element;
}

export interface TimelineProps
  extends
    Omit<TimelineRootProps, "children" | "recipe">,
    Omit<TimelineRootContract, "items">,
    TimelineContract {
  items?: TimelinePresetItem[];
}
// #endregion

// #region Parts
export function TimelineRoot(props: TimelineRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "recipe", "class"]);
  const orientation = () => local.orientation ?? "vertical";

  return (
    <ol
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

export const TimelineItem: Component<TimelineItemProps> = withProvider("li", {
  defaultProps: { "data-part": "item" },
  name: "Item",
  slot: "base",
});

export const TimelineIndicator = withContext("div", { name: "Indicator" });

export const TimelineSeparator = withContext("div", {
  defaultProps: { "aria-hidden": "true" },
  name: "Separator",
});

export const TimelineContent = withContext("div", { name: "Content" });

export const TimelineTitle = withContext("div", { name: "Title" });

export const TimelineDescription = withContext("div", {
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
