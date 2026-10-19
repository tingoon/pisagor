import { HoverCard as HoverCardPrimitive } from "@ark-ui/vue";
import type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardRootProps as HoverCardRootPrimitiveProps,
  HoverCardTriggerProps,
} from "@ark-ui/vue";
import type {
  HoverCardContract,
  HoverCardRootContract,
} from "@pisagor/contracts";
import { hoverCardRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, Teleport } from "vue";
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

/**
 * Slots: `trigger` (single element, rendered `as-child`) and `default` (card
 * content).
 */
export interface HoverCardProps extends HoverCardRootProps, HoverCardContract {
  /**
   * Whether to render the arrow pointing at the trigger.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
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
  renderless: true,
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

const ArrowBase = withContext<HoverCardArrowProps>(HoverCardPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

/** Renders an `ArrowTip` when no children are passed. */
const Arrow = defineComponent({
  inheritAttrs: false,
  name: "HoverCard.Arrow",
  setup(_, { attrs, slots }) {
    return () =>
      h(ArrowBase, attrs, {
        default: () => slots.default?.() ?? h(ArrowTip),
      });
  },
});
// #endregion

// #region Shorthand
export const HoverCardShorthand = defineComponent({
  inheritAttrs: false,
  name: "HoverCard",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<HoverCardProps["classNames"]>,
    },
    showArrow: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;

      return h(Root, attrs, () => [
        slots.trigger
          ? h(
              Trigger,
              { asChild: true, class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () => [
              slots.default?.(),

              props.showArrow
                ? h(Arrow, { class: classNames?.arrow }, () =>
                    h(ArrowTip, { class: classNames?.arrowTip }),
                  )
                : null,
            ]),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardTriggerProps,
} from "@ark-ui/vue";

export const HoverCard = Object.assign(HoverCardShorthand, {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Trigger,
});
