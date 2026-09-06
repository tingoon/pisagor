import { FieldLabel } from "@ark-ui/vue/field";
import {
  ProgressRange,
  ProgressRoot,
  ProgressTrack,
  ProgressValueText,
} from "@ark-ui/vue/progress";
import { fieldRecipe } from "@pisagor/recipes/field";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes/progress";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNode } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type ProgressClassNames = VariantClassNames<ProgressRecipeSlot>;

export interface ProgressProps {
  /**
   * Style recipe. Defaults to `progressRecipe` from `@pisagor/recipes/progress`.
   *
   * @defaultValue progressRecipe
   */
  recipe?: typeof progressRecipe;
  class?: unknown;
  classNames?: ProgressClassNames;
  indeterminate?: boolean;
  isValueVisible?: boolean;
  label?: string;
  orientation?: "horizontal" | "vertical";
  rangeProps?: Record<string, unknown>;
  trackProps?: Record<string, unknown>;
  value?: number;
  valueProps?: Record<string, unknown>;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Progress = defineComponent({
  inheritAttrs: false,
  name: "PisagorProgress",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ProgressClassNames> },
    indeterminate: { default: false, type: Boolean },
    isValueVisible: { default: undefined, type: Boolean },
    label: { default: undefined, type: String },
    orientation: { default: "horizontal", type: String as PropType<ProgressProps["orientation"]> },
    rangeProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    recipe: {
      default: progressRecipe,
      type: Function as PropType<typeof progressRecipe>,
    },
    trackProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    value: { default: undefined, type: Number },
    valueProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();
      const showHeader = props.label || props.isValueVisible;

      return h(
        ProgressRoot as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          modelValue: props.indeterminate ? null : props.value,
          orientation: props.orientation,
        },
        {
          default: () => {
            const children: VNode[] = [];

            if (showHeader) {
              children.push(
                h(
                  "div",
                  { class: variantSlots.header({ class: props.classNames?.header }) },
                  () => {
                    const headerNodes: VNode[] = [];

                    if (props.label) {
                      headerNodes.push(
                        h(
                          FieldLabel as ArkPart,
                          {
                            class: cn(fieldRecipe().label()),
                          },
                          () => props.label,
                        ),
                      );
                    }

                    if (props.isValueVisible) {
                      headerNodes.push(
                        h(FieldLabel as ArkPart, { asChild: true }, () =>
                          h(ProgressValueText as ArkPart, {
                            ...props.valueProps,
                            class: variantSlots.value({ class: props.classNames?.value }),
                          }),
                        ),
                      );
                    }

                    return headerNodes;
                  },
                ),
              );
            }

            const slotContent = slots.default?.();
            if (slotContent) {
              children.push(...(Array.isArray(slotContent) ? slotContent : [slotContent]));
            }

            children.push(
              h(
                ProgressTrack as ArkPart,
                {
                  ...props.trackProps,
                  class: variantSlots.track({ class: props.classNames?.track }),
                },
                () =>
                  h(ProgressRange as ArkPart, {
                    ...props.rangeProps,
                    class: variantSlots.range({ class: props.classNames?.range }),
                  }),
              ),
            );

            return children;
          },
        },
      );
    };
  },
});
// #endregion
