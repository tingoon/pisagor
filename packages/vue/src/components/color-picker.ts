import {
  ark,
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerValueChangeDetails,
  type HTMLArkProps,
  parseColor as parseColorArk,
  useColorPickerContext as useColorPicker,
} from "@ark-ui/vue";
import { PhEyedropper, PhX } from "@phosphor-icons/vue";
import type {
  ColorPickerContract,
  ColorPickerRootContract,
} from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  type Component,
  defineComponent,
  h,
  type PropType,
  Teleport,
} from "vue";
import { type LoosePropValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

type FormControlVariant = "primary" | "secondary";
type ClassValue = Parameters<typeof cn>[0];
type ArkPart = Parameters<typeof h>[0];

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
// #endregion

// #region Types
export interface ColorPickerRootProps extends ColorPickerRootContract {
  /** The default color string when uncontrolled. Ignored when `value` is set. */
  defaultValue?: string;
  positioning?: unknown;
  /** The controlled color string. Pair with `onValueChange`. */
  value?: string;
  /** Called with the color string when the value changes. */
  onValueChange?: (value: string) => void;
}

export interface ColorPickerProps
  extends ColorPickerRootProps, ColorPickerContract {
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /**
   * Visual shell variant for the field input. When omitted, resolves from
   * `Surface`.
   */
  variant?: FormControlVariant;
}

export type ColorPickerClearTriggerProps = HTMLArkProps<"button">;

export interface ColorPickerAreaProps {
  /** Overlay a dot grid on the area. */
  showDots?: boolean;
}

export type ColorPickerSwatchPreviewProps = HTMLArkProps<"div">;
// #endregion

// #region Parts
/**
 * Parses a color string into an Ark UI color object.
 *
 * @returns A parsed color value for use with ColorPicker APIs.
 */
export const parseColor = parseColorArk;

const RootBase = withProvider(ColorPickerPrimitive.Root, { name: "Root" });

/** Root with string `value` / `defaultValue` / `onValueChange`. */
const Root = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.Root",
  props: {
    defaultValue: {
      default: undefined,
      type: String as PropType<string | undefined>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ColorPickerRootProps["onValueChange"]>,
    },
    positioning: {
      default: () => ({ placement: "top-start" }),
      type: Object as PropType<LoosePropValue>,
    },
    value: { default: undefined, type: String as PropType<string | undefined> },
  },
  setup(props, { attrs, slots }) {
    const handleValueChange = (details: ColorPickerValueChangeDetails) => {
      props.onValueChange?.(details.valueAsString);
    };

    return () => {
      const isControlled = props.value !== undefined;

      return h(
        RootBase as ArkPart,
        {
          ...attrs,
          defaultValue:
            !isControlled && props.defaultValue
              ? parseColor(props.defaultValue)
              : undefined,
          modelValue:
            isControlled && props.value ? parseColor(props.value) : undefined,
          onValueChange: handleValueChange,
          positioning: props.positioning,
        },
        () => [
          slots.default?.(),
          h(ColorPickerPrimitive.HiddenInput as ArkPart),
        ],
      );
    };
  },
});

const Label = withContext(ColorPickerPrimitive.Label, { name: "Label" });

const Control = withContext(ColorPickerPrimitive.Control, {
  name: "Control",
});

const Trigger = withContext(ColorPickerPrimitive.Trigger, {
  name: "Trigger",
});

const Positioner = withContext(ColorPickerPrimitive.Positioner, {
  name: "Positioner",
});

const Content = withContext(ColorPickerPrimitive.Content, {
  name: "Content",
});

const View = withContext(ColorPickerPrimitive.View, { name: "View" });

const AreaBase = withContext(ColorPickerPrimitive.Area, { name: "Area" });

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
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AreaBase as ArkPart,
        {
          ...attrs,
          class: cn(
            {
              "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
                props.showDots,
            },
            props.class,
          ),
        },
        slots,
      );
  },
});

const AreaBackground = withContext(ColorPickerPrimitive.AreaBackground, {
  name: "AreaBackground",
});

const AreaThumb = withContext(ColorPickerPrimitive.AreaThumb, {
  name: "AreaThumb",
});

const ChannelSlider = withContext(ColorPickerPrimitive.ChannelSlider, {
  name: "ChannelSlider",
});

const ChannelSliderLabel = withContext(
  ColorPickerPrimitive.ChannelSliderLabel,
  { name: "ChannelSliderLabel", slot: "label" },
);

const ChannelSliderTrack = withContext(
  ColorPickerPrimitive.ChannelSliderTrack,
  { name: "ChannelSliderTrack" },
);

const ChannelSliderThumb = withContext(
  ColorPickerPrimitive.ChannelSliderThumb,
  { name: "ChannelSliderThumb" },
);

const ChannelSliderValueText = withContext(
  ColorPickerPrimitive.ChannelSliderValueText,
  { name: "ChannelSliderValueText", slot: "valueText" },
);

// Cast: the Ark input props union is too complex for `withContext` to infer.
const Input = withContext(ColorPickerPrimitive.ChannelInput as Component, {
  defaultProps: { channel: "hex" },
  name: "ChannelInput",
  slot: "channelInput",
});

const TransparencyGrid = withContext(ColorPickerPrimitive.TransparencyGrid, {
  name: "TransparencyGrid",
});

const EyeDropperTriggerBase = withContext(
  ColorPickerPrimitive.EyeDropperTrigger,
  { name: "EyeDropperTrigger" },
);

/** Eye dropper trigger with a localized default `aria-label`. */
const EyeDropperTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.EyeDropperTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        EyeDropperTriggerBase as ArkPart,
        { "aria-label": m("colorPicker.eyeDropper"), ...attrs },
        slots,
      );
  },
});

const FormatSelect = withContext(ColorPickerPrimitive.FormatSelect, {
  name: "FormatSelect",
});

const FormatTrigger = withContext(ColorPickerPrimitive.FormatTrigger, {
  name: "FormatTrigger",
});

const SwatchGroup = withContext(ColorPickerPrimitive.SwatchGroup, {
  name: "SwatchGroup",
});

const SwatchTrigger = withContext(ColorPickerPrimitive.SwatchTrigger, {
  name: "SwatchTrigger",
});

const Swatch = withContext(ColorPickerPrimitive.Swatch, { name: "Swatch" });

const SwatchIndicator = withContext(ColorPickerPrimitive.SwatchIndicator, {
  name: "SwatchIndicator",
});

const ValueText = withContext(ColorPickerPrimitive.ValueText, {
  name: "ValueText",
});

const ValueSwatch = withContext(ColorPickerPrimitive.ValueSwatch, {
  name: "ValueSwatch",
});

/**
 * Clears the color (sets it fully transparent). Not an Ark part; renders a
 * button with a localized default `aria-label`.
 */
const ClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.ClearTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    onClick: {
      default: undefined,
      type: Function as PropType<((event: MouseEvent) => void) | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const styles = useStyles();
    const api = useColorPicker();

    return () =>
      h(
        ark.button as ArkPart,
        {
          "aria-label": m("colorPicker.clearColor"),
          type: "button",
          ...attrs,
          class: styles.slots.clearTrigger({ class: cn(props.class) }),
          "data-part": "clear-trigger",
          "data-scope": "color-picker",
          onClick: (event: MouseEvent) => {
            api.value.setValue(parseColor("rgba(0, 0, 0, 0)"));
            props.onClick?.(event);
          },
        },
        slots,
      );
  },
});

/** Transparency grid with the current color on top, sized for input addons. */
const SwatchPreview = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker.SwatchPreview",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () =>
      h(
        "div",
        {
          ...attrs,
          class: styles.slots.inputSwatch({ class: cn(props.class) }),
          "data-part": "input-swatch",
          "data-scope": "color-picker",
        },
        [
          h(ColorPickerPrimitive.TransparencyGrid as ArkPart, {
            class: styles.slots.inputSwatchGrid(),
          }),
          h(ColorPickerPrimitive.ValueSwatch as ArkPart, {
            class: styles.slots.inputSwatchSwatch(),
          }),
        ],
      );
  },
});
// #endregion

// #region Shorthand
/** Clear button addon; hidden when disabled, read-only, or already cleared. */
const ShorthandClearTrigger = defineComponent({
  name: "ColorPicker.ShorthandClearTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props) {
    const { m } = useLocale();
    const api = useColorPicker();

    return () => {
      const controlProps = api.value.getControlProps() as {
        disabled?: boolean;
        readOnly?: boolean;
      };

      if (
        controlProps.disabled ||
        controlProps.readOnly ||
        api.value.value.getChannelValue("alpha") === 0
      ) {
        return null;
      }

      return h(InputGroup.Addon, { align: "inline-end" }, () =>
        h(ClearTrigger, { asChild: true, class: props.class }, () =>
          h(
            InputGroup.Button as ArkPart,
            {
              "aria-label": m("colorPicker.clearColor"),
              size: "icon-xs",
              variant: "ghost",
            },
            () => h(PhX),
          ),
        ),
      );
    };
  },
});

/** Area plus eye dropper, hue and alpha sliders. */
const DefaultContent = defineComponent({
  name: "ColorPicker.DefaultContent",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<ColorPickerProps["classNames"]>,
    },
  },
  setup(props) {
    const styles = useStyles();

    return () => {
      const classNames = props.classNames;

      return [
        h(Area, { class: classNames?.area }, () => [
          h(AreaBackground, { class: classNames?.areaBackground }),
          h(AreaThumb, { class: classNames?.areaThumb }),
        ]),
        h(View as ArkPart, { class: classNames?.view, format: "hsla" }, () =>
          h(
            "div",
            {
              class: styles.slots.channelRow({
                class: classNames?.channelRow,
              }),
            },
            [
              h(
                EyeDropperTrigger,
                { asChild: true, class: classNames?.eyeDropperTrigger },
                () =>
                  h(Button, { size: "icon-md", variant: "outline" }, () =>
                    h(PhEyedropper),
                  ),
              ),
              h(
                "div",
                {
                  class: styles.slots.channelStack({
                    class: classNames?.channelStack,
                  }),
                },
                (["hue", "alpha"] as const).map((channel) =>
                  h(
                    ChannelSlider as ArkPart,
                    {
                      channel,
                      class: classNames?.channelSlider,
                      key: channel,
                    },
                    () => [
                      channel === "alpha"
                        ? h(TransparencyGrid, {
                            class: classNames?.transparencyGrid,
                          })
                        : null,
                      h(ChannelSliderTrack, {
                        class: classNames?.channelSliderTrack,
                      }),
                      h(ChannelSliderThumb, {
                        class: classNames?.channelSliderThumb,
                      }),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ];
    };
  },
});

export const ColorPickerShorthand = defineComponent({
  inheritAttrs: false,
  name: "ColorPicker",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<ColorPickerProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;

      return h(Root as ArkPart, { ...attrs }, () => [
        h(Control, { class: classNames?.control }, () =>
          h(InputGroup, { variant: props.variant }, () => [
            h(Trigger, { asChild: true, class: classNames?.trigger }, () =>
              h(InputGroup.Addon, () =>
                h(SwatchPreview, { class: classNames?.inputSwatch }),
              ),
            ),
            h(
              Input as ArkPart,
              { asChild: true, class: classNames?.channelInput },
              () => h(InputGroup.Input as ArkPart, { clearable: false }),
            ),
            props.clearable
              ? h(ShorthandClearTrigger, { class: classNames?.clearTrigger })
              : null,
          ]),
        ),
        h(Teleport, { to: "body" }, [
          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () =>
              slots.default
                ? slots.default()
                : h(DefaultContent, { classNames }),
            ),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export const ColorPicker = Object.assign(ColorPickerShorthand, {
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput: Input,
  ChannelSlider,
  ChannelSliderLabel,
  ChannelSliderThumb,
  ChannelSliderTrack,
  ChannelSliderValueText,
  ClearTrigger,
  Content,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  Input,
  Label,
  Positioner,
  Root,
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
