import type {
  ScrollAreaRootProps as ScrollAreaPrimitiveRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/solid/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/solid/scroll-area";
import type { ScrollAreaProps as BaseScrollAreaRootProps } from "@pisagor/props";
import {
  type ScrollAreaRecipeSlot,
  type ScrollAreaVariantProps,
  scrollAreaRecipe,
} from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const {
  useStyles: useScrollArea,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "ScrollArea", recipe: scrollAreaRecipe });
// #endregion

type ScrollAreaClassNames = VariantClassNames<ScrollAreaRecipeSlot>;

type ScrollAreaRootProps = ScrollAreaPrimitiveRootProps &
  ScrollAreaVariantProps &
  BaseScrollAreaRootProps;

export interface ScrollAreaProps extends Omit<ScrollAreaRootProps, "children"> {
  children?: JSX.Element;
  classNames?: ScrollAreaClassNames;
  scrollbarProps?: Omit<
    ScrollAreaScrollbarProps,
    "children" | "class" | "orientation"
  >;
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "class">;
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "class">;
}

const ScrollAreaRoot: Component<ScrollAreaRootProps> = withProvider(
  ScrollAreaPrimitive.Root,
  { name: "Root", slot: "base" },
);

function ScrollAreaViewport(props: ScrollAreaViewportProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useScrollArea();

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

const ScrollAreaScrollbar: Component<ScrollAreaScrollbarProps> = withContext(
  ScrollAreaPrimitive.Scrollbar,
  { name: "Scrollbar" },
);

const ScrollAreaThumb: Component<ScrollAreaThumbProps> = withContext(
  ScrollAreaPrimitive.Thumb,
  { name: "Thumb" },
);

export function ScrollArea(props: ScrollAreaProps): JSX.Element {
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
} from "@ark-ui/solid/scroll-area";
