import { HoverCard as HoverCardPrimitive } from "@ark-ui/vue";
import type { HoverCardProps as BaseHoverCardProps } from "@pisagor/props";
import { hoverCardRecipe } from "@pisagor/recipes";
import {
  type CSSProperties,
  computed,
  defineComponent,
  h,
  type PropType,
  Teleport,
} from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { provideStyles: provideHoverCardStyles, useStyles } =
  createSlotRecipeContext({
    name: "HoverCard",
    recipe: hoverCardRecipe,
  });
// #endregion

// #region Types
export interface HoverCardProps extends BaseHoverCardProps {
  closeDelay?: number;
  lazyMount?: boolean;
  openDelay?: number;
  positioning?: Record<string, unknown>;
  unmountOnExit?: boolean;
}

export interface HoverCardArrowProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function hoverCardTeleport(
  content: ReturnType<typeof h> | ReturnType<typeof h>[],
) {
  return h(Teleport, { to: "body" }, [content]);
}

// #region Parts
export const HoverCardRoot = defineComponent({
  inheritAttrs: false,
  name: "HoverCard",
  props: {
    closeDelay: { default: 300, type: Number },
    lazyMount: { default: true, type: Boolean },
    openDelay: { default: 600, type: Number },
    positioning: {
      default: () => ({ placement: "top" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    recipe: {
      default: hoverCardRecipe,
      type: Function as PropType<typeof hoverCardRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideHoverCardStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

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
  name: "HoverCard.Trigger",
  setup(_props, { attrs, slots }) {
    return () => h(HoverCardPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const HoverCardArrow = defineComponent({
  inheritAttrs: false,
  name: "HoverCard.Arrow",
  props: {
    style: { default: undefined, type: Object as PropType<CSSProperties> },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
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
          h(HoverCardPrimitive.ArrowTip as ArkPart, {
            class: styles.slots.arrowTip(),
          }),
          slots.default?.(),
        ],
      );
  },
});

export const HoverCardContent = defineComponent({
  inheritAttrs: false,
  name: "HoverCard.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    showArrow: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      hoverCardTeleport(
        h(HoverCardPrimitive.Positioner as ArkPart, {}, () =>
          h(
            HoverCardPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: styles.slots.content({ class: props.class }),
            },
            () => [
              slots.default?.(),
              props.showArrow ? h(HoverCardArrow) : null,
            ],
          ),
        ),
      );
  },
});
// #endregion

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
