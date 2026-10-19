import { HoverCard as HoverCardPrimitive } from "@ark-ui/solid";
import type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardRootProps as HoverCardRootPrimitiveProps,
  HoverCardTriggerProps,
} from "@ark-ui/solid";
import type {
  HoverCardContract,
  HoverCardRootContract,
} from "@pisagor/contracts";
import { hoverCardRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal";
import { type DialogTriggerRender, renderTrigger } from "./dialog";

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
  children?: JSX.Element;
  /**
   * Whether to render the arrow pointing at the trigger.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
  /**
   * Trigger element that opens the card on hover or focus (render fn
   * preferred).
   */
  trigger?: DialogTriggerRender;
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

const Arrow = withContext<HoverCardArrowProps>(HoverCardPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ArrowTip = withContext<HoverCardArrowTipProps>(
  HoverCardPrimitive.ArrowTip,
  { name: "ArrowTip" },
);
// #endregion

// #region Shorthand
export function HoverCardShorthand(props: HoverCardProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "showArrow",
    "trigger",
  ]);

  return (
    <Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <Trigger
          asChild={renderTrigger(local.trigger)}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            {local.children}

            <Show when={local.showArrow ?? true}>
              <Arrow class={local.classNames?.arrow}>
                <ArrowTip class={local.classNames?.arrowTip} />
              </Arrow>
            </Show>
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
} from "@ark-ui/solid";

export const HoverCard = Object.assign(HoverCardShorthand, {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Trigger,
});
