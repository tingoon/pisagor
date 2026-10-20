import { Tooltip as TooltipPrimitive } from "@ark-ui/vue";
import type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipRootProps as TooltipRootPrimitiveProps,
  TooltipTriggerProps,
} from "@ark-ui/vue";
import type { TooltipContract, TooltipRootContract } from "@pisagor/contracts";
import { tooltipRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
// #endregion

// #region Types
export type TooltipRootProps = TooltipRootPrimitiveProps & TooltipRootContract;

export type TooltipTriggerHandle = (
  props: Record<string, unknown>,
) => VNodeChild;

/**
 * The default slot is the trigger element; it can also be passed as `children`,
 * either as an element or as a render function that receives the trigger props
 * from the handle API.
 */
export interface TooltipProps
  extends Omit<TooltipRootProps, "content">, TooltipContract {
  /** Class merged onto the tooltip content element */
  class?: unknown;
  /** Extra props forwarded to the tooltip arrow element */
  arrowProps?: Omit<TooltipArrowProps, "asChild">;
  children?: VNodeChild | TooltipTriggerHandle;
  content: VNodeChild;
  /** Extra props forwarded to the tooltip content element */
  contentProps?: TooltipContentProps;
  /** Extra props forwarded to the tooltip positioner element */
  positionerProps?: TooltipPositionerProps;
  /**
   * Whether to render the arrow pointing at the trigger.
   *
   * @defaultValue true
   */
  showArrow?: boolean;
  /** Extra props forwarded to the tooltip trigger element */
  triggerProps?: Omit<TooltipTriggerProps, "asChild">;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function isTriggerHandle(
  children: VNodeChild | TooltipTriggerHandle,
): children is TooltipTriggerHandle {
  return typeof children === "function";
}

// #region Parts
// The root renders no element; `base` is an empty slot.
const TooltipRoot = withProvider<TooltipRootProps>(TooltipPrimitive.Root, {
  defaultProps: {
    closeDelay: 150,
    openDelay: 400,
    positioning: { placement: "top" },
  },
  name: "Root",
  renderless: true,
  slot: "base",
});

const TooltipTrigger = withContext<TooltipTriggerProps>(
  TooltipPrimitive.Trigger,
  { defaultProps: { asChild: true }, name: "Trigger" },
);

const TooltipPositioner = withContext<TooltipPositionerProps>(
  TooltipPrimitive.Positioner,
  { name: "Positioner" },
);

const TooltipContent = withContext<TooltipContentProps>(
  TooltipPrimitive.Content,
  { name: "Content" },
);

const TooltipArrow = withContext<TooltipArrowProps>(TooltipPrimitive.Arrow, {
  name: "Arrow",
});

const TooltipArrowTip = withContext<TooltipArrowTipProps>(
  TooltipPrimitive.ArrowTip,
  { name: "ArrowTip" },
);
// #endregion

// #region Shorthand
const TooltipShorthand = defineComponent({
  inheritAttrs: false,
  name: "Tooltip",
  props: {
    arrowProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    children: {
      default: undefined,
      type: [Object, Function, String, Array] as PropType<
        VNodeChild | TooltipTriggerHandle
      >,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<TooltipProps["classNames"]>,
    },
    content: {
      required: true,
      type: [Object, String, Array] as PropType<VNodeChild>,
    },
    contentProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    positionerProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    /**
     * Whether to render the arrow.
     *
     * @defaultValue true
     */
    showArrow: { default: true, type: Boolean },
    triggerProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const children = props.children ?? slots.default?.();
      const trigger = isTriggerHandle(children)
        ? h(TooltipPrimitive.Context as ArkPart, null, {
            default: (api: {
              getTriggerProps: () => Record<string, unknown>;
            }) => (children as TooltipTriggerHandle)(api.getTriggerProps()),
          })
        : h(TooltipTrigger, props.triggerProps, () => children);

      return h(TooltipRoot, { ...attrs }, () => [
        trigger,
        h(Teleport, { to: "body" }, [
          h(
            TooltipPositioner,
            { ...props.positionerProps, class: props.classNames?.positioner },
            () =>
              h(
                TooltipContent,
                {
                  ...props.contentProps,
                  class: [props.class, props.classNames?.content],
                },
                () => [
                  props.showArrow
                    ? h(
                        TooltipArrow,
                        { ...props.arrowProps, class: props.classNames?.arrow },
                        () =>
                          h(TooltipArrowTip, {
                            class: props.classNames?.arrowTip,
                          }),
                      )
                    : null,
                  props.content,
                ],
              ),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/vue";

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});
