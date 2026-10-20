import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/solid";
import type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaRootProps as ScrollAreaRootPrimitiveProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/solid";
import type {
  ScrollAreaContract,
  ScrollAreaRootContract,
} from "@pisagor/contracts";
import {
  type ScrollAreaVariantProps,
  scrollAreaRecipe,
} from "@pisagor/recipes";
import type { Component, JSX, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

// #region Types
type ScrollAreaRootProps = ScrollAreaRootPrimitiveProps &
  ScrollAreaVariantProps &
  ScrollAreaRootContract;

export interface ScrollAreaProps
  extends Omit<ScrollAreaRootProps, "children">, ScrollAreaContract {
  children?: JSX.Element;
  scrollbarProps?: Omit<
    ScrollAreaScrollbarProps,
    "children" | "class" | "orientation"
  >;
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "class">;
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "class">;
}
// #endregion

// #region Parts
const ScrollAreaRoot: Component<ScrollAreaRootProps> = withProvider<
  ComponentProps<typeof ScrollAreaPrimitive.Root> & ScrollAreaRootContract
>(ScrollAreaPrimitive.Root, { name: "Root" });

const ScrollAreaViewport = withContext<ScrollAreaViewportProps>(
  ScrollAreaPrimitive.Viewport,
  { name: "Viewport" },
);

const ScrollAreaContent = withContext<ScrollAreaContentProps>(
  ScrollAreaPrimitive.Content,
  { name: "Content" },
);

const ScrollAreaCorner = withContext<ScrollAreaCornerProps>(
  ScrollAreaPrimitive.Corner,
  { name: "Corner" },
);

const ScrollAreaScrollbar: Component<ScrollAreaScrollbarProps> = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>
>(ScrollAreaPrimitive.Scrollbar, { name: "Scrollbar" });

const ScrollAreaThumb: Component<ScrollAreaThumbProps> = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Thumb>
>(ScrollAreaPrimitive.Thumb, { name: "Thumb" });

// #endregion

// #region Shorthand
function ScrollAreaShorthand(props: ScrollAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "scrollFade",
    "children",
    "scrollbarProps",
    "thumbProps",
    "viewportProps",
    "class",
    "classNames",
  ]);

  return (
    <ScrollAreaRoot {...rest} class={local.class} scrollFade={local.scrollFade}>
      <ScrollAreaViewport
        {...local.viewportProps}
        class={local.classNames?.viewport}
      >
        <ScrollAreaContent class={local.classNames?.content}>
          {local.children}
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        {...local.scrollbarProps}
        class={local.classNames?.scrollbar}
        orientation="vertical"
      >
        <ScrollAreaThumb
          {...local.thumbProps}
          class={local.classNames?.thumb}
        />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        {...local.scrollbarProps}
        class={local.classNames?.scrollbar}
        orientation="horizontal"
      >
        <ScrollAreaThumb
          {...local.thumbProps}
          class={local.classNames?.thumb}
        />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner class={local.classNames?.corner} />
    </ScrollAreaRoot>
  );
}
// #endregion

export type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/solid";

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
