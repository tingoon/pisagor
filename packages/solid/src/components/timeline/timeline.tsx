import { ark } from "@ark-ui/solid/factory";
import {
  type TimelineVariantProps,
  timelineItemRecipe,
  timelineRecipe,
} from "@pisagor/recipes/timeline";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { TimelineItemContext, useTimelineItem } from "./timeline.context";

export interface TimelineRootProps extends ComponentProps<typeof ark.ol>, TimelineVariantProps {
  recipe?: typeof timelineRecipe;
}

export interface TimelineItemProps extends ComponentProps<typeof ark.li> {
  itemRecipe?: typeof timelineItemRecipe;
}

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

export function TimelineRoot(props: TimelineRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "recipe", "class"]);
  return (
    <ark.ol
      {...rest}
      class={(local.recipe ?? timelineRecipe)({
        class: cn(local.class),
        orientation: local.orientation ?? "vertical",
      })}
      data-orientation={local.orientation ?? "vertical"}
      data-part="root"
      data-scope="timeline"
    />
  );
}

export function TimelineItem(props: TimelineItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? timelineItemRecipe)();
  return (
    <TimelineItemContext value={{ slots: slots() }}>
      <ark.li
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="item"
        data-scope="timeline"
      >
        {local.children}
      </ark.li>
    </TimelineItemContext>
  );
}

export function TimelineIndicator(props: TimelineIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTimelineItem();
  return (
    <ark.div
      {...rest}
      class={slots.indicator({ class: cn(local.class) })}
      data-part="indicator"
      data-scope="timeline"
    >
      {local.children}
    </ark.div>
  );
}

export function TimelineSeparator(props: TimelineSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimelineItem();
  return (
    <ark.div
      {...rest}
      aria-hidden="true"
      class={slots.separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="timeline"
    />
  );
}

export function TimelineContent(props: TimelineContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimelineItem();
  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="timeline"
    />
  );
}

export function TimelineTitle(props: TimelineTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimelineItem();
  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="timeline"
    />
  );
}

export function TimelineDescription(props: TimelineDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTimelineItem();
  return (
    <ark.div
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="timeline"
    />
  );
}

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
