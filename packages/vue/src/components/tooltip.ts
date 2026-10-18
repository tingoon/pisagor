import { Tooltip as TooltipPrimitive } from "@ark-ui/vue";
import type { TooltipProps as BaseTooltipProps } from "@pisagor/props";
import { type TooltipRecipeSlot, tooltipRecipe } from "@pisagor/recipes";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { ClassValue, VariantClassNames } from "../internal/types";

// #region Context
const { provideStyles: provideTooltipStyles, withContext } =
  createSlotRecipeContext({
    name: "Tooltip",
    recipe: tooltipRecipe,
  });
// #endregion

// #region Types
export type TooltipTriggerHandle = (
  props: Record<string, unknown>,
) => VNodeChild;

type TooltipClassNames = VariantClassNames<TooltipRecipeSlot>;

export interface TooltipProps extends BaseTooltipProps {
  /** Class merged onto the tooltip content element */
  class?: unknown;
  arrowProps?: Record<string, unknown>;
  children?: VNodeChild | TooltipTriggerHandle;
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

// #region Parts
const TooltipRoot = defineComponent({
  inheritAttrs: false,
  name: "Tooltip.Root",
  props: {
    closeDelay: { default: 150, type: Number },
    lazyMount: { default: true, type: Boolean },
    openDelay: { default: 400, type: Number },
    positioning: {
      default: () => ({ placement: "top" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    recipe: {
      default: tooltipRecipe,
      type: Function as PropType<typeof tooltipRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideTooltipStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () =>
      h(
        TooltipPrimitive.Root as ArkPart,
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

const TooltipContent = withContext(TooltipPrimitive.Content, {
  name: "Content",
});

const TooltipArrow = withContext(TooltipPrimitive.Arrow, {
  name: "Arrow",
});
// #endregion

// #region Closed
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
      type: Object as PropType<TooltipClassNames>,
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
        : h(
            TooltipPrimitive.Trigger as ArkPart,
            { ...props.triggerProps, asChild: true },
            () => children,
          );

      return h(TooltipRoot, { ...attrs }, () => [
        trigger,
        h(Teleport, { to: "body" }, [
          h(
            TooltipPrimitive.Positioner as ArkPart,
            { ...props.positionerProps },
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
                        () => h(TooltipPrimitive.ArrowTip as ArkPart),
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

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipPrimitive.ArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPrimitive.Positioner,
  Root: TooltipRoot,
  Trigger: TooltipPrimitive.Trigger,
});
