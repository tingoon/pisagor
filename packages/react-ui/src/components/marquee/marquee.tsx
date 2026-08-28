import { Marquee as MarqueePrimitive } from "@ark-ui/react/marquee";
import { marqueeVariants } from "@pisagor/recipes/marquee";
import type { ComponentProps, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { MarqueeContext, useMarquee } from "./marquee.context";

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
  orientation = "horizontal",
  showEdges = true,
  children,
  spacing = "16px",
  speed = 50,
  className,
  ...rest
}: MarqueeRootProps) {
  const slots = marqueeVariants();
  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <MarqueeContext value={{ slots }}>
      <MarqueePrimitive.Root
        {...rest}
        className={slots.base({ className })}
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
    </MarqueeContext>
  );
}

export function MarqueeContent({ className, ...rest }: MarqueeContentProps) {
  const { slots } = useMarquee();

  return (
    <MarqueePrimitive.Viewport className={slots.viewport()}>
      <MarqueePrimitive.Content {...rest} className={slots.content({ className })} />
    </MarqueePrimitive.Viewport>
  );
}

export function MarqueeItem({ className, ...rest }: MarqueeItemProps) {
  const { slots } = useMarquee();

  return <MarqueePrimitive.Item {...rest} className={slots.item({ className })} />;
}

export function MarqueeEdge({ className, ...rest }: MarqueeEdgeProps) {
  const { slots } = useMarquee();

  return <MarqueePrimitive.Edge {...rest} className={slots.edge({ className })} />;
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
