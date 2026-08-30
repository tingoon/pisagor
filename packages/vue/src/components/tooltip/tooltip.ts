import { Tooltip as TooltipPrimitive } from "@ark-ui/vue/tooltip";
import { type TooltipRecipeSlot, tooltipRecipe } from "@pisagor/recipes/tooltip";
import { defineComponent, h, type PropType, Teleport, type VNodeChild } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
export type TooltipTriggerHandle = (props: Record<string, unknown>) => VNodeChild;

type TooltipClassNames = VariantClassNames<TooltipRecipeSlot>;

export interface TooltipProps {
  arrowProps?: Record<string, unknown>;
  children: VNodeChild | TooltipTriggerHandle;
  classNames?: TooltipClassNames;
  closeDelay?: number;
  content: VNodeChild;
  contentProps?: Record<string, unknown>;
  lazyMount?: boolean;
  openDelay?: number;
  positionerProps?: Record<string, unknown>;
  positioning?: Record<string, unknown>;
  triggerProps?: Record<string, unknown>;
  unmountOnExit?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function isTriggerHandle(
  children: VNodeChild | TooltipTriggerHandle,
): children is TooltipTriggerHandle {
  return typeof children === "function";
}

// #region Component
export const Tooltip = defineComponent({
  inheritAttrs: false,
  name: "PisagorTooltip",
  props: {
    arrowProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    children: {
      required: true,
      type: [Object, Function, String, Array] as PropType<VNodeChild | TooltipTriggerHandle>,
    },
    classNames: { default: undefined, type: Object as PropType<TooltipClassNames> },
    closeDelay: { default: 150, type: Number },
    content: { required: true, type: [Object, String, Array] as PropType<VNodeChild> },
    contentProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    lazyMount: { default: true, type: Boolean },
    openDelay: { default: 400, type: Number },
    positionerProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    positioning: {
      default: () => ({ placement: "top" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    triggerProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () => {
      const slots = tooltipRecipe();
      const trigger = isTriggerHandle(props.children)
        ? h(TooltipPrimitive.Context as ArkPart, null, {
            default: (api: { getTriggerProps: () => Record<string, unknown> }) =>
              (props.children as TooltipTriggerHandle)(api.getTriggerProps()),
          })
        : h(
            TooltipPrimitive.Trigger as ArkPart,
            {
              ...props.triggerProps,
              asChild: true,
            },
            () => props.children,
          );

      return h(
        TooltipPrimitive.Root as ArkPart,
        {
          ...attrs,
          closeDelay: props.closeDelay,
          lazyMount: props.lazyMount,
          openDelay: props.openDelay,
          positioning: props.positioning,
          unmountOnExit: props.unmountOnExit,
        },
        () => [
          trigger,
          h(Teleport, { to: "body" }, () =>
            h(TooltipPrimitive.Positioner as ArkPart, { ...props.positionerProps }, () =>
              h(
                TooltipPrimitive.Content as ArkPart,
                {
                  ...props.contentProps,
                  class: slots.content({ class: props.classNames?.content }),
                },
                () => [
                  h(
                    TooltipPrimitive.Arrow as ArkPart,
                    {
                      ...props.arrowProps,
                      class: slots.arrow({ class: props.classNames?.arrow }),
                    },
                    () => h(TooltipPrimitive.ArrowTip as ArkPart),
                  ),
                  props.content,
                ],
              ),
            ),
          ),
        ],
      );
    };
  },
});
// #endregion
