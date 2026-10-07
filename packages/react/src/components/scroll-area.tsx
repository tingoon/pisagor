import type {
  ScrollAreaRootProps as ScrollAreaPrimitiveRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/react/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/react/scroll-area";
import type { ScrollAreaProps as BaseScrollAreaRootProps } from "@pisagor/props";
import { type ScrollAreaRecipeSlot, scrollAreaRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import type { VariantClassNames } from "../internal/types";
import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  useStyles: useScrollArea,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

// #region Parts
const ScrollAreaRoot = withProvider(ScrollAreaPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ScrollAreaPrimitiveRootProps & BaseScrollAreaRootProps>;

function ScrollAreaViewport({
  children,
  className,
  ...rest
}: ScrollAreaViewportProps) {
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Viewport
      {...rest}
      className={slots.viewport({ className })}
    >
      <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

const ScrollAreaScrollbar = withContext(ScrollAreaPrimitive.Scrollbar, {
  name: "Scrollbar",
});

const ScrollAreaThumb = withContext(ScrollAreaPrimitive.Thumb, {
  name: "Thumb",
});
// #endregion

// #region Types
type ScrollAreaClassNames = VariantClassNames<ScrollAreaRecipeSlot>;

export interface ScrollAreaProps
  extends Omit<ComponentProps<typeof ScrollAreaRoot>, "children"> {
  children?: React.ReactNode;
  /** Slot class names */
  classNames?: ScrollAreaClassNames;
  /** Extra props forwarded to each scroll area scrollbar element */
  scrollbarProps?: Omit<
    ScrollAreaScrollbarProps,
    "children" | "className" | "orientation"
  >;
  /** Extra props forwarded to each scroll area thumb element */
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "className">;
  /** Extra props forwarded to the scroll area viewport element */
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "className">;
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
ScrollAreaViewport.displayName = "ScrollArea.Viewport";
ScrollArea.displayName = "ScrollArea";

// #endregion

export type {
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/react/scroll-area";
