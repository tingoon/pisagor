import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/vue/rating-group";
import { PhStar } from "@phosphor-icons/vue";
import { ratingVariants } from "@pisagor/styles/ui/rating";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

export interface RatingProps extends WithTestId {
  allowHalf?: boolean;
  class?: ClassValue;
  count?: number;
  defaultValue?: number;
  disabled?: boolean;
  icon?: VNodeChild;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
  size?: never;
  variant?: FormControlVariant;
  value?: number;
}

export const Rating = defineComponent({
  inheritAttrs: false,
  name: "PisagorRating",
  props: {
    allowHalf: { default: false, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    count: { default: 5, type: Number },
    defaultValue: { default: undefined, type: Number },
    disabled: { default: undefined, type: Boolean },
    icon: { default: undefined, type: [Object, Function, String] as PropType<VNodeChild> },
    onValueChange: { default: undefined, type: Function as PropType<RatingProps["onValueChange"]> },
    readOnly: { default: undefined, type: Boolean },
    testId: String,
    value: { default: undefined, type: Number },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const slots = ratingVariants();
      const surfaceTone = resolved.variant === "secondary" ? "opacity-90" : undefined;

      const icon = props.icon ?? PhStar;

      return h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          RatingGroupPrimitive.Root as ArkPart,
          {
            ...attrs,
            allowHalf: props.allowHalf,
            class: cn(
              slots.root(),
              surfaceTone,
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
            count: props.count,
            "data-testid": props.testId,
            "data-variant": resolved.variant,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: { value: number }) => props.onValueChange?.(details.value)
              : undefined,
            readOnly: props.readOnly,
          },
          () =>
            h(
              RatingGroupPrimitive.Control as ArkPart,
              {
                class: cn(slots.control(), (attrs as { class?: ClassValue }).class),
              },
              () => [
                ...Array.from({ length: props.count }, (_, i) => i + 1).map((index) =>
                  h(
                    RatingGroupPrimitive.Item as ArkPart,
                    { class: cn(slots.item()), index, key: index },
                    () =>
                      h(RatingGroupPrimitive.ItemContext as ArkPart, null, {
                        default: (itemState: { half: boolean; highlighted: boolean }) =>
                          h(
                            "span",
                            {
                              class: cn(slots.indicator()),
                              "data-half": itemState.half ? "" : undefined,
                              "data-highlighted": itemState.highlighted ? "" : undefined,
                              "data-part": "item-indicator",
                              "data-scope": "rating",
                            },
                            () => [
                              h(icon as ArkPart, { "aria-hidden": true, "data-bg": "" }),
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
