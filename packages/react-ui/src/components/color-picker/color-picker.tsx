import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerValueChangeDetails,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/react/color-picker";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { useUncontrolled } from "@mantine/hooks";
import { CheckIcon, EyedropperIcon, XIcon } from "@phosphor-icons/react";
import { colorPickerVariants } from "@pisagor/recipes/color-picker";
import { cn } from "@pisagor/utils";
import { type ComponentProps, useMemo } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { Button, type ButtonProps } from "../button";
import { InputGroup, type InputGroupButtonProps } from "../input-group";
import { ColorPickerSlotsContext, useColorPicker } from "./color-picker.context";

// #region Types
export type ColorPickerRootProps = Omit<
  ComponentProps<typeof ColorPickerPrimitive.Root>,
  "defaultValue" | "value" | "onValueChange"
>;

export interface ColorPickerProps extends ColorPickerRootProps {
  /** Visual shell variant for preset field input. When omitted, resolves from `Surface`. */
  variant?: FormControlVariant;
  /**
   * The default value of the color picker when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: string;
  /**
   * The controlled color value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: string;
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
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

export type ColorPickerControlProps = ComponentProps<typeof ColorPickerPrimitive.Control> & {
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
};

export type ColorPickerEyeDropperTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.EyeDropperTrigger
> &
  ButtonProps;

export type ColorPickerAreaProps = ComponentProps<typeof ColorPickerPrimitive.Area> & {
  /**
   *
   */
  showDots?: boolean;
};

export type ColorPickerTriggerProps = ComponentProps<typeof ColorPickerPrimitive.Trigger>;

export type ColorPickerTransparencyGridProps = ComponentProps<
  typeof ColorPickerPrimitive.TransparencyGrid
>;

export type ColorPickerContentProps = ComponentProps<typeof ColorPickerPrimitive.Content>;

export type ColorPickerViewProps = ComponentProps<typeof ColorPickerPrimitive.View>;

export type ColorPickerChannelSliderProps = ComponentProps<
  typeof ColorPickerPrimitive.ChannelSlider
>;

export type ColorPickerSwatchGroupProps = ComponentProps<typeof ColorPickerPrimitive.SwatchGroup>;

export type ColorPickerSwatchTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchTrigger
>;

export type ColorPickerSwatchProps = ComponentProps<typeof ColorPickerPrimitive.Swatch>;

export type ColorPickerSwatchIndicatorProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchIndicator
>;

export type ColorPickerValueTextProps = ComponentProps<typeof ColorPickerPrimitive.ValueText>;

export type ColorPickerValueSwatchProps = ComponentProps<typeof ColorPickerPrimitive.ValueSwatch>;

export type ColorPickerAreaThumbProps = ComponentProps<typeof ColorPickerPrimitive.AreaThumb>;

export type ColorPickerInputProps = Partial<
  ComponentProps<typeof ColorPickerPrimitive.ChannelInput>
>;

export interface ColorPickerSwatchPreviewProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
/**
 * Parses a color string into an Ark UI color object.
 *
 * @returns A parsed color value for use with ColorPicker APIs.
 */
export const parseColor = parseColorArk;

export function ColorPickerRoot({
  value,
  defaultValue,
  positioning = {
    placement: "top-start",
  },
  onValueChange,
  variant,
  className,
  children,
  ...rest
}: ColorPickerProps) {
  const slots = useMemo(() => colorPickerVariants(), []);
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
    <FormControlVariantProvider value={variant}>
      <ColorPickerSlotsContext value={{ slots }}>
        <ColorPickerPrimitive.Root
          className={slots.base({ className })}
          defaultValue={!isControlled ? parsedColor : undefined}
          onValueChange={handleValueChange}
          positioning={positioning}
          value={isControlled ? parsedColor : undefined}
          {...rest}
        >
          {children}

          <ColorPickerPrimitive.HiddenInput />
        </ColorPickerPrimitive.Root>
      </ColorPickerSlotsContext>
    </FormControlVariantProvider>
  );
}

export function ColorPickerClearTrigger({
  clearable = false,
  className,
  onClick,
  ...rest
}: ColorPickerClearTriggerProps) {
  const api = useColorPickerContext();

  if (!clearable) {
    return null;
  }

  const controlProps = api.getControlProps() as { disabled?: boolean; readOnly?: boolean };
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
        {...rest}
        aria-label="Clear color"
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
  className,
  children,
  ...rest
}: ColorPickerControlProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.Control {...rest} className={slots.control({ className })}>
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
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      className={slots.transparencyGrid({ className })}
    />
  );
}

export function ColorPickerContent({ className, ...rest }: ColorPickerContentProps) {
  const { slots } = useColorPicker();

  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content {...rest} className={slots.content({ className })} />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}

export function ColorPickerView({ className, ...rest }: ColorPickerViewProps) {
  const { slots } = useColorPicker();

  return <ColorPickerPrimitive.View {...rest} className={slots.view({ className })} />;
}

export function ColorPickerChannelSlider({
  className,
  children,
  ...rest
}: ColorPickerChannelSliderProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.ChannelSlider {...rest} className={slots.channelSlider({ className })}>
      {children}

      <ColorPickerPrimitive.ChannelSliderTrack className={slots.channelSliderTrack()} />
      <ColorPickerPrimitive.ChannelSliderThumb className={slots.channelSliderThumb()} />
    </ColorPickerPrimitive.ChannelSlider>
  );
}

export function ColorPickerEyeDropperTrigger({
  variant = "outline",
  size = "icon-md",
  children,
  ...rest
}: ColorPickerEyeDropperTriggerProps) {
  return (
    <ColorPickerPrimitive.EyeDropperTrigger {...rest} asChild>
      <Button size={size} variant={variant}>
        {children || <EyedropperIcon />}
      </Button>
    </ColorPickerPrimitive.EyeDropperTrigger>
  );
}

export function ColorPickerSwatchGroup({ className, ...rest }: ColorPickerSwatchGroupProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.SwatchGroup {...rest} className={slots.swatchGroup({ className })} />
  );
}

export function ColorPickerSwatchTrigger({ className, ...rest }: ColorPickerSwatchTriggerProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.SwatchTrigger {...rest} className={slots.swatchTrigger({ className })} />
  );
}

export function ColorPickerSwatch({ className, ...rest }: ColorPickerSwatchProps) {
  const { slots } = useColorPicker();

  return <ColorPickerPrimitive.Swatch {...rest} className={slots.swatch({ className })} />;
}

export function ColorPickerSwatchIndicator({
  className,
  children,
  ...rest
}: ColorPickerSwatchIndicatorProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      className={slots.swatchIndicator({ className })}
    >
      {children || <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}

export function ColorPickerValueText({ className, ...rest }: ColorPickerValueTextProps) {
  const { slots } = useColorPicker();

  return <ColorPickerPrimitive.ValueText {...rest} className={slots.valueText({ className })} />;
}

export function ColorPickerValueSwatch({ className, ...rest }: ColorPickerValueSwatchProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.ValueSwatch {...rest} className={slots.valueSwatch({ className })} />
  );
}

export function ColorPickerArea({
  className,
  showDots = false,
  children,
  ...rest
}: ColorPickerAreaProps) {
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.Area
      {...rest}
      className={slots.area({
        className: cn(
          {
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
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

export function ColorPickerAreaThumb({ className, ...rest }: ColorPickerAreaThumbProps) {
  const { slots } = useColorPicker();

  return <ColorPickerPrimitive.AreaThumb {...rest} className={slots.areaThumb({ className })} />;
}

export function ColorPickerInput({ channel = "hex", ...rest }: ColorPickerInputProps) {
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={channel} />;
}

export function ColorPickerSwatchPreview({ className, ...rest }: ColorPickerSwatchPreviewProps) {
  const { slots } = useColorPicker();

  return (
    <ark.div
      {...rest}
      className={slots.inputSwatch({ className })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid className={slots.inputSwatchGrid()} />
      <ColorPickerPrimitive.ValueSwatch className={slots.inputSwatchSwatch()} />
    </ark.div>
  );
}

/**
 * Compact preset that renders a swatch trigger, hex input, and standard
 * color picker popover in one component.
 */
export function ColorPickerField({ clearable = false, ...rest }: ColorPickerProps) {
  return (
    <ColorPickerRoot {...rest} clearable={clearable}>
      <ColorPickerControl clearable={false}>
        <InputGroup>
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
  const { slots } = useColorPicker();

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
