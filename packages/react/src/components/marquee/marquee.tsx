import { Marquee as MarqueePrimitive } from "@ark-ui/react/marquee";
import {
  marqueeContentVariants,
  marqueeEdgeVariants,
  marqueeItemVariants,
  marqueeVariants,
} from "@pisagor/styles/ui/marquee";
import type { ComponentProps, ReactNode } from "react";
import { Children, isValidElement } from "react";
// #region Types
export interface MarqueeRootProps
  extends Omit<ComponentProps<typeof MarqueePrimitive.Root>, "side"> {
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

export type MarqueeContentProps = ComponentProps<typeof MarqueePrimitive.Content>;

export type MarqueeItemProps = ComponentProps<typeof MarqueePrimitive.Item>;

export type MarqueeEdgeProps = ComponentProps<typeof MarqueePrimitive.Edge>;
// #endregion

// #region Parts
export function MarqueeRoot({
  speed = 50,
  showEdges = true,
  spacing = "16px",
  orientation = "horizontal",
  className,
  children,
  ...rest
}: MarqueeRootProps) {
  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <MarqueePrimitive.Root
      {...rest}
      className={marqueeVariants({ className })}
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
    </MarqueePrimitive.Root>
  );
}

export function MarqueeContent({ className, ...rest }: MarqueeContentProps) {
  const slots = marqueeContentVariants();

  return (
    <MarqueePrimitive.Viewport className={slots.viewport()}>
      <MarqueePrimitive.Content {...rest} className={slots.base({ className })} />
    </MarqueePrimitive.Viewport>
  );
}

export function MarqueeItem({ className, ...rest }: MarqueeItemProps) {
  return <MarqueePrimitive.Item {...rest} className={marqueeItemVariants({ className })} />;
}

export function MarqueeEdge({ className, ...rest }: MarqueeEdgeProps) {
  return <MarqueePrimitive.Edge {...rest} className={marqueeEdgeVariants({ className })} />;
}
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
MarqueeItem.displayName = "Marquee.Item";
MarqueeEdge.displayName = "Marquee.Edge";
MarqueeShorthand.displayName = "Marquee";
// #endregion
