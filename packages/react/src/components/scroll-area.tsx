import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/react";
import type {
  ScrollAreaRootProps as ScrollAreaRootPrimitiveProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/react";
import type {
  ScrollAreaContract,
  ScrollAreaRootContract,
} from "@pisagor/contracts";
import { scrollAreaRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

// #region Parts
const ScrollAreaRoot = withProvider<
  ComponentProps<typeof ScrollAreaPrimitive.Root> & ScrollAreaRootContract
>(ScrollAreaPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ScrollAreaRootPrimitiveProps & ScrollAreaRootContract>;

function ScrollAreaViewport({
  children,
  className,
  ...rest
}: ScrollAreaViewportProps) {
  const { slots } = useStyles();

  return (
    <ScrollAreaPrimitive.Viewport
      {...rest}
      className={slots.viewport({ className })}
    >
      <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

const ScrollAreaScrollbar = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>
>(ScrollAreaPrimitive.Scrollbar, {
  name: "Scrollbar",
});

const ScrollAreaThumb = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Thumb>
>(ScrollAreaPrimitive.Thumb, {
  name: "Thumb",
});
// #endregion

// #region Types
export interface ScrollAreaProps
  extends
    Omit<ComponentProps<typeof ScrollAreaRoot>, "children">,
    ScrollAreaContract {
  children?: React.ReactNode;
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
function ScrollAreaShorthand({
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

// #endregion

export type {
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/react";

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Corner: ScrollAreaPrimitive.Corner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
