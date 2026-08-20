import {
  ColorPicker as ColorPickerPrimitive,
  type ColorPickerValueChangeDetails,
  parseColor as parseColorArk,
  useColorPickerContext as useColorPicker,
} from "@ark-ui/react/color-picker";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, EyedropperIcon, XIcon } from "@phosphor-icons/react";
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
  colorPickerValueVariants,
  colorPickerVariants,
  colorPickerViewVariants,
} from "@pisagor/styles/ui/color-picker";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useState } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";
import { InputGroup, type InputGroupButtonProps } from "../input-group";
import { ColorPickerRootContext, useColorPickerRoot } from "./color-picker.context";

// #region Types
export type ColorPickerRootProps = Omit<
  ComponentProps<typeof ColorPickerPrimitive.Root>,
  "defaultValue" | "value" | "onValueChange"
> &
  WithTestId;

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

export type ColorPickerSliderProps = ComponentProps<typeof ColorPickerPrimitive.ChannelSlider>;

export type ColorPickerSwatchGroupProps = ComponentProps<typeof ColorPickerPrimitive.SwatchGroup>;

export type ColorPickerSwatchTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchTrigger
>;

export type ColorPickerSwatchProps = ComponentProps<typeof ColorPickerPrimitive.Swatch>;

export type ColorPickerSwatchIndicatorProps = ComponentProps<
  typeof ColorPickerPrimitive.SwatchIndicator
>;

export type ColorPickerValueProps = ComponentProps<typeof ColorPickerPrimitive.ValueText>;

export type ColorPickerValueSwatchProps = ComponentProps<typeof ColorPickerPrimitive.ValueSwatch>;

export type ColorPickerAreaThumbProps = ComponentProps<typeof ColorPickerPrimitive.AreaThumb>;

export type ColorPickerInputProps = Partial<
  ComponentProps<typeof ColorPickerPrimitive.ChannelInput>
>;
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
  lazyMount = true,
  unmountOnExit = true,
  onValueChange,
  variant,
  className,
  children,
  testId,
  ...rest
}: ColorPickerProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;

  const handleValueChange = (e: ColorPickerValueChangeDetails) => {
    if (!isControlled) {
      setInternalValue(e.valueAsString);
    }
    onValueChange?.(e.valueAsString);
  };

  return (
    <ColorPickerRootContext value={{ testId: dataTestId ?? testId }}>
      <FormControlVariantProvider value={variant}>
        <ColorPickerPrimitive.Root
          className={colorPickerVariants({ className })}
          defaultValue={internalValue ? parseColor(internalValue) : undefined}
          lazyMount={lazyMount}
          onValueChange={handleValueChange}
          positioning={positioning}
          unmountOnExit={unmountOnExit}
          value={isControlled && value ? parseColor(value) : undefined}
          {...props}
        >
          {children}

          <ColorPickerPrimitive.HiddenInput />
        </ColorPickerPrimitive.Root>
      </FormControlVariantProvider>
    </ColorPickerRootContext>
  );
}

export function ColorPickerClearTrigger({
  clearable = false,
  className,
  onClick,
  ...rest
}: ColorPickerClearTriggerProps) {
  const api = useColorPicker();

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
  const { testId } = useColorPickerRoot() ?? {};

  return (
    <ColorPickerPrimitive.Control
      {...rest}
      className={colorPickerControlVariants({ className })}
      data-testid={testId}
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
  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      className={colorPickerInlineVariants({ className })}
    />
  );
}

export function ColorPickerContent({ className, ...rest }: ColorPickerContentProps) {
  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content
          {...rest}
          className={colorPickerContentVariants({ className })}
        />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}

export function ColorPickerView({ className, ...rest }: ColorPickerViewProps) {
  return <ColorPickerPrimitive.View {...rest} className={colorPickerViewVariants({ className })} />;
}

export function ColorPickerSlider({ className, children, ...rest }: ColorPickerSliderProps) {
  const recipe = colorPickerChannelSliderVariants();

  return (
    <ColorPickerPrimitive.ChannelSlider {...rest} className={recipe.base({ className })}>
      {children}

      <ColorPickerPrimitive.ChannelSliderTrack className={recipe.track()} />
      <ColorPickerPrimitive.ChannelSliderThumb className={recipe.thumb()} />
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
  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      className={colorPickerSwatchGroupVariants({ className })}
    />
  );
}

export function ColorPickerSwatchTrigger({ className, ...rest }: ColorPickerSwatchTriggerProps) {
  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      className={colorPickerSwatchTriggerVariants({ className })}
    />
  );
}

export function ColorPickerSwatch({ className, ...rest }: ColorPickerSwatchProps) {
  return (
    <ColorPickerPrimitive.Swatch {...rest} className={colorPickerSwatchVariants({ className })} />
  );
}

export function ColorPickerSwatchIndicator({
  className,
  children,
  ...rest
}: ColorPickerSwatchIndicatorProps) {
  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      className={colorPickerSwatchIndicatorVariants({ className })}
    >
      {children || <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}

export function ColorPickerValue({ className, ...rest }: ColorPickerValueProps) {
  return (
    <ColorPickerPrimitive.ValueText {...rest} className={colorPickerValueVariants({ className })} />
  );
}

export function ColorPickerValueSwatch({ className, ...rest }: ColorPickerValueSwatchProps) {
  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      className={colorPickerValueSwatchVariants({ className })}
    />
  );
}

export function ColorPickerArea({
  className,
  showDots = false,
  children,
  ...rest
}: ColorPickerAreaProps) {
  const recipe = colorPickerAreaVariants();

  return (
    <ColorPickerPrimitive.Area
      {...rest}
      className={recipe.base({
        className: cn(
          {
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
              showDots,
          },
          className,
        ),
      })}
    >
      <ColorPickerPrimitive.AreaBackground className={recipe.background()} />

      {children}
    </ColorPickerPrimitive.Area>
  );
}

export function ColorPickerAreaThumb({ className, ...rest }: ColorPickerAreaThumbProps) {
  return (
    <ColorPickerPrimitive.AreaThumb
      {...rest}
      className={colorPickerAreaThumbVariants({ className })}
    />
  );
}

export function ColorPickerInput({ channel = "hex", ...rest }: ColorPickerInputProps) {
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={channel} />;
}

export function ColorPickerSwatchPreview({ className, ...rest }: ComponentProps<typeof ark.div>) {
  const recipe = colorPickerInputSwatchVariants();

  return (
    <ark.div
      {...rest}
      className={recipe.base({ className })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid className={recipe.grid()} />
      <ColorPickerPrimitive.ValueSwatch className={recipe.swatch()} />
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
        <ColorPickerView format="hsla">
          <div className={colorPickerInline4Variants()}>
            <ColorPickerEyeDropperTrigger />
            <div className={colorPickerInline5Variants()}>
              <ColorPickerSlider channel="hue" />
              <ColorPickerSlider channel="alpha">
                <ColorPickerTransparencyGrid />
              </ColorPickerSlider>
            </div>
          </div>
        </ColorPickerView>
      </ColorPickerContent>
    </ColorPickerRoot>
  );
}

ColorPickerRoot.displayName = "ColorPicker";
ColorPickerClearTrigger.displayName = "ColorPicker.ClearTrigger";
ColorPickerControl.displayName = "ColorPicker.Control";
ColorPickerTrigger.displayName = "ColorPicker.Trigger";
ColorPickerTransparencyGrid.displayName = "ColorPicker.TransparencyGrid";
ColorPickerContent.displayName = "ColorPicker.Content";
ColorPickerView.displayName = "ColorPicker.View";
ColorPickerSlider.displayName = "ColorPicker.Slider";
ColorPickerEyeDropperTrigger.displayName = "ColorPicker.EyeDropperTrigger";
ColorPickerSwatchGroup.displayName = "ColorPicker.SwatchGroup";
ColorPickerSwatchTrigger.displayName = "ColorPicker.SwatchTrigger";
ColorPickerSwatch.displayName = "ColorPicker.Swatch";
ColorPickerSwatchIndicator.displayName = "ColorPicker.SwatchIndicator";
ColorPickerValue.displayName = "ColorPicker.Value";
ColorPickerValueSwatch.displayName = "ColorPicker.ValueSwatch";
ColorPickerArea.displayName = "ColorPicker.Area";
ColorPickerAreaThumb.displayName = "ColorPicker.AreaThumb";
ColorPickerInput.displayName = "ColorPicker.Input";
ColorPickerSwatchPreview.displayName = "ColorPicker.SwatchPreview";
ColorPickerField.displayName = "ColorPicker.Field";
// #endregion
