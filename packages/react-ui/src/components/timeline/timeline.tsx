import { ark } from "@ark-ui/react/factory";
import { timelineItemVariants, timelineVariants } from "@pisagor/recipes/timeline";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import { TimelineItemContext, useTimelineItem } from "./timeline.context";

// #region Types
export interface TimelineRootProps extends ComponentProps<typeof ark.ol> {
  /**
   * Timeline layout.
   *
   * @defaultValue "vertical"
   */
  orientation?: "vertical" | "horizontal";
}

export interface TimelineItemProps extends ComponentProps<typeof ark.li> {}

export interface TimelineIndicatorProps extends ComponentProps<typeof ark.div> {}

export interface TimelineContentProps extends ComponentProps<typeof ark.div> {}

export interface TimelineTitleProps extends ComponentProps<typeof ark.div> {}

export interface TimelineDescriptionProps extends ComponentProps<typeof ark.div> {}

export interface TimelineSeparatorProps extends ComponentProps<typeof ark.div> {}

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

// #region Parts
export function TimelineRoot({ orientation = "vertical", className, ...rest }: TimelineRootProps) {
  return (
    <ark.ol
      {...rest}
      className={timelineVariants({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="timeline"
    />
  );
}

export function TimelineItem({ children, className, ...rest }: TimelineItemProps) {
  const slots = useMemo(() => timelineItemVariants(), []);

  return (
    <TimelineItemContext value={{ slots }}>
      <ark.li
        {...rest}
        className={slots.base({ className })}
        data-part="item"
        data-scope="timeline"
      >
        {children}
      </ark.li>
    </TimelineItemContext>
  );
}

export function TimelineIndicator({ children, className, ...rest }: TimelineIndicatorProps) {
  const { slots } = useTimelineItem();

  return (
    <ark.div
      {...rest}
      className={slots.indicator({ className })}
      data-part="indicator"
      data-scope="timeline"
    >
      {children}
    </ark.div>
  );
}

export function TimelineSeparator({ className, ...rest }: TimelineSeparatorProps) {
  const { slots } = useTimelineItem();

  return (
    <ark.div
      {...rest}
      aria-hidden="true"
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="timeline"
    />
  );
}

export function TimelineContent({ className, ...rest }: TimelineContentProps) {
  const { slots } = useTimelineItem();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="timeline"
    />
  );
}

export function TimelineTitle({ className, ...rest }: TimelineTitleProps) {
  const { slots } = useTimelineItem();

  return (
    <ark.div
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="timeline"
    />
  );
}

export function TimelineDescription({ className, ...rest }: TimelineDescriptionProps) {
  const { slots } = useTimelineItem();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="timeline"
    />
  );
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
// #endregion

// #region Display Names
TimelineRoot.displayName = "Timeline.Root";
TimelineItem.displayName = "Timeline.Item";
TimelineIndicator.displayName = "Timeline.Indicator";
TimelineSeparator.displayName = "Timeline.Separator";
TimelineContent.displayName = "Timeline.Content";
TimelineTitle.displayName = "Timeline.Title";
TimelineDescription.displayName = "Timeline.Description";
TimelineShorthand.displayName = "Timeline";
// #endregion
