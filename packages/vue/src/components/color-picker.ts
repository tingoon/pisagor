import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerValueChangeDetails,
  parseColor as parseColorArk,
  useColorPickerContext as useColorPicker,
} from "@ark-ui/vue";
import { PhCheck, PhEyedropper, PhX } from "@phosphor-icons/vue";
import type { ColorPickerRootContract } from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useLocale } from "./provider/context";

type FormControlVariant = "primary" | "secondary";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, Teleport } from "vue";
import { type LoosePropValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

export interface ColorPickerProps extends ColorPickerRootContract {
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

function colorPickerTeleport(
  content: ReturnType<typeof h> | Array<ReturnType<typeof h>>,
) {
  return h(Teleport, { to: "body" }, [content]);
}

const RootBase = withProvider<ColorPickerProps>(ColorPickerPrimitive.Root, {
  name: "Root",
});

const Root = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
    defaultValue: {
      default: undefined,
      type: String as PropType<string | undefined>,
    },
    lazyMount: { default: undefined, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ColorPickerProps["onValueChange"]>,
    },
    positioning: {
      default: { placement: "top-start" },
      type: Object as PropType<LoosePropValue>,
    },
    recipe: {
      default: colorPickerRecipe,
      type: Function as PropType<typeof colorPickerRecipe>,
    },
    unmountOnExit: { default: undefined, type: Boolean },
    value: { default: undefined, type: String as PropType<string | undefined> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const isControlled = props.value !== undefined;
      const internalValue =
        (isControlled ? undefined : props.defaultValue) ?? "";

      const handleValueChange = (details: ColorPickerValueChangeDetails) => {
        const next = (details as { valueAsString?: unknown }).valueAsString;
        props.onValueChange?.(typeof next === "string" ? next : "");
      };

      return h(
        RootBase as ArkPart,
        {
          ...attrs,
          class: props.class,
          defaultValue: internalValue
            ? parseColorArk(internalValue)
            : undefined,
          lazyMount: props.lazyMount,
          onValueChange: props.onValueChange ? handleValueChange : undefined,
          positioning: props.positioning,
          recipe: props.recipe,
          unmountOnExit: props.unmountOnExit,
          value:
            isControlled && props.value
              ? parseColorArk(props.value)
              : undefined,
        },
        () => [
          slots.default?.(),
          h(ColorPickerPrimitive.HiddenInput as ArkPart),
        ],
      );
    };
  },
});

const ClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ClearTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
    onClick: {
      default: undefined,
      type: Function as PropType<((event: MouseEvent) => void) | undefined>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const api = useColorPicker();

      if (!props.clearable) {
        return null;
      }

      const apiTyped = api as {
        getControlProps?: () =>
          { disabled?: boolean; readOnly?: boolean } | undefined;
        value?: {
          getChannelValue?: (channel: string) => number | string | undefined;
        };
        setValue?: (value: unknown) => void;
      };

      const controlProps = apiTyped.getControlProps?.() as
        { disabled?: boolean; readOnly?: boolean } | undefined;
      if (controlProps?.disabled || controlProps?.readOnly) {
        return null;
      }

      const isCleared =
        Number(apiTyped.value?.getChannelValue?.("alpha")) === 0;
      if (isCleared) {
        return null;
      }

      return h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
        h(
          InputGroup.Button as ArkPart,
          {
            "aria-label": m("colorPicker.clearColor"),
            ...attrs,
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

const ControlBase = withContext(ColorPickerPrimitive.Control, {
  name: "Control",
});

const Control = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Control",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    clearable: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(ControlBase as ArkPart, { ...attrs, class: props.class }, () => [
        slots.default?.(),
        props.clearable ? h(ClearTrigger, { clearable: true }) : null,
      ]);
  },
});

const Trigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Trigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(ColorPickerPrimitive.Trigger as ArkPart, { ...attrs }, () =>
        slots.default?.(),
      );
  },
});

const TransparencyGrid = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.TransparencyGrid",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () =>
      h(ColorPickerPrimitive.TransparencyGrid as ArkPart, {
        ...attrs,
        class: cn(
          styles.slots.transparencyGrid(),
          props.class,
          (attrs as { class?: ClassValue }).class,
        ),
      });
  },
});

const Content = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      colorPickerTeleport(
        h(ColorPickerPrimitive.Positioner as ArkPart, {}, () =>
          h(
            ColorPickerPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(
                styles.slots.content(),
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

const View = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.View",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.View as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.view(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const ChannelSlider = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ChannelSlider",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useStyles();

    return () => {
      const slots = styles.slots;

      return h(
        ColorPickerPrimitive.ChannelSlider as ArkPart,
        {
          ...attrs,
          class: slots.channelSlider({
            class: cn(props.class, (attrs as { class?: ClassValue }).class),
          }),
        },
        () => [
          children.default?.(),
          h(ColorPickerPrimitive.ChannelSliderTrack as ArkPart, {
            class: slots.channelSliderTrack(),
          }),
          h(ColorPickerPrimitive.ChannelSliderThumb as ArkPart, {
            class: slots.channelSliderThumb(),
          }),
        ],
      );
    };
  },
});

const EyeDropperTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.EyeDropperTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    size: { default: "icon-md", type: String },
    variant: { default: "outline", type: String },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ColorPickerPrimitive.EyeDropperTrigger as ArkPart,
        {
          "aria-label": m("colorPicker.eyeDropper"),
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

const SwatchGroup = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.SwatchGroup as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.swatchGroup(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const SwatchTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.SwatchTrigger as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.swatchTrigger(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const Swatch = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Swatch",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.Swatch as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.swatch(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const SwatchIndicator = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchIndicator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.SwatchIndicator as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.swatchIndicator(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.() ?? h(PhCheck),
      );
  },
});

const ValueText = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ValueText",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.ValueText as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.valueText(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const ValueSwatch = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ValueSwatch",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.ValueSwatch as ArkPart,
        {
          ...attrs,
          class: cn(
            styles.slots.valueSwatch(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        () => slots.default?.(),
      );
  },
});

const Area = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Area",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    showDots: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useStyles();

    return () => {
      const slots = styles.slots;

      return h(
        ColorPickerPrimitive.Area as ArkPart,
        {
          ...attrs,
          class: slots.area({
            class: cn(
              {
                "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
                  props.showDots,
              },
              props.class,
              (attrs as { class?: ClassValue }).class,
            ),
          }),
        },
        () => [
          h(ColorPickerPrimitive.AreaBackground as ArkPart, {
            class: slots.areaBackground(),
          }),
          children.default?.(),
        ],
      );
    };
  },
});

const AreaThumb = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.AreaThumb",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () =>
      h(ColorPickerPrimitive.AreaThumb as ArkPart, {
        ...attrs,
        class: cn(
          styles.slots.areaThumb(),
          props.class,
          (attrs as { class?: ClassValue }).class,
        ),
      });
  },
});

const Input = defineComponent({
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

const Label = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Label",
  setup(_, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ColorPickerPrimitive.Label as ArkPart,
        {
          ...attrs,
          class: styles.slots.label({
            class: attrs.class as string | undefined,
          }),
        },
        slots,
      );
  },
});

const FormatSelect = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.FormatSelect",
  setup(_, { attrs }) {
    const styles = useStyles();

    return () =>
      h(ColorPickerPrimitive.FormatSelect as ArkPart, {
        ...attrs,
        class: styles.slots.formatSelect({
          class: attrs.class as string | undefined,
        }),
      });
  },
});

const SwatchPreview = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchPreview",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useStyles();

    return () => {
      const slots = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: slots.inputSwatch({
            class: cn(props.class, (attrs as { class?: ClassValue }).class),
          }),
          "data-part": "input-swatch",
          "data-scope": "color-picker",
        },
        () => [
          h(ColorPickerPrimitive.TransparencyGrid as ArkPart, {
            class: slots.inputSwatchGrid(),
          }),
          h(ColorPickerPrimitive.ValueSwatch as ArkPart, {
            class: slots.inputSwatchSwatch(),
          }),
          children.default?.(),
        ],
      );
    };
  },
});

const Field = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Field",
  props: {
    clearable: { default: false, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<"primary" | "secondary">,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(Root as ArkPart, { ...attrs, clearable: props.clearable }, () => [
        h(Control as ArkPart, { clearable: false }, () => [
          h(InputGroup, { variant: props.variant }, () => [
            h(Trigger as ArkPart, { asChild: true }, () =>
              h(InputGroup.Addon as ArkPart, () => h(SwatchPreview as ArkPart)),
            ),
            h(Input as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, { clearable: false }),
            ),
            props.clearable
              ? h(ClearTrigger as ArkPart, { clearable: true })
              : null,
          ]),
        ]),
        h(Content as ArkPart, null, () => [
          h(Area as ArkPart, null, () => h(AreaThumb as ArkPart)),
          h(
            View as ArkPart,
            { format: "hsla" } as unknown as Parameters<typeof h>[1],
            () => [
              h("div", { class: styles.slots.channelRow() }, [
                h(EyeDropperTrigger as ArkPart),
                h("div", { class: styles.slots.channelStack() }, [
                  h(
                    ChannelSlider as ArkPart,
                    { channel: "hue" } as unknown as Parameters<typeof h>[1],
                  ),
                  h(
                    ChannelSlider as ArkPart,
                    { channel: "alpha" } as unknown as Parameters<typeof h>[1],
                    () => h(TransparencyGrid as ArkPart),
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

export const ColorPicker = Object.assign(Root, {
  Area,
  AreaThumb,
  ChannelInput: Input,
  ChannelSlider,
  ClearTrigger,
  Content,
  Control,
  EyeDropperTrigger,
  Field,
  FormatSelect,
  Input,
  Label,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchPreview,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueSwatch,
  ValueText,
  View,
});
