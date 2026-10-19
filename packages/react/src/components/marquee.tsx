import {
  Marquee as MarqueePrimitive,
  type MarqueeContentProps,
  type MarqueeRootProps as MarqueeRootPrimitiveProps,
} from "@ark-ui/react";
import type { MarqueeRootContract, MarqueeContract } from "@pisagor/contracts";
import { marqueeRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode, ComponentProps } from "react";
import { Children, isValidElement } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
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
  /**
   * Whether to show the edges of the marquee
   *
   * @defaultValue true
   */
  showEdges?: boolean;
}

export interface MarqueeProps
  extends
    Omit<MarqueeRootProps, "children" | "recipe">,
    MarqueeRootContract,
    MarqueeContract {
  items?: ReactNode[];
}
// #endregion

// #region Parts
const MarqueeRootBase = withProvider<
  ComponentProps<typeof MarqueePrimitive.Root> & MarqueeRootContract
>(MarqueePrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  MarqueeRootPrimitiveProps & Omit<MarqueeRootContract, "items">
>;

export function MarqueeRoot({
  orientation = "horizontal",
  showEdges = true,
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
      {showEdges && (
        <>
          <MarqueeEdge side={orientation === "horizontal" ? "start" : "top"} />
          <MarqueeEdge side={orientation === "horizontal" ? "end" : "bottom"} />
        </>
      )}
    </MarqueeRootBase>
  );
}

export function MarqueeContent({ className, ...rest }: MarqueeContentProps) {
  const { slots } = useStyles();

  return (
    <MarqueePrimitive.Viewport className={slots.viewport()}>
      <MarqueePrimitive.Content
        {...rest}
        className={slots.content({ className })}
      />
    </MarqueePrimitive.Viewport>
  );
}

export const MarqueeItem = withContext<
  ComponentProps<typeof MarqueePrimitive.Item>
>(MarqueePrimitive.Item, {
  name: "Item",
});

export const MarqueeEdge = withContext<
  ComponentProps<typeof MarqueePrimitive.Edge>
>(MarqueePrimitive.Edge, {
  name: "Edge",
});
// #endregion

// #region Shorthand
export function MarqueeShorthand({ items, ...rest }: MarqueeProps) {
  return (
    <MarqueeRoot {...rest}>
      {items && (
        <MarqueeContent>
          {Children.toArray(items).map((item) =>
            isValidElement(item) ? (
              <MarqueeItem key={item.key}>{item}</MarqueeItem>
            ) : (
              <MarqueeItem key={String(item)}>{item}</MarqueeItem>
            ),
          )}
        </MarqueeContent>
      )}
    </MarqueeRoot>
  );
}
// #endregion

// #region Display Names
MarqueeRoot.displayName = "Marquee.Root";
MarqueeContent.displayName = "Marquee.Content";

// #endregion

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
} from "@ark-ui/react";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
});
