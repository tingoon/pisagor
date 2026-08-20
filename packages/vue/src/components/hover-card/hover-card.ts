import { HoverCard as HoverCardPrimitive } from "@ark-ui/vue/hover-card";
import { hoverCardContentVariants, hoverCardInlineVariants } from "@pisagor/styles/ui/hover-card";
import { cn } from "@pisagor/utils";
import {
  type CSSProperties,
  defineComponent,
  h,
  type PropType,
  reactive,
  Teleport,
  watchEffect,
} from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Types
interface HoverCardContextProps {
  testId?: string;
}

export interface HoverCardProps extends WithTestId {
  closeDelay?: number;
  lazyMount?: boolean;
  openDelay?: number;
  positioning?: Record<string, unknown>;
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [provideHoverCardContext, useHoverCardRoot] = createContext<HoverCardContextProps>({
  name: "HoverCardRoot",
  strict: false,
});
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
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<HoverCardContextProps>({
      testId: props.testId,
    });

    watchEffect(() => {
      context.testId = props.testId;
    });

    provideHoverCardContext(context);

    return () => {
      const { "data-testid": _, ...rest } = attrs;

      return h(
        HoverCardPrimitive.Root as ArkPart,
        {
          ...rest,
          closeDelay: props.closeDelay,
          lazyMount: props.lazyMount,
          openDelay: props.openDelay,
          positioning: props.positioning,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
    };
  },
});

export const HoverCardTrigger = defineComponent({
  inheritAttrs: false,
  name: "HoverCardTrigger",
  setup(_, { attrs, slots }) {
    const hoverCardContext = useHoverCardRoot() ?? {};

    return () =>
      h(
        HoverCardPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          "data-testid": hoverCardContext.testId,
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
          h(HoverCardPrimitive.ArrowTip as ArkPart, { class: hoverCardInlineVariants() }),
          slots.default?.(),
        ],
      );
  },
});

export const HoverCardContent = defineComponent({
  inheritAttrs: false,
  name: "HoverCardContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      hoverCardTeleport(
        h(HoverCardPrimitive.Positioner as ArkPart, {}, () =>
          h(
            HoverCardPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(hoverCardContentVariants(), props.class),
            },
            () => [slots.default?.(), h(HoverCardArrow)],
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
