import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/vue/rating-group";
import { PhStar } from "@phosphor-icons/vue";
import type { RatingProps as BaseRatingProps } from "@pisagor/props";
import { type RatingRecipeSlot, ratingRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  Context: RatingStylesContext,
  useStyles: useRating,
  withContext,
} = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";
type ClassValue = Parameters<typeof cn>[0];
type RatingClassNames = VariantClassNames<RatingRecipeSlot>;

export interface RatingProps extends BaseRatingProps {
  allowHalf?: boolean;
  class?: ClassValue;
  classNames?: RatingClassNames;
  controlProps?: Record<string, unknown>;
  count?: number;
  defaultValue?: number;
  disabled?: boolean;
  icon?: VNodeChild;
  indicatorProps?: Record<string, unknown>;
  itemProps?: Record<string, unknown>;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
  variant?: FormControlVariant;
  value?: number;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const RatingControl = withContext(RatingGroupPrimitive.Control, {
  name: "Control",
});

const RatingItem = withContext(RatingGroupPrimitive.Item, {
  name: "Item",
});

const RatingIndicator = defineComponent({
  inheritAttrs: false,
  name: "Rating.Indicator",
  props: {
    class: { default: undefined, type: String as PropType<string> },
    half: { default: false, type: Boolean },
    highlighted: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const styles = useRating();

    return () =>
      h(
        "span",
        {
          ...attrs,
          class: styles.slots.indicator({ class: props.class }),
          "data-half": props.half ? "" : undefined,
          "data-highlighted": props.highlighted ? "" : undefined,
          "data-part": "item-indicator",
          "data-scope": "rating",
        },
        slots,
      );
  },
});
// #endregion

// #region Closed
export const Rating = defineComponent({
  inheritAttrs: false,
  name: "Rating",
  props: {
    allowHalf: { default: false, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<RatingClassNames>,
    },
    controlProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    count: { default: 5, type: Number },
    defaultValue: { default: undefined, type: Number },
    disabled: { default: undefined, type: Boolean },
    icon: {
      default: undefined,
      type: [Object, Function, String] as PropType<VNodeChild>,
    },
    indicatorProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    itemProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RatingProps["onValueChange"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    recipe: {
      default: ratingRecipe,
      type: Function as PropType<typeof ratingRecipe>,
    },
    value: { default: undefined, type: Number },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const surfaceVariant = useFormControlSurface();

    return () => {
      const resolved = {
        surfaceVariant,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const slots = props.recipe();
      const surfaceTone =
        resolved.variant === "secondary" ? "opacity-90" : undefined;
      const icon = props.icon ?? PhStar;

      return h(RatingStylesContext, { value: { slots, variants: {} } }, () =>
        h(
          RatingGroupPrimitive.Root as ArkPart,
          {
            ...attrs,
            allowHalf: props.allowHalf,
            class: slots.base({
              class: cn(surfaceTone, props.class),
            }),
            count: props.count,
            "data-variant": resolved.variant,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: { value: number }) =>
                  props.onValueChange?.(details.value)
              : undefined,
            readOnly: props.readOnly,
          },
          () =>
            h(
              RatingControl,
              { ...props.controlProps, class: props.classNames?.control },
              () => [
                ...Array.from({ length: props.count }, (_, i) => i + 1).map(
                  (index) =>
                    h(
                      RatingItem,
                      {
                        ...props.itemProps,
                        class: props.classNames?.item,
                        index,
                        key: index,
                      },
                      () =>
                        h(RatingGroupPrimitive.ItemContext as ArkPart, null, {
                          default: (itemState: {
                            half: boolean;
                            highlighted: boolean;
                          }) =>
                            h(
                              RatingIndicator,
                              {
                                ...props.indicatorProps,
                                class: props.classNames?.indicator,
                                half: itemState.half,
                                highlighted: itemState.highlighted,
                              },
                              () => [
                                h(icon as ArkPart, {
                                  "aria-hidden": true,
                                  "data-bg": "",
                                }),
                                h(icon as ArkPart, {
                                  "aria-hidden": true,
                                  "data-fg": "",
                                  fill: "currentColor",
                                }),
                              ],
                            ),
                        }),
                    ),
                ),
                h(RatingGroupPrimitive.HiddenInput as ArkPart),
              ],
            ),
        ),
      );
    };
  },
});
// #endregion
