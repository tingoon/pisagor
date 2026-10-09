import type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps as HoverCardPrimitiveRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/solid/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/solid/hover-card";
import type { HoverCardProps as BaseHoverCardRootProps } from "@pisagor/props";
import { hoverCardRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

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
export function HoverCardRoot(props: LocalHoverCardRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "recipe",
    "closeDelay",
    "openDelay",
    "positioning",
  ]);
  const slots = createMemo(() => (local.recipe ?? hoverCardRecipe)());

  return (
    <HoverCardStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <HoverCardPrimitive.Root
        {...rest}
        closeDelay={local.closeDelay ?? 300}
        openDelay={local.openDelay ?? 600}
        positioning={local.positioning ?? { placement: "top" }}
      />
    </HoverCardStylesContext>
  );
}

export function HoverCardTrigger(props: HoverCardTriggerProps): JSX.Element {
  return <HoverCardPrimitive.Trigger {...props} />;
}

export function HoverCardArrow(props: HoverCardArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["style"]);
  const styles = useHoverCard();

  return (
    <HoverCardPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...(typeof local.style === "object" && local.style !== null
          ? local.style
          : {}),
      }}
    >
      <HoverCardPrimitive.ArrowTip class={styles.slots.arrowTip()} />
    </HoverCardPrimitive.Arrow>
  );
}

export function HoverCardContent(props: HoverCardContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useHoverCard();

  return (
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content
          {...rest}
          class={styles.slots.content({ class: local.class })}
        >
          {local.children}
          <HoverCardArrow />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Positioner>
    </Portal>
  );
}
// #endregion

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/solid/hover-card";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
