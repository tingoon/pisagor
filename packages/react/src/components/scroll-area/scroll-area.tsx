import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/react/scroll-area";
import {
  type ScrollAreaSlots,
  type ScrollAreaVariantProps,
  scrollAreaVariants,
} from "@pisagor/recipes/scroll-area";
import type { ComponentProps } from "react";
import type { VariantClassNames } from "../../internal/types";
import { ScrollAreaContext, useScrollArea } from "./scroll-area.context";

// #region Types
type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>;

type ScrollAreaScrollbarProps = ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>;

type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaPrimitive.Thumb>;

type ScrollAreaClassNames = VariantClassNames<ScrollAreaSlots>;

type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaPrimitive.Root> & ScrollAreaVariantProps;

export interface ScrollAreaProps extends Omit<ScrollAreaRootProps, "children"> {
  children?: React.ReactNode;
  /** Slot class names */
  classNames?: ScrollAreaClassNames;
  /** Extra props forwarded to each scroll area scrollbar element */
  scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "className" | "orientation">;
  /** Extra props forwarded to each scroll area thumb element */
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "className">;
  /** Extra props forwarded to the scroll area viewport element */
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "className">;
}
// #endregion

// #region Parts
function ScrollAreaRoot({ scrollFade = false, children, className, ...rest }: ScrollAreaRootProps) {
  const slots = scrollAreaVariants({ scrollFade });

  return (
    <ScrollAreaContext value={{ slots }}>
      <ScrollAreaPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </ScrollAreaPrimitive.Root>
    </ScrollAreaContext>
  );
}

function ScrollAreaViewport({ children, className, ...rest }: ScrollAreaViewportProps) {
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Viewport {...rest} className={slots.viewport({ className })}>
      <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

function ScrollAreaScrollbar({
  orientation,
  children,
  className,
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
// #endregion

// #region Closed
export function ScrollArea({
  scrollFade,
  children,
  scrollbarProps,
  thumbProps,
  viewportProps,
  className,
  classNames,
  ...rest
}: ScrollAreaProps) {
  return (
    <ScrollAreaRoot {...rest} className={className} scrollFade={scrollFade}>
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
// #endregion

// #region Display Names
ScrollAreaRoot.displayName = "ScrollArea.Root";
ScrollAreaViewport.displayName = "ScrollArea.Viewport";
ScrollAreaScrollbar.displayName = "ScrollArea.Scrollbar";
ScrollAreaThumb.displayName = "ScrollArea.Thumb";
ScrollArea.displayName = "ScrollArea";
// #endregion
