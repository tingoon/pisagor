import { Slider as SliderPrimitive } from "@ark-ui/vue/slider";
import { sliderVariants } from "@pisagor/styles/ui/slider";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { formControlShellProps } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

export interface SliderProps extends WithTestId {
  class?: unknown;
  defaultValue?: number[];
  disabled?: boolean;
  label?: VNodeChild;
  markerInterval?: number;
  markerLabels?: string[];
  max?: number;
  min?: number;
  onValueChange?: (value: number[]) => void;
  showMarkers?: boolean;
  showValue?: boolean;
  step?: number;
  tabIndex?: number;
  testId?: string;
  value?: number[];
  variant?: FormControlVariant;
}

export const Slider = defineComponent({
  inheritAttrs: false,
  name: "PisagorSlider",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: Array as PropType<number[] | undefined> },
    disabled: { default: undefined, type: Boolean },
    label: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    markerInterval: { default: 1, type: Number },
    markerLabels: { default: undefined, type: Array as PropType<string[] | undefined> },
    max: { default: 100, type: Number },
    min: { default: 0, type: Number },
    onValueChange: { default: undefined, type: Function as PropType<SliderProps["onValueChange"]> },
    showMarkers: { default: false, type: Boolean },
    showValue: { default: false, type: Boolean },
    step: { default: undefined, type: Number },
    tabIndex: { default: undefined, type: Number },
    testId: String,
    value: { default: undefined, type: Array as PropType<number[] | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () => {
        const resolved = useFormControlVariant(props.variant);
        const trackShellProps = formControlShellProps(resolved);

        const variantSlots = sliderVariants();

        const thumbShadowClass = resolved.variant === "secondary" ? "shadow-none" : undefined;
        const trackVariantClass = resolved.variant === "secondary" ? "bg-muted/40" : "bg-input/64";

        const _values = Array.isArray(props.value)
          ? props.value
          : Array.isArray(props.defaultValue)
            ? props.defaultValue
            : [props.min, props.max];

        return h(
          SliderPrimitive.Root as ArkPart,
          {
            ...attrs,
            ...trackShellProps,
            class: variantSlots.base({ class: props.class }),
            "data-testid": props.testId,
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            max: props.max,
            min: props.min,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: { value: number[] }) => props.onValueChange?.(details.value)
              : undefined,
            step: props.step,
          },
          () => [
            (props.label !== undefined || props.showValue) && [
              h("div", { class: variantSlots.header() }, () => [
                props.label !== undefined
                  ? h(SliderPrimitive.Label as ArkPart, {}, () => props.label)
                  : null,
                props.showValue
                  ? h(
                      SliderPrimitive.ValueText as ArkPart,
                      {
                        ...(attrs as object),
                        class: variantSlots.value({ class: "tabular-nums" }),
                      },
                      undefined,
                    )
                  : null,
              ]),
            ],
            slots.default?.(),
            h(SliderPrimitive.Control as ArkPart, { class: variantSlots.control() }, () =>
              h(
                SliderPrimitive.Track as ArkPart,
                {
                  class: variantSlots.track({ class: trackVariantClass }),
                },
                () => [
                  h(SliderPrimitive.Range as ArkPart, {
                    class: variantSlots.range(),
                  }),
                  ..._values.map((_, index) =>
                    h(
                      SliderPrimitive.Thumb as ArkPart,
                      {
                        class: variantSlots.thumb({ class: thumbShadowClass }),
                        index,
                        tabIndex: props.tabIndex ?? undefined,
                      },
                      () => h(SliderPrimitive.HiddenInput as ArkPart, {}),
                    ),
                  ),
                ],
              ),
            ),
            props.showMarkers
              ? h(
                  SliderPrimitive.MarkerGroup as ArkPart,
                  { class: variantSlots.markerGroup() },
                  () =>
                    Array.from({ length: props.max + 1 }, (_, index) =>
                      h(
                        SliderPrimitive.Marker as ArkPart,
                        {
                          class: variantSlots.marker(),
                          "data-interval": index % props.markerInterval === 0 ? undefined : "",
                          key: String(index),
                          value: index,
                        },
                        () => [
                          h("span", { class: variantSlots.markerTick() }),
                          h(
                            "span",
                            { class: variantSlots.markerLabel() },
                            () => props.markerLabels?.[index] ?? String(index),
                          ),
                        ],
                      ),
                    ),
                )
              : null,
          ],
        );
      });
  },
});
