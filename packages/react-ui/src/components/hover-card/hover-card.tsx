import { Portal } from "@ark-ui/react";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card";
import { hoverCardVariants } from "@pisagor/recipes/hover-card";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { HoverCardContext, useHoverCard } from "./hover-card.context";

// #region Types
export type HoverCardRootProps = ComponentProps<typeof HoverCardPrimitive.Root>;

export type HoverCardProps = HoverCardRootProps;

export type HoverCardTriggerProps = ComponentProps<typeof HoverCardPrimitive.Trigger>;

export type HoverCardArrowProps = ComponentProps<typeof HoverCardPrimitive.Arrow>;

export type HoverCardContentProps = ComponentProps<typeof HoverCardPrimitive.Content>;
// #endregion

// #region Parts
export function HoverCardRoot({
  lazyMount = true,
  unmountOnExit = true,
  closeDelay = 300,
  openDelay = 600,
  positioning = { placement: "top" },
  children,
  ...rest
}: HoverCardRootProps) {
  const slots = useMemo(() => hoverCardVariants(), []);

  return (
    <HoverCardContext value={{ slots }}>
      <HoverCardPrimitive.Root
        closeDelay={closeDelay}
        lazyMount={lazyMount}
        openDelay={openDelay}
        positioning={positioning}
        unmountOnExit={unmountOnExit}
        {...rest}
      >
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardContext>
  );
}

export function HoverCardTrigger(props: HoverCardTriggerProps) {
  return <HoverCardPrimitive.Trigger {...props} />;
}

export function HoverCardArrow({ style, ...rest }: HoverCardArrowProps) {
  const { slots } = useHoverCard();

  return (
    <HoverCardPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...style,
      }}
    >
      <HoverCardPrimitive.ArrowTip className={slots.arrowTip()} />
    </HoverCardPrimitive.Arrow>
  );
}

export function HoverCardContent({ className, children, ...rest }: HoverCardContentProps) {
  const { slots } = useHoverCard();

  return (
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content {...rest} className={slots.content({ className })}>
          {children}

          <HoverCardArrow />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Positioner>
    </Portal>
  );
}
// #endregion

// #region Display Names
HoverCardRoot.displayName = "HoverCard";
HoverCardTrigger.displayName = "HoverCard.Trigger";
HoverCardArrow.displayName = "HoverCard.Arrow";
HoverCardContent.displayName = "HoverCard.Content";
// #endregion
