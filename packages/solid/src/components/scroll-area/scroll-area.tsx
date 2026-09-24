import type {
  ScrollAreaRootProps as ScrollAreaPrimitiveRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/solid/scroll-area";
import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/solid/scroll-area";
import {
  type ScrollAreaRecipeSlot,
  type ScrollAreaVariantProps,
  scrollAreaRecipe,
} from "@pisagor/recipes/scroll-area";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { ScrollAreaContext, useScrollArea } from "./scroll-area.context";

type ScrollAreaClassNames = VariantClassNames<ScrollAreaRecipeSlot>;

type ScrollAreaRootProps = ScrollAreaPrimitiveRootProps &
  ScrollAreaVariantProps & {
    recipe?: typeof scrollAreaRecipe;
  };

export interface ScrollAreaProps extends Omit<ScrollAreaRootProps, "children"> {
  children?: JSX.Element;
  classNames?: ScrollAreaClassNames;
  scrollbarProps?: Omit<ScrollAreaScrollbarProps, "children" | "class" | "orientation">;
  thumbProps?: Omit<ScrollAreaThumbProps, "children" | "class">;
  viewportProps?: Omit<ScrollAreaViewportProps, "children" | "class">;
}

function ScrollAreaRoot(props: ScrollAreaRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? scrollAreaRecipe)({ scrollFade: local.scrollFade ?? false });

  return (
    <ScrollAreaContext value={{ slots: slots() }}>
      <ScrollAreaPrimitive.Root {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </ScrollAreaPrimitive.Root>
    </ScrollAreaContext>
  );
}

function ScrollAreaViewport(props: ScrollAreaViewportProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Viewport {...rest} class={slots.viewport({ class: cn(local.class) })}>
      <ScrollAreaPrimitive.Content>{local.children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
  );
}

function ScrollAreaScrollbar(props: ScrollAreaScrollbarProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "children", "class"]);
  const { slots } = useScrollArea();

  return (
    <ScrollAreaPrimitive.Scrollbar
      {...rest}
      class={slots.scrollbar({ class: cn(local.class) })}
      orientation={local.orientation}
    >
      {local.children}
    </ScrollAreaPrimitive.Scrollbar>
  );
}

function ScrollAreaThumb(props: ScrollAreaThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useScrollArea();
  return <ScrollAreaPrimitive.Thumb {...rest} class={slots.thumb({ class: cn(local.class) })} />;
}

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
      <ScrollAreaViewport {...local.viewportProps} class={local.classNames?.viewport}>
        {local.children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        {...local.scrollbarProps}
        class={local.classNames?.scrollbar}
        orientation="vertical"
      >
        <ScrollAreaThumb {...local.thumbProps} class={local.classNames?.thumb} />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        {...local.scrollbarProps}
        class={local.classNames?.scrollbar}
        orientation="horizontal"
      >
        <ScrollAreaThumb {...local.thumbProps} class={local.classNames?.thumb} />
      </ScrollAreaScrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaRoot>
  );
}
