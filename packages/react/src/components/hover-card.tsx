import { HoverCard as HoverCardPrimitive, Portal } from "@ark-ui/react";
import type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardRootProps as HoverCardRootPrimitiveProps,
  HoverCardTriggerProps,
} from "@ark-ui/react";
import type {
  HoverCardContract,
  HoverCardRootContract,
} from "@pisagor/contracts";
import { hoverCardRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "HoverCard",
  recipe: hoverCardRecipe,
});
// #endregion

// #region Types
export type HoverCardRootProps = HoverCardRootPrimitiveProps &
  HoverCardRootContract;

export interface HoverCardProps extends HoverCardRootProps, HoverCardContract {
  /** Card content. */
  children?: ReactNode;
  /**
   * Whether to render the arrow pointing at the trigger.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
  /** Trigger element that opens the card on hover or focus. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<HoverCardRootProps>(HoverCardPrimitive.Root, {
  defaultProps: {
    closeDelay: 300,
    openDelay: 600,
    positioning: { placement: "top" },
  },
  name: "Root",
  slot: "base",
});

const Trigger = withContext<HoverCardTriggerProps>(HoverCardPrimitive.Trigger, {
  name: "Trigger",
});

const Positioner = withContext<HoverCardPositionerProps>(
  HoverCardPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<HoverCardContentProps>(HoverCardPrimitive.Content, {
  name: "Content",
});

const ArrowTip = withContext<HoverCardArrowTipProps>(
  HoverCardPrimitive.ArrowTip,
  { name: "ArrowTip" },
);

const Arrow = withContext<HoverCardArrowProps>(HoverCardPrimitive.Arrow, {
  defaultProps: {
    children: <ArrowTip />,
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});
// #endregion

// #region Shorthand
export function HoverCardShorthand({
  children,
  classNames,
  showArrow = true,
  trigger,
  ...rest
}: HoverCardProps) {
  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {children}

            {showArrow && (
              <Arrow className={classNames?.arrow}>
                <ArrowTip className={classNames?.arrowTip} />
              </Arrow>
            )}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardTriggerProps,
} from "@ark-ui/react";

export const HoverCard = Object.assign(HoverCardShorthand, {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Trigger,
});
