import {
  ColorPicker as ColorPickerPrimitive,
  Portal,
  ark,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/react";
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
  PolymorphicProps,
} from "@ark-ui/react";
import { useUncontrolled } from "@mantine/hooks";
import { CheckIcon, EyedropperIcon, XIcon } from "@phosphor-icons/react";
import type { ColorPickerProps as BaseColorPickerProps } from "@pisagor/props";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useMemo } from "react";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { InputGroup, type InputGroupButtonProps } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { Context: ColorPickerSlotsContext, useStyles } = createSlotRecipeContext(
  {
    name: "ColorPicker",
    recipe: colorPickerRecipe,
  },
);
// #endregion

// #region Types

export type ColorPickerRootProps = Omit<
  ColorPickerRootPrimitiveProps,
  "defaultValue" | "value" | "onValueChange"
>;

export interface ColorPickerProps
  extends ColorPickerRootProps, BaseColorPickerProps {
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

export type ColorPickerSwatchPreviewProps = ComponentPropsWithRef<"div"> &
  PolymorphicProps;
// #endregion

// #region Parts
/**
 * Parses a color string into an Ark UI color object.
 *
 * @returns A parsed color value for use with ColorPicker APIs.
 */
export const parseColor = parseColorArk;

export function ColorPickerRoot({
  variant: _variant,
  clearable: _clearable,
  defaultValue,
  positioning = {
    placement: "top-start",
  },
  value,
  children,
  onValueChange,
  recipe = colorPickerRecipe,
  className,
  ...rest
}: ColorPickerProps) {
  const slots = recipe();
  const [color, setColor, isControlled] = useUncontrolled({
    defaultValue,
    onChange: onValueChange,
    value,
  });

  const parsedColor = useMemo(() => {
    return color ? parseColor(color) : undefined;
  }, [color]);

  const handleValueChange = (e: ColorPickerValueChangeDetails) => {
    setColor(e.valueAsString);
  };

  return (
    <ColorPickerSlotsContext value={{ slots, variants: {} as never }}>
      <ColorPickerPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        defaultValue={!isControlled ? parsedColor : undefined}
        onValueChange={handleValueChange}
        positioning={positioning}
        value={isControlled ? parsedColor : undefined}
      >
        {children}

        <ColorPickerPrimitive.HiddenInput />
      </ColorPickerPrimitive.Root>
    </ColorPickerSlotsContext>
  );
}

export function ColorPickerClearTrigger({
  clearable = false,
  onClick,
  className,
  ...rest
}: ColorPickerClearTriggerProps) {
  const { m } = useLocale();
  const api = useColorPickerContext();

  if (!clearable) {
    return null;
  }

  const controlProps = api.getControlProps() as {
    disabled?: boolean;
    readOnly?: boolean;
  };
  if (controlProps.disabled || controlProps.readOnly) {
    return null;
  }

  const isCleared = api.value.getChannelValue("alpha") === 0;
  if (isCleared) {
    return null;
  }

  return (
    <InputGroup.Addon align="inline-end">
      <InputGroup.Button
        aria-label={m("colorPicker.clearColor")}
        {...rest}
        className={className}
        data-part="clear-trigger"
        data-scope="color-picker"
        onClick={(event) => {
          api.setValue(parseColor("rgba(0, 0, 0, 0)"));
          onClick?.(event);
        }}
        size="icon-xs"
        type="button"
        variant="ghost"
      >
        <XIcon />
      </InputGroup.Button>
    </InputGroup.Addon>
  );
}

export function ColorPickerControl({
  clearable = false,
  children,
  className,
  ...rest
}: ColorPickerControlProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.Control
      {...rest}
      className={slots.control({ className })}
    >
      {children}
      {clearable ? <ColorPickerClearTrigger /> : null}
    </ColorPickerPrimitive.Control>
  );
}

export function ColorPickerTrigger(props: ColorPickerTriggerProps) {
  return <ColorPickerPrimitive.Trigger {...props} />;
}

export function ColorPickerTransparencyGrid({
  className,
  ...rest
}: ColorPickerTransparencyGridProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      className={slots.transparencyGrid({ className })}
    />
  );
}

export function ColorPickerContent({
  className,
  ...rest
}: ColorPickerContentProps) {
  const { slots } = useStyles();

  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content
          {...rest}
          className={slots.content({ className })}
        />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}

export function ColorPickerView({ className, ...rest }: ColorPickerViewProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.View
      {...rest}
      className={slots.view({ className })}
    />
  );
}

export function ColorPickerChannelSlider({
  children,
  className,
  ...rest
}: ColorPickerChannelSliderProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.ChannelSlider
      {...rest}
      className={slots.channelSlider({ className })}
    >
      {children}

      <ColorPickerPrimitive.ChannelSliderTrack
        className={slots.channelSliderTrack()}
      />
      <ColorPickerPrimitive.ChannelSliderThumb
        className={slots.channelSliderThumb()}
      />
    </ColorPickerPrimitive.ChannelSlider>
  );
}

export function ColorPickerEyeDropperTrigger({
  size = "icon-md",
  variant = "outline",
  children,
  ...rest
}: ColorPickerEyeDropperTriggerProps) {
  const { m } = useLocale();

  return (
    <ColorPickerPrimitive.EyeDropperTrigger
      aria-label={m("colorPicker.eyeDropper")}
      {...rest}
      asChild
    >
      <Button size={size} variant={variant}>
        {children || <EyedropperIcon />}
      </Button>
    </ColorPickerPrimitive.EyeDropperTrigger>
  );
}

export function ColorPickerSwatchGroup({
  className,
  ...rest
}: ColorPickerSwatchGroupProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      className={slots.swatchGroup({ className })}
    />
  );
}

export function ColorPickerSwatchTrigger({
  className,
  ...rest
}: ColorPickerSwatchTriggerProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      className={slots.swatchTrigger({ className })}
    />
  );
}

export function ColorPickerSwatch({
  className,
  ...rest
}: ColorPickerSwatchProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.Swatch
      {...rest}
      className={slots.swatch({ className })}
    />
  );
}

export function ColorPickerSwatchIndicator({
  children,
  className,
  ...rest
}: ColorPickerSwatchIndicatorProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      className={slots.swatchIndicator({ className })}
    >
      {children || <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}

export function ColorPickerValueText({
  className,
  ...rest
}: ColorPickerValueTextProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.ValueText
      {...rest}
      className={slots.valueText({ className })}
    />
  );
}

export function ColorPickerValueSwatch({
  className,
  ...rest
}: ColorPickerValueSwatchProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      className={slots.valueSwatch({ className })}
    />
  );
}

export function ColorPickerArea({
  showDots = false,
  children,
  className,
  ...rest
}: ColorPickerAreaProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.Area
      {...rest}
      className={slots.area({
        className: cn(
          {
            "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
              showDots,
          },
          className,
        ),
      })}
    >
      <ColorPickerPrimitive.AreaBackground className={slots.areaBackground()} />

      {children}
    </ColorPickerPrimitive.Area>
  );
}

export function ColorPickerAreaThumb({
  className,
  ...rest
}: ColorPickerAreaThumbProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.AreaThumb
      {...rest}
      className={slots.areaThumb({ className })}
    />
  );
}

export function ColorPickerInput({
  channel = "hex",
  ...rest
}: ColorPickerInputProps) {
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={channel} />;
}

export function ColorPickerLabel({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.Label>) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.Label
      {...rest}
      className={slots.label({ className })}
    />
  );
}

export function ColorPickerFormatSelect({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.FormatSelect>) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.FormatSelect
      {...rest}
      className={slots.formatSelect({ className })}
    />
  );
}

export function ColorPickerSwatchPreview({
  className,
  ...rest
}: ColorPickerSwatchPreviewProps) {
  const { slots } = useStyles();

  return (
    <ark.div
      {...rest}
      className={slots.inputSwatch({ className })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid
        className={slots.inputSwatchGrid()}
      />
      <ColorPickerPrimitive.ValueSwatch className={slots.inputSwatchSwatch()} />
    </ark.div>
  );
}

/**
 * Compact preset that renders a swatch trigger, hex input, and standard color
 * picker popover in one component.
 */
export function ColorPickerField({
  clearable = false,
  variant,
  ...rest
}: ColorPickerProps) {
  return (
    <ColorPickerRoot {...rest} clearable={clearable}>
      <ColorPickerControl clearable={false}>
        <InputGroup variant={variant}>
          <ColorPickerTrigger asChild>
            <InputGroup.Addon>
              <ColorPickerSwatchPreview />
            </InputGroup.Addon>
          </ColorPickerTrigger>
          <ColorPickerInput asChild>
            <InputGroup.Input clearable={false} />
          </ColorPickerInput>
          {clearable ? <ColorPickerClearTrigger /> : null}
        </InputGroup>
      </ColorPickerControl>

      <ColorPickerContent>
        <ColorPickerArea>
          <ColorPickerAreaThumb />
        </ColorPickerArea>
        <ColorPickerFieldView />
      </ColorPickerContent>
    </ColorPickerRoot>
  );
}

function ColorPickerFieldView() {
  const { slots } = useStyles();

  return (
    <ColorPickerView format="hsla">
      <div className={slots.channelRow()}>
        <ColorPickerEyeDropperTrigger />
        <div className={slots.channelStack()}>
          <ColorPickerChannelSlider channel="hue" />
          <ColorPickerChannelSlider channel="alpha">
            <ColorPickerTransparencyGrid />
          </ColorPickerChannelSlider>
        </div>
      </div>
    </ColorPickerView>
  );
}
// #endregion

// #region Display Names
ColorPickerRoot.displayName = "ColorPicker";
ColorPickerClearTrigger.displayName = "ColorPicker.ClearTrigger";
ColorPickerControl.displayName = "ColorPicker.Control";
ColorPickerTrigger.displayName = "ColorPicker.Trigger";
ColorPickerTransparencyGrid.displayName = "ColorPicker.TransparencyGrid";
ColorPickerContent.displayName = "ColorPicker.Content";
ColorPickerView.displayName = "ColorPicker.View";
ColorPickerChannelSlider.displayName = "ColorPicker.ChannelSlider";
ColorPickerEyeDropperTrigger.displayName = "ColorPicker.EyeDropperTrigger";
ColorPickerSwatchGroup.displayName = "ColorPicker.SwatchGroup";
ColorPickerSwatchTrigger.displayName = "ColorPicker.SwatchTrigger";
ColorPickerSwatch.displayName = "ColorPicker.Swatch";
ColorPickerSwatchIndicator.displayName = "ColorPicker.SwatchIndicator";
ColorPickerValueText.displayName = "ColorPicker.ValueText";
ColorPickerValueSwatch.displayName = "ColorPicker.ValueSwatch";
ColorPickerArea.displayName = "ColorPicker.Area";
ColorPickerAreaThumb.displayName = "ColorPicker.AreaThumb";
ColorPickerInput.displayName = "ColorPicker.Input";
ColorPickerSwatchPreview.displayName = "ColorPicker.SwatchPreview";
ColorPickerField.displayName = "ColorPicker.Field";

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
} from "@ark-ui/react";

export const ColorPicker = Object.assign(ColorPickerRoot, {
  Area: ColorPickerArea,
  AreaThumb: ColorPickerAreaThumb,
  ChannelInput: ColorPickerInput,
  ChannelSlider: ColorPickerChannelSlider,
  ClearTrigger: ColorPickerClearTrigger,
  Content: ColorPickerContent,
  Control: ColorPickerControl,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  Field: ColorPickerField,
  FormatSelect: ColorPickerFormatSelect,
  Input: ColorPickerInput,
  Label: ColorPickerLabel,
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
