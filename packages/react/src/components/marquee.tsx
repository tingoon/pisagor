import type {
  MarqueeContentProps,
  MarqueeRootProps as MarqueePrimitiveRootProps,
} from "@ark-ui/react/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/react/marquee";
import type { MarqueeProps as BaseMarqueeRootProps } from "@pisagor/props";
import { marqueeRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  useStyles: useMarquee,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
// #endregion

// #region Types
export interface MarqueeRootProps
  extends Omit<MarqueePrimitiveRootProps, "side">,
    BaseMarqueeRootProps {
  /**
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Whether to show the edges of the marquee
   *
   * @defaultValue true
   */
  showEdges?: boolean;
}

export interface MarqueeProps extends Omit<MarqueeRootProps, "children"> {
  /** Items to auto-render inside a MarqueeContent; each item is wrapped in MarqueeItem */
  items?: ReactNode[];
}
// #endregion

// #region Parts
const MarqueeRootBase = withProvider(MarqueePrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<MarqueePrimitiveRootProps & BaseMarqueeRootProps>;

export function MarqueeRoot({
  orientation = "horizontal",
  showEdges = true,
  children,
  spacing = "16px",
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
  const { slots } = useMarquee();

  return (
    <MarqueePrimitive.Viewport className={slots.viewport()}>
      <MarqueePrimitive.Content
        {...rest}
        className={slots.content({ className })}
      />
    </MarqueePrimitive.Viewport>
  );
}

export const MarqueeItem = withContext(MarqueePrimitive.Item, {
  name: "Item",
});

export const MarqueeEdge = withContext(MarqueePrimitive.Edge, {
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
MarqueeShorthand.displayName = "Marquee";

// #endregion

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
} from "@ark-ui/react/marquee";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
});
