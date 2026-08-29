import { HoverCard as HoverCardPrimitive } from "@ark-ui/vue/hover-card";
import { hoverCardRecipe } from "@pisagor/recipes/hover-card";
import { type CSSProperties, defineComponent, h, type PropType, Teleport } from "vue";

// #region Types
export interface HoverCardProps {
  closeDelay?: number;
  lazyMount?: boolean;
  openDelay?: number;
  positioning?: Record<string, unknown>;
  unmountOnExit?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function hoverCardTeleport(content: ReturnType<typeof h> | ReturnType<typeof h>[]) {
  return h(Teleport, { to: "body" }, () => content);
}

// #region Parts
export const HoverCardRoot = defineComponent({
  inheritAttrs: false,
  name: "HoverCardRoot",
  props: {
    closeDelay: { default: 300, type: Number },
    lazyMount: { default: true, type: Boolean },
    openDelay: { default: 600, type: Number },
    positioning: {
      default: () => ({ placement: "top" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        HoverCardPrimitive.Root as ArkPart,
        {
          ...attrs,
          closeDelay: props.closeDelay,
          lazyMount: props.lazyMount,
          openDelay: props.openDelay,
          positioning: props.positioning,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const HoverCardTrigger = defineComponent({
  inheritAttrs: false,
  name: "HoverCardTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        HoverCardPrimitive.Trigger as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});

export const HoverCardArrow = defineComponent({
  inheritAttrs: false,
  name: "HoverCardArrow",
  props: {
    style: { default: undefined, type: Object as PropType<CSSProperties> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = hoverCardRecipe();

      return h(
        HoverCardPrimitive.Arrow as ArkPart,
        {
          ...attrs,
          style: {
            "--arrow-background": "var(--popover)",
            "--arrow-size": "calc(1.5 * var(--spacing))",
            ...props.style,
          } as CSSProperties,
        },
        () => [
          h(HoverCardPrimitive.ArrowTip as ArkPart, { class: variantSlots.arrowTip() }),
          slots.default?.(),
        ],
      );
    };
  },
});

export const HoverCardContent = defineComponent({
  inheritAttrs: false,
  name: "HoverCardContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = hoverCardRecipe();

      return hoverCardTeleport(
        h(HoverCardPrimitive.Positioner as ArkPart, {}, () =>
          h(
            HoverCardPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: variantSlots.content({ class: props.class }),
            },
            () => [slots.default?.(), h(HoverCardArrow)],
          ),
        ),
      );
    };
  },
});
// #endregion

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
