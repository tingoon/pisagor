import {
  ColorPicker as ColorPickerPrimitive,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/solid";
import type {
  ColorPickerAreaProps as ColorPickerAreaPrimitiveProps,
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerContentProps,
  ColorPickerControlProps as ColorPickerControlPrimitiveProps,
  ColorPickerRootProps as ColorPickerRootPrimitiveProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchProps,
  ColorPickerTriggerProps,
  ColorPickerValueChangeDetails,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/solid";
import type { ColorPickerRootContract } from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, createSignal, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CheckIcon,
  EyedropperIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button, type ButtonProps } from "./button";
import { InputGroup, type InputGroupButtonProps } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

export type ColorPickerRootProps = Omit<
  ColorPickerRootPrimitiveProps,
  "defaultValue" | "value" | "onValueChange"
>;

export interface ColorPickerProps
  extends ColorPickerRootProps, ColorPickerRootContract {
  /**
   * Visual shell variant for preset field input. When omitted, resolves from
   * `Surface`.
   */
  variant?: FormControlVariant;
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
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
  /** Called with the hex color string when the value changes. */
  onValueChange?: (value: string) => void;
}

export interface ColorPickerClearTriggerProps extends InputGroupButtonProps {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface ColorPickerControlProps extends ColorPickerControlPrimitiveProps {
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export type ColorPickerEyeDropperTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.EyeDropperTrigger
> &
  ButtonProps;

export interface ColorPickerAreaProps extends ColorPickerAreaPrimitiveProps {
  showDots?: boolean;
}

export type ColorPickerTransparencyGridProps = ComponentProps<
  typeof ColorPickerPrimitive.TransparencyGrid
>;

export type ColorPickerChannelSliderProps = ComponentProps<
  typeof ColorPickerPrimitive.ChannelSlider
>;

export type ColorPickerSwatchTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchTrigger
>;

export type ColorPickerSwatchIndicatorProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchIndicator
>;

export type ColorPickerInputProps = Partial<ColorPickerChannelInputProps>;

export type ColorPickerSwatchPreviewProps = ComponentProps<"div">;
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

function Root(props: ColorPickerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "clearable",
    "defaultValue",
    "positioning",
    "value",
    "children",
    "onValueChange",
    "class",
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
    if (!isControlled()) setUncontrolled(e.valueAsString);
    local.onValueChange?.(e.valueAsString);
  };

  return (
    <RootBase
      {...rest}
      class={local.class}
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

function ClearTrigger(props: ColorPickerClearTriggerProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["clearable", "onClick", "class"]);
  const api = useColorPickerContext();
  const clearable = () => local.clearable ?? false;

  const visible = createMemo(() => {
    if (!clearable()) return false;
    const controlProps = api().getControlProps() as {
      disabled?: boolean;
      readOnly?: boolean;
    };
    if (controlProps.disabled || controlProps.readOnly) return false;

    return api().value.getChannelValue("alpha") !== 0;
  });

  return (
    <Show when={visible()}>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button
          aria-label={m("colorPicker.clearColor")}
          {...rest}
          class={local.class}
          data-part="clear-trigger"
          data-scope="color-picker"
          onClick={(event) => {
            api().setValue(parseColor("rgba(0, 0, 0, 0)"));
            if (typeof local.onClick === "function") local.onClick(event);
          }}
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <XIcon />
        </InputGroup.Button>
      </InputGroup.Addon>
    </Show>
  );
}

const ControlBase = withContext<ColorPickerControlProps>(
  ColorPickerPrimitive.Control,
  {
    name: "Control",
  },
);

function Control(props: ColorPickerControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);

  return (
    <ControlBase {...rest} class={local.class}>
      {local.children}
      <Show when={local.clearable}>
        <ClearTrigger clearable />
      </Show>
    </ControlBase>
  );
}

function Trigger(props: ColorPickerTriggerProps): JSX.Element {
  return <ColorPickerPrimitive.Trigger {...props} />;
}

function TransparencyGrid(
  props: ColorPickerTransparencyGridProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      class={styles.slots.transparencyGrid({ class: local.class })}
    />
  );
}

function Content(props: ColorPickerContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content
          {...rest}
          class={styles.slots.content({ class: local.class })}
        />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}

function View(props: ColorPickerViewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.View
      {...rest}
      class={styles.slots.view({ class: local.class })}
    />
  );
}

function ChannelSlider(props: ColorPickerChannelSliderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.ChannelSlider
      {...rest}
      class={styles.slots.channelSlider({ class: local.class })}
    >
      {local.children}
      <ColorPickerPrimitive.ChannelSliderTrack
        class={styles.slots.channelSliderTrack()}
      />
      <ColorPickerPrimitive.ChannelSliderThumb
        class={styles.slots.channelSliderThumb()}
      />
    </ColorPickerPrimitive.ChannelSlider>
  );
}

function EyeDropperTrigger(
  props: ColorPickerEyeDropperTriggerProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);

  return (
    <ColorPickerPrimitive.EyeDropperTrigger
      aria-label={m("colorPicker.eyeDropper")}
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          size={local.size ?? "icon-md"}
          variant={local.variant ?? "outline"}
        >
          {local.children ?? <EyedropperIcon />}
        </Button>
      )}
    />
  );
}

function SwatchGroup(props: ColorPickerSwatchGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      class={styles.slots.swatchGroup({ class: local.class })}
    />
  );
}

function SwatchTrigger(props: ColorPickerSwatchTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      class={styles.slots.swatchTrigger({ class: local.class })}
    />
  );
}

function Swatch(props: ColorPickerSwatchProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.Swatch
      {...rest}
      class={styles.slots.swatch({ class: local.class })}
    />
  );
}

function SwatchIndicator(props: ColorPickerSwatchIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      class={styles.slots.swatchIndicator({ class: local.class })}
    >
      {local.children ?? <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}

function ValueText(props: ColorPickerValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.ValueText
      {...rest}
      class={styles.slots.valueText({ class: local.class })}
    />
  );
}

function ValueSwatch(props: ColorPickerValueSwatchProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      class={styles.slots.valueSwatch({ class: local.class })}
    />
  );
}

function Area(props: ColorPickerAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["showDots", "children", "class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.Area
      {...rest}
      class={styles.slots.area({
        class: cn(
          local.showDots &&
            "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))",
          local.class,
        ),
      })}
    >
      <ColorPickerPrimitive.AreaBackground
        class={styles.slots.areaBackground()}
      />
      {local.children}
    </ColorPickerPrimitive.Area>
  );
}

function AreaThumb(props: ColorPickerAreaThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.AreaThumb
      {...rest}
      class={styles.slots.areaThumb({ class: local.class })}
    />
  );
}

function Input(props: ColorPickerInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["channel"]);

  return (
    <ColorPickerPrimitive.ChannelInput
      {...rest}
      channel={local.channel ?? "hex"}
    />
  );
}

function Label(
  props: ComponentProps<typeof ColorPickerPrimitive.Label>,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.Label
      {...rest}
      class={styles.slots.label({ class: local.class })}
    />
  );
}

function FormatSelect(
  props: ComponentProps<typeof ColorPickerPrimitive.FormatSelect>,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ColorPickerPrimitive.FormatSelect
      {...rest}
      class={styles.slots.formatSelect({ class: local.class })}
    />
  );
}

function SwatchPreview(props: ColorPickerSwatchPreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <div
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
    </div>
  );
}

/**
 * Compact preset that renders a swatch trigger, hex input, and standard color
 * picker popover in one component.
 */
function Field(props: ColorPickerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "variant"]);
  const clearable = () => local.clearable ?? false;

  return (
    <Root {...rest} clearable={clearable()}>
      <Control clearable={false}>
        <InputGroup variant={local.variant}>
          <Trigger
            asChild={(triggerProps) => (
              <InputGroup.Addon {...triggerProps()}>
                <SwatchPreview />
              </InputGroup.Addon>
            )}
          />
          <Input
            asChild={(inputProps) => (
              <InputGroup.Input {...inputProps()} clearable={false} />
            )}
          />
          <Show when={clearable()}>
            <ClearTrigger clearable />
          </Show>
        </InputGroup>
      </Control>
      <Content>
        <Area>
          <AreaThumb />
        </Area>
        <FieldView />
      </Content>
    </Root>
  );
}

function FieldView(): JSX.Element {
  const styles = useStyles();

  return (
    <View format="hsla">
      <div class={styles.slots.channelRow()}>
        <EyeDropperTrigger />
        <div class={styles.slots.channelStack()}>
          <ChannelSlider channel="hue" />
          <ChannelSlider channel="alpha">
            <TransparencyGrid />
          </ChannelSlider>
        </div>
      </div>
    </View>
  );
}
// #endregion

export type {
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerContentProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchProps,
  ColorPickerTriggerProps,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/solid";

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
