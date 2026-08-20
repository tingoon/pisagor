import { ark } from "@ark-ui/react/factory";
import {
  timelineContentVariants,
  timelineDescriptionVariants,
  timelineIndicatorVariants,
  timelineItemVariants,
  timelineSeparatorVariants,
  timelineTitleVariants,
  timelineVariants,
} from "@pisagor/styles/ui/timeline";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface TimelineRootProps extends ComponentProps<typeof ark.ol>, WithTestId {
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
export function TimelineRoot({
  orientation = "vertical",
  className,
  testId,
  ...rest
}: TimelineRootProps) {
  return (
    <ark.ol
      {...rest}
      className={timelineVariants({ className, orientation })}
      data-orientation={orientation}
      data-part="root"
      data-scope="timeline"
      data-testid={testId}
    />
  );
}

export function TimelineItem({ className, ...rest }: TimelineItemProps) {
  return (
    <ark.li
      {...rest}
      className={timelineItemVariants({ className })}
      data-part="item"
      data-scope="timeline"
    />
  );
}

export function TimelineIndicator({ className, children, ...rest }: TimelineIndicatorProps) {
  return (
    <ark.div
      {...rest}
      className={timelineIndicatorVariants({ className })}
      data-part="indicator"
      data-scope="timeline"
    >
      {children}
    </ark.div>
  );
}

export function TimelineSeparator({ className, ...rest }: TimelineSeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-hidden="true"
      className={timelineSeparatorVariants({ className })}
      data-part="separator"
      data-scope="timeline"
    />
  );
}

export function TimelineContent({ className, ...rest }: TimelineContentProps) {
  return (
    <ark.div
      {...rest}
      className={timelineContentVariants({ className })}
      data-part="content"
      data-scope="timeline"
    />
  );
}

export function TimelineTitle({ className, ...rest }: TimelineTitleProps) {
  return (
    <ark.div
      {...rest}
      className={timelineTitleVariants({ className })}
      data-part="title"
      data-scope="timeline"
    />
  );
}

export function TimelineDescription({ className, ...rest }: TimelineDescriptionProps) {
  return (
    <ark.div
      {...rest}
      className={timelineDescriptionVariants({ className })}
      data-part="description"
      data-scope="timeline"
    />
  );
}

TimelineRoot.displayName = "Timeline.Root";
TimelineItem.displayName = "Timeline.Item";
TimelineIndicator.displayName = "Timeline.Indicator";
TimelineSeparator.displayName = "Timeline.Separator";
TimelineContent.displayName = "Timeline.Content";
TimelineTitle.displayName = "Timeline.Title";
TimelineDescription.displayName = "Timeline.Description";
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
TimelineShorthand.displayName = "Timeline";
// #endregion
