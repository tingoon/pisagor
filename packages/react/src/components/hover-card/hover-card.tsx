import { Portal } from "@ark-ui/react";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card";
import { hoverCardContentVariants, hoverCardInlineVariants } from "@pisagor/styles/ui/hover-card";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { HoverCardRootContext, useHoverCardRoot } from "./hover-card.context";

// #region Types
export type HoverCardRootProps = ComponentProps<typeof HoverCardPrimitive.Root> & WithTestId;

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
  testId,
  ...rest
}: HoverCardRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <HoverCardRootContext value={{ testId: dataTestId ?? testId }}>
      <HoverCardPrimitive.Root
        closeDelay={closeDelay}
        lazyMount={lazyMount}
        openDelay={openDelay}
        positioning={positioning}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </HoverCardRootContext>
  );
}

export function HoverCardTrigger(props: HoverCardTriggerProps) {
  const { testId } = useHoverCardRoot() ?? {};

  return <HoverCardPrimitive.Trigger data-testid={testId} {...props} />;
}

export function HoverCardArrow({ style, ...rest }: HoverCardArrowProps) {
  return (
    <HoverCardPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...style,
      }}
    >
      <HoverCardPrimitive.ArrowTip className={hoverCardInlineVariants()} />
    </HoverCardPrimitive.Arrow>
  );
}

export function HoverCardContent({ className, children, ...rest }: HoverCardContentProps) {
  return (
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content {...rest} className={hoverCardContentVariants({ className })}>
          {children}

          <HoverCardArrow />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Positioner>
    </Portal>
  );
}

HoverCardRoot.displayName = "HoverCard";
HoverCardTrigger.displayName = "HoverCard.Trigger";
HoverCardArrow.displayName = "HoverCard.Arrow";
HoverCardContent.displayName = "HoverCard.Content";
// #endregion
