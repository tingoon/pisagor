import { Marquee as MarqueePrimitive } from "@ark-ui/react/marquee";
import {
  marqueeContentVariants,
  marqueeEdgeVariants,
  marqueeItemVariants,
  marqueeVariants,
  marqueeViewportVariants,
} from "@pisagor/styles/ui/marquee";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { Children, isValidElement } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface MarqueeRootProps
  extends Omit<ComponentProps<typeof MarqueePrimitive.Root>, "side">,
    WithTestId {
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

// #region Components
export function MarqueeRoot({
  speed = 50,
  showEdges = true,
  spacing = "16px",
  orientation = "horizontal",
  className,
  children,
  testId,
  ...rest
}: MarqueeRootProps) {
  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <MarqueePrimitive.Root
      {...rest}
      className={cn(marqueeVariants(), className)}
      data-orientation={orientation}
      data-testid={testId}
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
MarqueeRoot.displayName = "Marquee.Root";

export function MarqueeContent({
  className,
  ...rest
}: ComponentProps<typeof MarqueePrimitive.Content>) {
  return (
    <MarqueePrimitive.Viewport className={marqueeViewportVariants()}>
      <MarqueePrimitive.Content {...rest} className={cn(marqueeContentVariants(), className)} />
    </MarqueePrimitive.Viewport>
  );
}
MarqueeContent.displayName = "Marquee.Content";

export function MarqueeItem({ className, ...rest }: ComponentProps<typeof MarqueePrimitive.Item>) {
  return <MarqueePrimitive.Item {...rest} className={cn(marqueeItemVariants(), className)} />;
}
MarqueeItem.displayName = "Marquee.Item";

export function MarqueeEdge({ className, ...rest }: ComponentProps<typeof MarqueePrimitive.Edge>) {
  return <MarqueePrimitive.Edge {...rest} className={cn(marqueeEdgeVariants(), className)} />;
}
MarqueeEdge.displayName = "Marquee.Edge";

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
MarqueeShorthand.displayName = "Marquee";

// #endregion
