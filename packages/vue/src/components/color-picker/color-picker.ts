import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerValueChangeDetails,
  parseColor as parseColorArk,
  useColorPickerContext as useColorPicker,
} from "@ark-ui/vue/color-picker";
import { ark } from "@ark-ui/vue/factory";
import { PhCheck, PhEyedropper, PhX } from "@phosphor-icons/vue";
import {
  colorPickerAreaThumbVariants,
  colorPickerAreaVariants,
  colorPickerChannelSliderVariants,
  colorPickerContentVariants,
  colorPickerControlVariants,
  colorPickerInline4Variants,
  colorPickerInline5Variants,
  colorPickerInlineVariants,
  colorPickerInputSwatchVariants,
  colorPickerSwatchGroupVariants,
  colorPickerSwatchIndicatorVariants,
  colorPickerSwatchTriggerVariants,
  colorPickerSwatchVariants,
  colorPickerValueSwatchVariants,
  colorPickerValueTextVariants,
  colorPickerVariants,
  colorPickerViewVariants,
} from "@pisagor/styles/ui/color-picker";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, Teleport } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { Button } from "../button";
import { InputGroup } from "../input-group";

type ArkPart = Parameters<typeof h>[0];

export interface ColorPickerProps extends WithTestId {
  class?: ClassValue;
  variant?: FormControlVariant;
  positioning?: unknown;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
  value?: string;
  defaultValue?: string;
  clearable?: boolean;
  onValueChange?: (value: string) => void;
}

export const parseColor = parseColorArk;

const [provideColorPickerRootContext, useColorPickerRoot] = createContext<{ testId?: string }>({
  name: "ColorPickerRoot",
  strict: false,
});

function colorPickerTeleport(content: ReturnType<typeof h> | Array<ReturnType<typeof h>>) {
  return h(Teleport, { to: "body" }, () => content);
}

export const ColorPickerRoot = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: String as PropType<string | undefined> },
    lazyMount: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ColorPickerProps["onValueChange"]>,
    },
    positioning: { default: { placement: "top-start" }, type: Object as PropType<unknown> },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
    value: { default: undefined, type: String as PropType<string | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-testid": _, ...restAttrs } = attrs;
      const isControlled = props.value !== undefined;
      provideColorPickerRootContext({ testId: props.testId });

      // Uncontrolled internal state is kept as a string; we parse on render.
      const internalValue = (isControlled ? undefined : props.defaultValue) ?? "";

      const handleValueChange = (details: ColorPickerValueChangeDetails) => {
        const next = (details as { valueAsString?: unknown }).valueAsString;
        if (!isControlled) {
          // internalValue is a constant here (simple wrapper); consumers can control via `value`.
        }
        props.onValueChange?.(typeof next === "string" ? next : "");
      };

      return h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          ColorPickerPrimitive.Root as ArkPart,
          {
            ...restAttrs,
            class: cn(colorPickerVariants(), props.class, (attrs as { class?: ClassValue }).class),
            "data-testid": props.testId,
            defaultValue: internalValue ? parseColorArk(internalValue) : undefined,
            lazyMount: props.lazyMount,
            onValueChange: props.onValueChange ? handleValueChange : undefined,
            positioning: props.positioning,
            unmountOnExit: props.unmountOnExit,
            value: isControlled && props.value ? parseColorArk(props.value) : undefined,
          },
          () => [slots.default?.(), h(ColorPickerPrimitive.HiddenInput as ArkPart)],
        ),
      );
    };
  },
});

export const ColorPickerClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ClearTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
    onClick: {
      default: undefined,
      type: Function as PropType<((event: MouseEvent) => void) | undefined>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const api = useColorPicker();

      if (!props.clearable) {
        return null;
      }

      const apiTyped = api as {
        getControlProps?: () => { disabled?: boolean; readOnly?: boolean } | undefined;
        value?: { getChannelValue?: (channel: string) => number | string | undefined };
        setValue?: (value: unknown) => void;
      };

      const controlProps = apiTyped.getControlProps?.() as
        | { disabled?: boolean; readOnly?: boolean }
        | undefined;
      if (controlProps?.disabled || controlProps?.readOnly) {
        return null;
      }

      const isCleared = Number(apiTyped.value?.getChannelValue?.("alpha")) === 0;
      if (isCleared) {
        return null;
      }

      return h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
        h(
          InputGroup.Button as ArkPart,
          {
            ...attrs,
            "aria-label": "Clear color",
            class: cn(props.class, (attrs as { class?: ClassValue }).class),
            "data-part": "clear-trigger",
            "data-scope": "color-picker",
            onClick: (event: MouseEvent) => {
              apiTyped.setValue?.(parseColorArk("rgba(0, 0, 0, 0)"));
              props.onClick?.(event);
            },
            size: "icon-xs",
            type: "button",
            variant: "ghost",
          },
          () => h(PhX),
        ),
      );
    };
  },
});

export const ColorPickerControl = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Control",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { testId } = useColorPickerRoot() ?? {};

      return h(
        ColorPickerPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerControlVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-testid": testId,
        },
        () => [
          slots.default?.(),
          props.clearable ? h(ColorPickerClearTrigger, { clearable: true }) : null,
        ],
      );
    };
  },
});

export const ColorPickerTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Trigger",
  setup(_, { attrs, slots }) {
    return () => h(ColorPickerPrimitive.Trigger as ArkPart, { ...attrs }, () => slots.default?.());
  },
});

export const ColorPickerTransparencyGrid = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.TransparencyGrid",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ColorPickerPrimitive.TransparencyGrid as ArkPart, {
        ...attrs,
        class: cn(
          colorPickerInlineVariants(),
          props.class,
          (attrs as { class?: ClassValue }).class,
        ),
      });
  },
});

export const ColorPickerContent = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Content",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      colorPickerTeleport(
        h(ColorPickerPrimitive.Positioner as ArkPart, {}, () =>
          h(
            ColorPickerPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(
                colorPickerContentVariants(),
                props.class,
                (attrs as { class?: ClassValue }).class,
              ),
            },
            () => slots.default?.(),
          ),
        ),
      );
  },
});

export const ColorPickerView = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.View",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.View as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerViewVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerChannelSlider = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ChannelSlider",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = colorPickerChannelSliderVariants();

      return h(
        ColorPickerPrimitive.ChannelSlider as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: cn(props.class, (attrs as { class?: ClassValue }).class) }),
        },
        () => [
          children.default?.(),
          h(ColorPickerPrimitive.ChannelSliderTrack as ArkPart, {
            class: slots.track(),
          }),
          h(ColorPickerPrimitive.ChannelSliderThumb as ArkPart, {
            class: slots.thumb(),
          }),
        ],
      );
    };
  },
});

export const ColorPickerEyeDropperTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.EyeDropperTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    size: { default: "icon-md", type: String },
    variant: { default: "outline", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.EyeDropperTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
        } as unknown as Parameters<typeof h>[1],
        () =>
          h(
            Button as ArkPart,
            {
              class: cn(props.class, (attrs as { class?: ClassValue }).class),
              size: props.size,
              variant: props.variant,
            } as unknown as Parameters<typeof h>[1],
            () => slots.default?.() ?? h(PhEyedropper),
          ),
      );
  },
});

export const ColorPickerSwatchGroup = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchGroup",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.SwatchGroup as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerSwatchGroupVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerSwatchTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchTrigger",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.SwatchTrigger as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerSwatchTriggerVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerSwatch = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Swatch",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.Swatch as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerSwatchVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerSwatchIndicator = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchIndicator",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.SwatchIndicator as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerSwatchIndicatorVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.() ?? h(PhCheck),
      );
  },
});

export const ColorPickerValueText = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ValueText",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.ValueText as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerValueTextVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerValueSwatch = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ValueSwatch",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.ValueSwatch as ArkPart,
        {
          ...attrs,
          class: cn(
            colorPickerValueSwatchVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerArea = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Area",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    showDots: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = colorPickerAreaVariants();

      return h(
        ColorPickerPrimitive.Area as ArkPart,
        {
          ...attrs,
          class: slots.base({
            class: cn(
              {
                "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
                  props.showDots,
              },
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
          }),
        },
        () => [
          h(ColorPickerPrimitive.AreaBackground as ArkPart, {
            class: slots.background(),
          }),
          children.default?.(),
        ],
      );
    };
  },
});

export const ColorPickerAreaThumb = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.AreaThumb",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs }) {
    return () =>
      h(ColorPickerPrimitive.AreaThumb as ArkPart, {
        ...attrs,
        class: cn(
          colorPickerAreaThumbVariants(),
          props.class,
          (attrs as { class?: ClassValue }).class,
        ),
      });
  },
});

export const ColorPickerInput = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Input",
  props: {
    channel: { default: "hex", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ColorPickerPrimitive.ChannelInput as ArkPart,
        {
          ...attrs,
          channel: props.channel,
        },
        () => slots.default?.(),
      );
  },
});

export const ColorPickerSwatchPreview = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchPreview",
  props: { class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> } },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = colorPickerInputSwatchVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: cn(props.class, (attrs as { class?: ClassValue }).class) }),
          "data-part": "input-swatch",
          "data-scope": "color-picker",
        },
        () => [
          h(ColorPickerPrimitive.TransparencyGrid as ArkPart, {
            class: slots.grid(),
          }),
          h(ColorPickerPrimitive.ValueSwatch as ArkPart, {
            class: slots.swatch(),
          }),
          children.default?.(),
        ],
      );
    };
  },
});

export const ColorPickerField = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Field",
  props: {
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(ColorPickerRoot as ArkPart, { ...attrs, clearable: props.clearable }, () => [
        h(ColorPickerControl as ArkPart, { clearable: false }, () => [
          h(InputGroup, {}, () => [
            h(ColorPickerTrigger as ArkPart, { asChild: true }, () =>
              h(InputGroup.Addon as ArkPart, () => h(ColorPickerSwatchPreview as ArkPart)),
            ),
            h(ColorPickerInput as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, { clearable: false }),
            ),
            props.clearable ? h(ColorPickerClearTrigger as ArkPart, { clearable: true }) : null,
          ]),
        ]),
        h(ColorPickerContent as ArkPart, null, () => [
          h(ColorPickerArea as ArkPart, null, () => h(ColorPickerAreaThumb as ArkPart)),
          h(
            ColorPickerView as ArkPart,
            { format: "hsla" } as unknown as Parameters<typeof h>[1],
            () => [
              h("div", { class: colorPickerInline4Variants() }, () => [
                h(ColorPickerEyeDropperTrigger as ArkPart),
                h("div", { class: colorPickerInline5Variants() }, () => [
                  h(
                    ColorPickerChannelSlider as ArkPart,
                    { channel: "hue" } as unknown as Parameters<typeof h>[1],
                  ),
                  h(
                    ColorPickerChannelSlider as ArkPart,
                    { channel: "alpha" } as unknown as Parameters<typeof h>[1],
                    () => h(ColorPickerTransparencyGrid as ArkPart),
                  ),
                ]),
              ]),
            ],
          ),
        ]),
        slots.default?.(),
      ]);
  },
});

export const ColorPicker = Object.assign(ColorPickerRoot, {
  Area: ColorPickerArea,
  AreaThumb: ColorPickerAreaThumb,
  ChannelSlider: ColorPickerChannelSlider,
  ClearTrigger: ColorPickerClearTrigger,
  Content: ColorPickerContent,
  Control: ColorPickerControl,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  Field: ColorPickerField,
  Input: ColorPickerInput,
  Swatch: ColorPickerSwatch,
  SwatchGroup: ColorPickerSwatchGroup,
  SwatchIndicator: ColorPickerSwatchIndicator,
  SwatchPreview: ColorPickerSwatchPreview,
  SwatchTrigger: ColorPickerSwatchTrigger,
  TransparencyGrid: ColorPickerTransparencyGrid,
  Trigger: ColorPickerTrigger,
  ValueSwatch: ColorPickerValueSwatch,
  ValueText: ColorPickerValueText,
  View: ColorPickerView,
});
