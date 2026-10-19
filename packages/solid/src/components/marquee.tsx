import { Marquee as MarqueePrimitive } from "@ark-ui/solid";
import type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeRootProps as MarqueeRootPrimitiveProps,
  MarqueeViewportProps,
} from "@ark-ui/solid";
import type { MarqueeRootContract, MarqueeContract } from "@pisagor/contracts";
import { marqueeRecipe } from "@pisagor/recipes";
import type { Component, JSX, ComponentProps } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
// #endregion

// #region Types
export interface MarqueeRootProps
  extends
    Omit<MarqueeRootPrimitiveProps, "side">,
    Omit<MarqueeRootContract, "items"> {
  /** @defaultValue "horizontal" */
  orientation?: "horizontal" | "vertical";
}

export interface MarqueeProps
  extends
    Omit<MarqueeRootProps, "children" | "recipe">,
    MarqueeRootContract,
    MarqueeContract {
  items?: JSX.Element[];
  /**
   * Whether to show the fading edges.
   *
   * @defaultValue true
   */
  showEdges?: boolean;
}
// #endregion

// #region Parts
const MarqueeRootBase: Component<
  MarqueeRootPrimitiveProps & Omit<MarqueeRootContract, "items">
> = withProvider<
  ComponentProps<typeof MarqueePrimitive.Root> & MarqueeRootContract
>(MarqueePrimitive.Root, { name: "Root" });

/** Root; maps `orientation` to the Ark `side` and sets spacing / speed defaults. */
function MarqueeRoot(props: MarqueeRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation"]);
  const horizontal = () => (local.orientation ?? "horizontal") === "horizontal";

  return (
    <MarqueeRootBase
      spacing="calc(var(--spacing) * 4)"
      speed={50}
      {...rest}
      data-orientation={horizontal() ? "horizontal" : "vertical"}
      side={horizontal() ? "start" : "bottom"}
    />
  );
}

const MarqueeViewport = withContext<MarqueeViewportProps>(
  MarqueePrimitive.Viewport,
  { name: "Viewport" },
);

const MarqueeContent = withContext<MarqueeContentProps>(
  MarqueePrimitive.Content,
  { name: "Content" },
);

const MarqueeItem = withContext<MarqueeItemProps>(MarqueePrimitive.Item, {
  name: "Item",
});

const MarqueeEdge = withContext<MarqueeEdgeProps>(MarqueePrimitive.Edge, {
  name: "Edge",
});
// #endregion

// #region Shorthand
export function MarqueeShorthand(props: MarqueeProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "items",
    "orientation",
    "showEdges",
  ]);
  const horizontal = () => (local.orientation ?? "horizontal") === "horizontal";

  return (
    <MarqueeRoot {...rest} orientation={local.orientation ?? "horizontal"}>
      <MarqueeViewport class={local.classNames?.viewport}>
        <MarqueeContent class={local.classNames?.content}>
          <For each={local.items}>
            {(item) => (
              <MarqueeItem class={local.classNames?.item}>{item}</MarqueeItem>
            )}
          </For>
        </MarqueeContent>
      </MarqueeViewport>
      <Show when={local.showEdges ?? true}>
        <MarqueeEdge
          class={local.classNames?.edge}
          side={horizontal() ? "start" : "top"}
        />
        <MarqueeEdge
          class={local.classNames?.edge}
          side={horizontal() ? "end" : "bottom"}
        />
      </Show>
    </MarqueeRoot>
  );
}
// #endregion

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeViewportProps,
} from "@ark-ui/solid";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
  Viewport: MarqueeViewport,
});
