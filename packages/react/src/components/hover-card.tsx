import { Portal } from "@ark-ui/react";
import type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps as HoverCardPrimitiveRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/react/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card";
import type { HoverCardProps as BaseHoverCardRootProps } from "@pisagor/props";
import { hoverCardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../utils";

// #region Context
const { Context: HoverCardStylesContext, useStyles: useHoverCard } =
  createSlotRecipeContext({
    name: "HoverCard",
    recipe: hoverCardRecipe,
  });
// #endregion

// #region Types
export interface LocalHoverCardRootProps
  extends HoverCardPrimitiveRootProps,
    BaseHoverCardRootProps {}

export type HoverCardProps = LocalHoverCardRootProps;

// #endregion

// #region Parts
export function HoverCardRoot({
  closeDelay = 300,
  openDelay = 600,
  positioning = { placement: "top" },
  children,
  recipe = hoverCardRecipe,
  ...rest
}: LocalHoverCardRootProps) {
  const slots = recipe();

  return (
    <HoverCardStylesContext value={{ slots, variants: {} as never }}>
      <HoverCardPrimitive.Root
        {...rest}
        closeDelay={closeDelay}
        openDelay={openDelay}
        positioning={positioning}
      >
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardStylesContext>
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

export function HoverCardContent({
  children,
  className,
  ...rest
}: HoverCardContentProps) {
  const { slots } = useHoverCard();

  return (
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content
          {...rest}
          className={slots.content({ className })}
        >
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

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/react/hover-card";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
