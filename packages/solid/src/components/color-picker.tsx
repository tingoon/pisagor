import {
  ColorPicker as ColorPickerPrimitive,
  ark,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/solid";
import type {
  ColorPickerAreaProps as ColorPickerAreaPrimitiveProps,
  ColorPickerAreaBackgroundProps,
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerChannelSliderLabelProps,
  ColorPickerChannelSliderProps,
  ColorPickerChannelSliderThumbProps,
  ColorPickerChannelSliderTrackProps,
  ColorPickerChannelSliderValueTextProps,
  ColorPickerContentProps,
  ColorPickerControlProps,
  ColorPickerEyeDropperTriggerProps,
  ColorPickerFormatSelectProps,
  ColorPickerFormatTriggerProps,
  ColorPickerLabelProps,
  ColorPickerPositionerProps,
  ColorPickerRootProps as ColorPickerRootPrimitiveProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchIndicatorProps,
  ColorPickerSwatchProps,
  ColorPickerSwatchTriggerProps,
  ColorPickerTransparencyGridProps,
  ColorPickerTriggerProps,
  ColorPickerValueChangeDetails,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
  HTMLArkProps,
} from "@ark-ui/solid";
import type {
  ColorPickerContract,
  ColorPickerRootContract,
} from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, createSignal, For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { EyedropperIcon, XIcon, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface ColorPickerRootProps
  extends
    Omit<
      ColorPickerRootPrimitiveProps,
      "defaultValue" | "value" | "onValueChange"
    >,
    ColorPickerRootContract {
  /**
   * The default value of the color picker when uncontrolled.
   *
   * @remarks
   *   Ignored when `value` is set.
   */
  defaultValue?: string;
  /**
   * The controlled color value.
   *
   * @remarks
   *   When set, `defaultValue` is ignored. Pair with `onValueChange` to handle
   *   updates.
   */
  value?: string;
  /** Called with the color string when the value changes. */
  onValueChange?: (value: string) => void;
}

export interface ColorPickerProps
  extends ColorPickerRootProps, ColorPickerContract {
  /** Popover content; defaults to the area, eye dropper, hue and alpha sliders. */
  children?: JSX.Element;
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

export interface ColorPickerAreaProps extends ColorPickerAreaPrimitiveProps {
  /** Overlay a dot grid on the area. */
  showDots?: boolean;
}

export type ColorPickerInputProps = Partial<ColorPickerChannelInputProps>;

export type ColorPickerSwatchPreviewProps = HTMLArkProps<"div">;
// #endregion

// #region Parts
/**
 * Parses a color string into an Ark UI color object.
 *
 * @returns A parsed color value for use with ColorPicker APIs.
 */
export const parseColor = parseColorArk;

const RootBase = withProvider<
  ColorPickerRootPrimitiveProps & ColorPickerRootContract
>(ColorPickerPrimitive.Root, { name: "Root" });

/** Root with string `value` / `defaultValue` / `onValueChange`. */
function Root(props: ColorPickerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "defaultValue",
    "positioning",
    "value",
    "children",
    "onValueChange",
  ]);
  const isControlled = () => local.value !== undefined;
  const [uncontrolled, setUncontrolled] = createSignal(local.defaultValue);
  const color = createMemo(() =>
    isControlled() ? local.value : uncontrolled(),
  );
  const parsedColor = createMemo(() => {
    const value = color();

    return value ? parseColor(value) : undefined;
  });

  const handleValueChange = (e: ColorPickerValueChangeDetails) => {
    if (!isControlled()) {
      setUncontrolled(e.valueAsString);
    }
    local.onValueChange?.(e.valueAsString);
  };

  return (
    <RootBase
      {...rest}
      defaultValue={!isControlled() ? parsedColor() : undefined}
      onValueChange={handleValueChange}
      positioning={local.positioning ?? { placement: "top-start" }}
      value={isControlled() ? parsedColor() : undefined}
    >
      {local.children}

      <ColorPickerPrimitive.HiddenInput />
    </RootBase>
  );
}

const Label = withContext<ColorPickerLabelProps>(ColorPickerPrimitive.Label, {
  name: "Label",
});

const Control = withContext<ColorPickerControlProps>(
  ColorPickerPrimitive.Control,
  { name: "Control" },
);

const Trigger = withContext<ColorPickerTriggerProps>(
  ColorPickerPrimitive.Trigger,
  { name: "Trigger" },
);

const Positioner = withContext<ColorPickerPositionerProps>(
  ColorPickerPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<ColorPickerContentProps>(
  ColorPickerPrimitive.Content,
  { name: "Content" },
);

const View = withContext<ColorPickerViewProps>(ColorPickerPrimitive.View, {
  name: "View",
});

const AreaBase = withContext<ColorPickerAreaPrimitiveProps>(
  ColorPickerPrimitive.Area,
  { name: "Area" },
);

function Area(props: ColorPickerAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["showDots", "class"]);

  return (
    <AreaBase
      {...rest}
      class={cn(
        {
          "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
            local.showDots ?? false,
        },
        local.class,
      )}
    />
  );
}

const AreaBackground = withContext<ColorPickerAreaBackgroundProps>(
  ColorPickerPrimitive.AreaBackground,
  { name: "AreaBackground" },
);

const AreaThumb = withContext<ColorPickerAreaThumbProps>(
  ColorPickerPrimitive.AreaThumb,
  { name: "AreaThumb" },
);

const ChannelSlider = withContext<ColorPickerChannelSliderProps>(
  ColorPickerPrimitive.ChannelSlider,
  { name: "ChannelSlider" },
);

const ChannelSliderLabel = withContext<ColorPickerChannelSliderLabelProps>(
  ColorPickerPrimitive.ChannelSliderLabel,
  { name: "ChannelSliderLabel", slot: "label" },
);

const ChannelSliderTrack = withContext<ColorPickerChannelSliderTrackProps>(
  ColorPickerPrimitive.ChannelSliderTrack,
  { name: "ChannelSliderTrack" },
);

const ChannelSliderThumb = withContext<ColorPickerChannelSliderThumbProps>(
  ColorPickerPrimitive.ChannelSliderThumb,
  { name: "ChannelSliderThumb" },
);

const ChannelSliderValueText =
  withContext<ColorPickerChannelSliderValueTextProps>(
    ColorPickerPrimitive.ChannelSliderValueText,
    { name: "ChannelSliderValueText", slot: "valueText" },
  );

const Input = withContext<ColorPickerInputProps>(
  ColorPickerPrimitive.ChannelInput,
  {
    defaultProps: { channel: "hex" },
    name: "ChannelInput",
    slot: "channelInput",
  },
);

const TransparencyGrid = withContext<ColorPickerTransparencyGridProps>(
  ColorPickerPrimitive.TransparencyGrid,
  { name: "TransparencyGrid" },
);

const EyeDropperTriggerBase = withContext<ColorPickerEyeDropperTriggerProps>(
  ColorPickerPrimitive.EyeDropperTrigger,
  { name: "EyeDropperTrigger" },
);

/** Eye dropper trigger with a localized default `aria-label`. */
function EyeDropperTrigger(
  props: ColorPickerEyeDropperTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <EyeDropperTriggerBase
      aria-label={m("colorPicker.eyeDropper")}
      {...props}
    />
  );
}

const FormatSelect = withContext<ColorPickerFormatSelectProps>(
  ColorPickerPrimitive.FormatSelect,
  { name: "FormatSelect" },
);

const FormatTrigger = withContext<ColorPickerFormatTriggerProps>(
  ColorPickerPrimitive.FormatTrigger,
  { name: "FormatTrigger" },
);

const SwatchGroup = withContext<ColorPickerSwatchGroupProps>(
  ColorPickerPrimitive.SwatchGroup,
  { name: "SwatchGroup" },
);

const SwatchTrigger = withContext<ColorPickerSwatchTriggerProps>(
  ColorPickerPrimitive.SwatchTrigger,
  { name: "SwatchTrigger" },
);

const Swatch = withContext<ColorPickerSwatchProps>(
  ColorPickerPrimitive.Swatch,
  { name: "Swatch" },
);

const SwatchIndicator = withContext<ColorPickerSwatchIndicatorProps>(
  ColorPickerPrimitive.SwatchIndicator,
  { name: "SwatchIndicator" },
);

const ValueText = withContext<ColorPickerValueTextProps>(
  ColorPickerPrimitive.ValueText,
  { name: "ValueText" },
);

const ValueSwatch = withContext<ColorPickerValueSwatchProps>(
  ColorPickerPrimitive.ValueSwatch,
  { name: "ValueSwatch" },
);

/**
 * Clears the color (sets it fully transparent). Not an Ark part; renders a
 * button with a localized default `aria-label`.
 */
function ClearTrigger(props: ColorPickerClearTriggerProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class", "onClick"]);
  const styles = useStyles();
  const api = useColorPickerContext();

  return (
    <ark.button
      aria-label={m("colorPicker.clearColor")}
      type="button"
      {...rest}
      class={styles.slots.clearTrigger({ class: local.class })}
      data-part="clear-trigger"
      data-scope="color-picker"
      onClick={(event) => {
        api().setValue(parseColor("rgba(0, 0, 0, 0)"));
        if (typeof local.onClick === "function") {
          local.onClick(event);
        }
      }}
    />
  );
}

/** Transparency grid with the current color on top, sized for input addons. */
function SwatchPreview(props: ColorPickerSwatchPreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ark.div
      {...rest}
      class={styles.slots.inputSwatch({ class: local.class })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid
        class={styles.slots.inputSwatchGrid()}
      />
      <ColorPickerPrimitive.ValueSwatch
        class={styles.slots.inputSwatchSwatch()}
      />
    </ark.div>
  );
}
// #endregion

// #region Shorthand
/** Clear button addon; hidden when disabled, read-only, or already cleared. */
function ShorthandClearTrigger(props: { class?: string }): JSX.Element {
  const { m } = useLocale();
  const api = useColorPickerContext();
  const visible = createMemo(() => {
    const controlProps = api().getControlProps() as {
      disabled?: boolean;
      readOnly?: boolean;
    };

    return (
      !controlProps.disabled &&
      !controlProps.readOnly &&
      api().value.getChannelValue("alpha") !== 0
    );
  });

  return (
    <Show when={visible()}>
      <InputGroup.Addon align="inline-end">
        <ClearTrigger
          asChild={(triggerProps) => (
            <InputGroup.Button
              {...triggerProps()}
              aria-label={m("colorPicker.clearColor")}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon />
            </InputGroup.Button>
          )}
          class={props.class}
        />
      </InputGroup.Addon>
    </Show>
  );
}

/** Area plus eye dropper, hue and alpha sliders. */
function DefaultContent(
  props: Pick<ColorPickerProps, "classNames">,
): JSX.Element {
  const styles = useStyles();

  return (
    <>
      <Area class={props.classNames?.area}>
        <AreaBackground class={props.classNames?.areaBackground} />
        <AreaThumb class={props.classNames?.areaThumb} />
      </Area>

      <View class={props.classNames?.view} format="hsla">
        <div
          class={styles.slots.channelRow({
            class: props.classNames?.channelRow,
          })}
        >
          <EyeDropperTrigger
            asChild={(triggerProps) => (
              <Button {...triggerProps()} size="icon-md" variant="outline">
                <EyedropperIcon />
              </Button>
            )}
            class={props.classNames?.eyeDropperTrigger}
          />

          <div
            class={styles.slots.channelStack({
              class: props.classNames?.channelStack,
            })}
          >
            <For each={["hue", "alpha"] as const}>
              {(channel) => (
                <ChannelSlider
                  channel={channel}
                  class={props.classNames?.channelSlider}
                >
                  <Show when={channel === "alpha"}>
                    <TransparencyGrid
                      class={props.classNames?.transparencyGrid}
                    />
                  </Show>
                  <ChannelSliderTrack
                    class={props.classNames?.channelSliderTrack}
                  />
                  <ChannelSliderThumb
                    class={props.classNames?.channelSliderThumb}
                  />
                </ChannelSlider>
              )}
            </For>
          </div>
        </div>
      </View>
    </>
  );
}

export function ColorPickerShorthand(props: ColorPickerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "clearable",
    "variant",
  ]);

  return (
    <Root {...rest}>
      <Control class={local.classNames?.control}>
        <InputGroup variant={local.variant}>
          <Trigger
            asChild={(triggerProps) => (
              <InputGroup.Addon {...triggerProps()}>
                <SwatchPreview class={local.classNames?.inputSwatch} />
              </InputGroup.Addon>
            )}
            class={local.classNames?.trigger}
          />

          <Input
            asChild={(inputProps) => <InputGroup.Input {...inputProps()} />}
            class={local.classNames?.channelInput}
          />

          <Show when={local.clearable ?? false}>
            <ShorthandClearTrigger class={local.classNames?.clearTrigger} />
          </Show>
        </InputGroup>
      </Control>

      <Portal>
        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show
              fallback={<DefaultContent classNames={local.classNames} />}
              when={local.children}
            >
              {local.children}
            </Show>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  ColorPickerAreaBackgroundProps,
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerChannelSliderLabelProps,
  ColorPickerChannelSliderProps,
  ColorPickerChannelSliderThumbProps,
  ColorPickerChannelSliderTrackProps,
  ColorPickerChannelSliderValueTextProps,
  ColorPickerContentProps,
  ColorPickerControlProps,
  ColorPickerEyeDropperTriggerProps,
  ColorPickerFormatSelectProps,
  ColorPickerFormatTriggerProps,
  ColorPickerLabelProps,
  ColorPickerPositionerProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchIndicatorProps,
  ColorPickerSwatchProps,
  ColorPickerSwatchTriggerProps,
  ColorPickerTransparencyGridProps,
  ColorPickerTriggerProps,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/solid";

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
