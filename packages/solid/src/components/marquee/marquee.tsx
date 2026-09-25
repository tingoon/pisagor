import type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeRootProps as MarqueePrimitiveRootProps,
} from "@ark-ui/solid/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/solid/marquee";
import { marqueeRecipe } from "@pisagor/recipes/marquee";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { MarqueeContext, useMarquee } from "./marquee.context";

export interface MarqueeRootProps
  extends Omit<MarqueePrimitiveRootProps, "side"> {
  orientation?: "horizontal" | "vertical";
  showEdges?: boolean;
  recipe?: typeof marqueeRecipe;
}

export interface MarqueeProps extends Omit<MarqueeRootProps, "children"> {
  items?: JSX.Element[];
}

export function MarqueeRoot(props: MarqueeRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "showEdges",
    "children",
    "spacing",
    "speed",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? marqueeRecipe)();
  const orientation = () => local.orientation ?? "horizontal";
  const showEdges = () => local.showEdges ?? true;
  const side = () => (orientation() === "horizontal" ? "start" : "bottom");

  return (
    <MarqueeContext value={{ slots: slots() }}>
      <MarqueePrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-orientation={orientation()}
        side={side()}
        spacing={local.spacing ?? "16px"}
        speed={local.speed ?? 50}
      >
        {local.children}
        <Show when={showEdges()}>
          <MarqueeEdge
            side={orientation() === "horizontal" ? "start" : "top"}
          />
          <MarqueeEdge
            side={orientation() === "horizontal" ? "end" : "bottom"}
          />
        </Show>
      </MarqueePrimitive.Root>
    </MarqueeContext>
  );
}

export function MarqueeContent(props: MarqueeContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMarquee();
  return (
    <MarqueePrimitive.Viewport class={slots.viewport()}>
      <MarqueePrimitive.Content
        {...rest}
        class={slots.content({ class: local.class })}
      />
    </MarqueePrimitive.Viewport>
  );
}

export function MarqueeItem(props: MarqueeItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMarquee();
  return (
    <MarqueePrimitive.Item
      {...rest}
      class={slots.item({ class: local.class })}
    />
  );
}

export function MarqueeEdge(props: MarqueeEdgeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useMarquee();
  return (
    <MarqueePrimitive.Edge
      {...rest}
      class={slots.edge({ class: local.class })}
    />
  );
}

export function MarqueeShorthand(props: MarqueeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);
  return (
    <MarqueeRoot {...rest}>
      <Show when={local.items}>
        <MarqueeContent>
          <For each={local.items}>
            {(item) => <MarqueeItem>{item}</MarqueeItem>}
          </For>
        </MarqueeContent>
      </Show>
    </MarqueeRoot>
  );
}
