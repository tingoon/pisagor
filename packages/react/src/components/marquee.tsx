import {
  Marquee as MarqueePrimitive,
  type MarqueeContentProps,
  type MarqueeRootProps as MarqueeRootPrimitiveProps,
  type MarqueeViewportProps,
} from "@ark-ui/react";
import type { MarqueeRootContract, MarqueeContract } from "@pisagor/contracts";
import { marqueeRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode, ComponentProps } from "react";
import { Children, isValidElement } from "react";
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
  items?: ReactNode[];
  /**
   * Whether to show the fading edges.
   *
   * @defaultValue true
   */
  showEdges?: boolean;
}
// #endregion

// #region Parts
const MarqueeRootBase = withProvider<
  ComponentProps<typeof MarqueePrimitive.Root> & MarqueeRootContract
>(MarqueePrimitive.Root, { name: "Root" }) as FunctionComponent<
  MarqueeRootPrimitiveProps & Omit<MarqueeRootContract, "items">
>;

/** Root; maps `orientation` to the Ark `side` and sets spacing / speed defaults. */
export function MarqueeRoot({
  orientation = "horizontal",
  children,
  spacing = "calc(var(--spacing) * 4)",
  speed = 50,
  ...rest
}: MarqueeRootProps) {
  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <MarqueeRootBase
      {...rest}
      data-orientation={orientation}
      side={side}
      spacing={spacing}
      speed={speed}
    >
      {children}
    </MarqueeRootBase>
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

const MarqueeItem = withContext<ComponentProps<typeof MarqueePrimitive.Item>>(
  MarqueePrimitive.Item,
  {
    name: "Item",
  },
);

const MarqueeEdge = withContext<ComponentProps<typeof MarqueePrimitive.Edge>>(
  MarqueePrimitive.Edge,
  {
    name: "Edge",
  },
);
// #endregion

// #region Shorthand
export function MarqueeShorthand({
  classNames,
  items,
  orientation = "horizontal",
  showEdges = true,
  ...rest
}: MarqueeProps) {
  const horizontal = orientation === "horizontal";

  return (
    <MarqueeRoot {...rest} orientation={orientation}>
      <MarqueeViewport className={classNames?.viewport}>
        <MarqueeContent className={classNames?.content}>
          {Children.toArray(items).map((item) =>
            isValidElement(item) ? (
              <MarqueeItem className={classNames?.item} key={item.key}>
                {item}
              </MarqueeItem>
            ) : (
              <MarqueeItem className={classNames?.item} key={String(item)}>
                {item}
              </MarqueeItem>
            ),
          )}
        </MarqueeContent>
      </MarqueeViewport>
      {showEdges ? (
        <>
          <MarqueeEdge
            className={classNames?.edge}
            side={horizontal ? "start" : "top"}
          />
          <MarqueeEdge
            className={classNames?.edge}
            side={horizontal ? "end" : "bottom"}
          />
        </>
      ) : null}
    </MarqueeRoot>
  );
}
// #endregion

// #region Display Names
MarqueeRoot.displayName = "Marquee.Root";
MarqueeShorthand.displayName = "Marquee";

// #endregion

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeViewportProps,
} from "@ark-ui/react";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
  Viewport: MarqueeViewport,
});
