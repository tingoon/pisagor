import type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeRootProps as MarqueePrimitiveRootProps,
} from "@ark-ui/solid/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/solid/marquee";
import type { MarqueeProps as BaseMarqueeRootProps } from "@pisagor/props";
import { marqueeRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useMarquee,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Marquee", recipe: marqueeRecipe });
// #endregion

export interface MarqueeRootProps
  extends Omit<MarqueePrimitiveRootProps, "side">,
    BaseMarqueeRootProps {
  orientation?: "horizontal" | "vertical";
  showEdges?: boolean;
}

export interface MarqueeProps extends Omit<MarqueeRootProps, "children"> {
  items?: JSX.Element[];
}

const MarqueeRootProvider: Component<
  MarqueePrimitiveRootProps & BaseMarqueeRootProps
> = withProvider(MarqueePrimitive.Root, { name: "Root", slot: "base" });

export function MarqueeRoot(props: MarqueeRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "showEdges",
    "children",
  ]);
  const horizontal = () => (local.orientation ?? "horizontal") === "horizontal";

  return (
    <MarqueeRootProvider
      spacing="16px"
      speed={50}
      {...rest}
      data-orientation={horizontal() ? "horizontal" : "vertical"}
      side={horizontal() ? "start" : "bottom"}
    >
      {local.children}
      <Show when={local.showEdges ?? true}>
        <MarqueeEdge side={horizontal() ? "start" : "top"} />
        <MarqueeEdge side={horizontal() ? "end" : "bottom"} />
      </Show>
    </MarqueeRootProvider>
  );
}

export function MarqueeContent(props: MarqueeContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useMarquee();
  return (
    <MarqueePrimitive.Viewport class={styles.slots.viewport()}>
      <MarqueePrimitive.Content
        {...rest}
        class={styles.slots.content({ class: local.class })}
      />
    </MarqueePrimitive.Viewport>
  );
}

export const MarqueeItem: Component<MarqueeItemProps> = withContext(
  MarqueePrimitive.Item,
  { name: "Item" },
);

export const MarqueeEdge: Component<MarqueeEdgeProps> = withContext(
  MarqueePrimitive.Edge,
  { name: "Edge" },
);

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

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
} from "@ark-ui/solid/marquee";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
});
