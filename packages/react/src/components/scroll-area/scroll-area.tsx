import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/react/scroll-area";
import { type ScrollAreaVariantProps, scrollAreaVariants } from "@pisagor/styles/ui/scroll-area";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>;

export type ScrollAreaScrollbarProps = ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>;

export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaPrimitive.Thumb>;

type ScrollAreaClassNames = VariantClassNames<typeof scrollAreaVariants>;

export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaPrimitive.Root>;

export interface ScrollAreaProps extends ScrollAreaRootProps, ScrollAreaVariantProps, WithTestId {
  /** Slot class names */
  classNames?: ScrollAreaClassNames;
  /** Extra props forwarded to the scroll area viewport element */
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "className">;
  /** Extra props forwarded to each scroll area scrollbar element */
  scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "className" | "orientation">;
  /** Extra props forwarded to each scroll area thumb element */
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "className">;
}

interface ScrollAreaScrollbarSlotProps {
  orientation: ScrollAreaScrollbarProps["orientation"];
  classNames?: ScrollAreaClassNames;
  scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "className" | "orientation">;
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "className">;
}
// #endregion

// #region Parts
function ScrollAreaRoot({
  scrollFade = false,
  className,
  classNames,
  viewportProps,
  scrollbarProps,
  thumbProps,
  children,
  testId,
  ...rest
}: ScrollAreaProps) {
  const slots = scrollAreaVariants({ scrollFade });

  return (
    <ScrollAreaPrimitive.Root
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-testid={testId}
    >
      <ScrollAreaPrimitive.Viewport
        {...viewportProps}
        className={cn(slots.viewport(), classNames?.viewport)}
      >
        <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaScrollbar
        classNames={classNames}
        orientation="vertical"
        scrollbarProps={scrollbarProps}
        thumbProps={thumbProps}
      />
      <ScrollAreaScrollbar
        classNames={classNames}
        orientation="horizontal"
        scrollbarProps={scrollbarProps}
        thumbProps={thumbProps}
      />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollAreaScrollbar({
  orientation,
  classNames,
  scrollbarProps,
  thumbProps,
}: ScrollAreaScrollbarSlotProps) {
  const slots = scrollAreaVariants();

  return (
    <ScrollAreaPrimitive.Scrollbar
      {...scrollbarProps}
      className={cn(slots.scrollbar(), classNames?.scrollbar)}
      orientation={orientation}
    >
      <ScrollAreaPrimitive.Thumb {...thumbProps} className={cn(slots.thumb(), classNames?.thumb)} />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export const ScrollArea = ScrollAreaRoot;
// #endregion
