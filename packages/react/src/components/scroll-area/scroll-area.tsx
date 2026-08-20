import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/react/scroll-area";
import {
  type ScrollAreaSlots,
  type ScrollAreaVariantProps,
  scrollAreaVariants,
} from "@pisagor/styles/ui/scroll-area";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { ScrollAreaContext, useScrollArea } from "./scroll-area.context";

// #region Types
type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>;

type ScrollAreaScrollbarProps = ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>;

type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaPrimitive.Thumb>;

type ScrollAreaClassNames = VariantClassNames<ScrollAreaSlots>;

type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaPrimitive.Root> &
  ScrollAreaVariantProps &
  WithTestId;

export interface ScrollAreaProps extends Omit<ScrollAreaRootProps, "children"> {
  /** Slot class names */
  classNames?: ScrollAreaClassNames;
  /** Extra props forwarded to the scroll area viewport element */
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "className">;
  /** Extra props forwarded to each scroll area scrollbar element */
  scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "className" | "orientation">;
  /** Extra props forwarded to each scroll area thumb element */
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "className">;
  children?: React.ReactNode;
}
// #endregion

// #region Parts
function ScrollAreaRoot({
  children,
  className,
  scrollFade = false,
  testId,
  ...rest
}: ScrollAreaRootProps) {
  const slots = scrollAreaVariants({ scrollFade });

  return (
    <ScrollAreaContext value={{ slots }}>
      <ScrollAreaPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-testid={testId}
      >
        {children}
      </ScrollAreaPrimitive.Root>
    </ScrollAreaContext>
  );
}

function ScrollAreaViewport({ className, children, ...rest }: ScrollAreaViewportProps) {
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Viewport {...rest} className={slots.viewport({ className })}>
      <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

function ScrollAreaScrollbar({
  className,
  orientation,
  children,
  ...rest
}: ScrollAreaScrollbarProps) {
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Scrollbar
      {...rest}
      className={slots.scrollbar({ className })}
      orientation={orientation}
    >
      {children}
    </ScrollAreaPrimitive.Scrollbar>
  );
}

function ScrollAreaThumb({ className, ...rest }: ScrollAreaThumbProps) {
  const { slots } = useScrollArea();

  return <ScrollAreaPrimitive.Thumb {...rest} className={slots.thumb({ className })} />;
}

ScrollAreaRoot.displayName = "ScrollArea.Root";
ScrollAreaViewport.displayName = "ScrollArea.Viewport";
ScrollAreaScrollbar.displayName = "ScrollArea.Scrollbar";
ScrollAreaThumb.displayName = "ScrollArea.Thumb";
// #endregion

// #region Closed
export function ScrollArea({
  children,
  className,
  classNames,
  scrollbarProps,
  scrollFade,
  testId,
  thumbProps,
  viewportProps,
  ...rest
}: ScrollAreaProps) {
  return (
    <ScrollAreaRoot {...rest} className={className} scrollFade={scrollFade} testId={testId}>
      <ScrollAreaViewport {...viewportProps} className={classNames?.viewport}>
        {children}
      </ScrollAreaViewport>

      <ScrollAreaScrollbar
        {...scrollbarProps}
        className={classNames?.scrollbar}
        orientation="vertical"
      >
        <ScrollAreaThumb {...thumbProps} className={classNames?.thumb} />
      </ScrollAreaScrollbar>

      <ScrollAreaScrollbar
        {...scrollbarProps}
        className={classNames?.scrollbar}
        orientation="horizontal"
      >
        <ScrollAreaThumb {...thumbProps} className={classNames?.thumb} />
      </ScrollAreaScrollbar>

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaRoot>
  );
}
ScrollArea.displayName = "ScrollArea";
// #endregion
