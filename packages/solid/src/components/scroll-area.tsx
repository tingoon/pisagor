import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/solid";
import type {
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
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

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

const ScrollAreaRoot: Component<ScrollAreaRootProps> = withProvider<
  ComponentProps<typeof ScrollAreaPrimitive.Root> & ScrollAreaRootContract
>(ScrollAreaPrimitive.Root, { name: "Root" });

function ScrollAreaViewport(props: ScrollAreaViewportProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <ScrollAreaPrimitive.Viewport
      {...rest}
      class={styles.slots.viewport({ class: local.class })}
    >
      <ScrollAreaPrimitive.Content>
        {local.children}
      </ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

const ScrollAreaScrollbar: Component<ScrollAreaScrollbarProps> = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>
>(ScrollAreaPrimitive.Scrollbar, { name: "Scrollbar" });

const ScrollAreaThumb: Component<ScrollAreaThumbProps> = withContext<
  ComponentProps<typeof ScrollAreaPrimitive.Thumb>
>(ScrollAreaPrimitive.Thumb, { name: "Thumb" });

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
        {local.children}
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
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaRoot>
  );
}

export type {
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/solid";

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Corner: ScrollAreaPrimitive.Corner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
