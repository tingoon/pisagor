import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/vue/rating-group";
import { PhStar } from "@phosphor-icons/vue";
import { ratingRecipe } from "@pisagor/recipes/rating";
import { cn } from "@pisagor/utils";

type FormControlVariant = "primary" | "secondary";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, type VNodeChild } from "vue";

type ArkPart = Parameters<typeof h>[0];

export interface RatingProps {
  allowHalf?: boolean;
  /**
   * Style recipe. Defaults to `ratingRecipe` from `@pisagor/recipes/rating`.
   *
   * @defaultValue ratingRecipe
   */
  recipe?: typeof ratingRecipe;
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
    recipe: {
      default: ratingRecipe,
      type: Function as PropType<typeof ratingRecipe>,
    },
    value: { default: undefined, type: Number },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const slots = props.recipe();
      const surfaceTone = resolved.variant === "secondary" ? "opacity-90" : undefined;

      const icon = props.icon ?? PhStar;

      return h(
        RatingGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          allowHalf: props.allowHalf,
          class: slots.base({
            class: cn(surfaceTone, props.class, (attrs as { class?: ClassValue }).class),
          }),
          count: props.count,
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
              class: slots.control({
                class: cn((attrs as { class?: ClassValue }).class),
              }),
            },
            () => [
              ...Array.from({ length: props.count }, (_, i) => i + 1).map((index) =>
                h(
                  RatingGroupPrimitive.Item as ArkPart,
                  { class: slots.item(), index, key: index },
                  () =>
                    h(RatingGroupPrimitive.ItemContext as ArkPart, null, {
                      default: (itemState: { half: boolean; highlighted: boolean }) =>
                        h(
                          "span",
                          {
                            class: slots.indicator(),
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
      );
    };
  },
});
