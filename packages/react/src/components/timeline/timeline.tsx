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
import { cn } from "@pisagor/utils";
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
      className={cn(timelineVariants({ orientation }), className)}
      data-orientation={orientation}
      data-part="root"
      data-scope="timeline"
      data-testid={testId}
    />
  );
}
TimelineRoot.displayName = "Timeline.Root";

export function TimelineItem({ className, ...rest }: TimelineItemProps) {
  return (
    <ark.li
      {...rest}
      className={cn(timelineItemVariants(), className)}
      data-part="item"
      data-scope="timeline"
    />
  );
}
TimelineItem.displayName = "Timeline.Item";

export function TimelineIndicator({ className, children, ...rest }: TimelineIndicatorProps) {
  return (
    <ark.div
      {...rest}
      className={cn(timelineIndicatorVariants(), className)}
      data-part="indicator"
      data-scope="timeline"
    >
      {children}
    </ark.div>
  );
}
TimelineIndicator.displayName = "Timeline.Indicator";

export function TimelineSeparator({ className, ...rest }: TimelineSeparatorProps) {
  return (
    <ark.div
      {...rest}
      aria-hidden="true"
      className={cn(timelineSeparatorVariants(), className)}
      data-part="separator"
      data-scope="timeline"
    />
  );
}
TimelineSeparator.displayName = "Timeline.Separator";

export function TimelineContent({ className, ...rest }: TimelineContentProps) {
  return (
    <ark.div
      {...rest}
      className={cn(timelineContentVariants(), className)}
      data-part="content"
      data-scope="timeline"
    />
  );
}
TimelineContent.displayName = "Timeline.Content";

export function TimelineTitle({ className, ...rest }: TimelineTitleProps) {
  return (
    <ark.div
      {...rest}
      className={cn(timelineTitleVariants(), className)}
      data-part="title"
      data-scope="timeline"
    />
  );
}
TimelineTitle.displayName = "Timeline.Title";

export function TimelineDescription({ className, ...rest }: TimelineDescriptionProps) {
  return (
    <ark.div
      {...rest}
      className={cn(timelineDescriptionVariants(), className)}
      data-part="description"
      data-scope="timeline"
    />
  );
}
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
