import { Portal } from "@ark-ui/react";
import type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps as HoverCardPrimitiveRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/react/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card";
import { hoverCardRecipe } from "@pisagor/recipes/hover-card";

import { HoverCardContext, useHoverCard } from "./hover-card.context";

// #region Types
export interface HoverCardRootProps extends HoverCardPrimitiveRootProps {
  /**
   * Style recipe. Defaults to `hoverCardRecipe` from `@pisagor/recipes/hover-card`.
   *
   * @defaultValue hoverCardRecipe
   */
  recipe?: typeof hoverCardRecipe;
}

export type HoverCardProps = HoverCardRootProps;

// #endregion

// #region Parts
export function HoverCardRoot({
  closeDelay = 300,
  openDelay = 600,
  positioning = { placement: "top" },
  children,
  recipe = hoverCardRecipe,
  ...rest
}: HoverCardRootProps) {
  const slots = recipe();

  return (
    <HoverCardContext value={{ slots }}>
      <HoverCardPrimitive.Root
        {...rest}
        closeDelay={closeDelay}
        openDelay={openDelay}
        positioning={positioning}
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

export function HoverCardContent({ children, className, ...rest }: HoverCardContentProps) {
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
