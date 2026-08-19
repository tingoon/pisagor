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
  colorPickerAreaBackgroundVariants,
  colorPickerAreaThumbVariants,
  colorPickerAreaVariants,
  colorPickerChannelSliderThumbVariants,
  colorPickerChannelSliderTrackVariants,
  colorPickerChannelSliderVariants,
  colorPickerContentVariants,
  colorPickerControlVariants,
  colorPickerInline2Variants,
  colorPickerInline3Variants,
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
import { createContext } from "../../utils";
import { Button, type ButtonProps } from "../button";
import { InputGroup, type InputGroupButtonProps } from "../input-group";

// #region Types
export interface ColorPickerProps
  extends Omit<
      ComponentProps<typeof ColorPickerPrimitive.Root>,
      "defaultValue" | "value" | "onValueChange"
    >,
    WithTestId {
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

interface ColorPickerClearTriggerProps extends InputGroupButtonProps {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

interface ColorPickerControlProps extends ComponentProps<typeof ColorPickerPrimitive.Control> {
  /**
   * Whether to show a clear button when a color is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

interface ColorPickerEyeDropperTriggerProps
  extends ComponentProps<typeof ColorPickerPrimitive.EyeDropperTrigger>,
    ButtonProps {}

interface ColorPickerAreaProps extends ComponentProps<typeof ColorPickerPrimitive.Area> {
  /**
   *
   */
  showDots?: boolean;
}

// #endregion

// #region Context
const [ColorPickerRootContext, useColorPickerRoot] = createContext<{ testId?: string }>({
  name: "ColorPickerRoot",
  strict: false,
});

// #endregion

// #region Components
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
          className={cn(colorPickerVariants(), className)}
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
ColorPickerRoot.displayName = "ColorPicker";

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
ColorPickerClearTrigger.displayName = "ColorPicker.ClearTrigger";

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
      className={cn(colorPickerControlVariants(), className)}
      data-testid={testId}
    >
      {children}
      {clearable ? <ColorPickerClearTrigger /> : null}
    </ColorPickerPrimitive.Control>
  );
}
ColorPickerControl.displayName = "ColorPicker.Control";

export function ColorPickerTrigger(props: ComponentProps<typeof ColorPickerPrimitive.Trigger>) {
  return <ColorPickerPrimitive.Trigger {...props} />;
}
ColorPickerTrigger.displayName = "ColorPicker.Trigger";

export function ColorPickerTransparencyGrid({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.TransparencyGrid>) {
  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      className={cn(colorPickerInlineVariants(), className)}
    />
  );
}
ColorPickerTransparencyGrid.displayName = "ColorPicker.TransparencyGrid";

export function ColorPickerContent({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.Content>) {
  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content
          {...rest}
          className={cn(colorPickerContentVariants(), className)}
        />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}
ColorPickerContent.displayName = "ColorPicker.Content";

export function ColorPickerView({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.View>) {
  return (
    <ColorPickerPrimitive.View {...rest} className={cn(colorPickerViewVariants(), className)} />
  );
}
ColorPickerView.displayName = "ColorPicker.View";

export function ColorPickerSlider({
  className,
  children,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.ChannelSlider>) {
  return (
    <ColorPickerPrimitive.ChannelSlider
      {...rest}
      className={cn(colorPickerChannelSliderVariants(), className)}
    >
      {children}

      <ColorPickerPrimitive.ChannelSliderTrack
        className={cn(colorPickerChannelSliderTrackVariants())}
      />
      <ColorPickerPrimitive.ChannelSliderThumb
        className={cn(colorPickerChannelSliderThumbVariants())}
      />
    </ColorPickerPrimitive.ChannelSlider>
  );
}
ColorPickerSlider.displayName = "ColorPicker.Slider";

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
ColorPickerEyeDropperTrigger.displayName = "ColorPicker.EyeDropperTrigger";

export function ColorPickerSwatchGroup({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.SwatchGroup>) {
  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      className={cn(colorPickerSwatchGroupVariants(), className)}
    />
  );
}
ColorPickerSwatchGroup.displayName = "ColorPicker.SwatchGroup";

export function ColorPickerSwatchTrigger({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.SwatchTrigger>) {
  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      className={cn(colorPickerSwatchTriggerVariants(), className)}
    />
  );
}
ColorPickerSwatchTrigger.displayName = "ColorPicker.SwatchTrigger";

export function ColorPickerSwatch({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.Swatch>) {
  return (
    <ColorPickerPrimitive.Swatch {...rest} className={cn(colorPickerSwatchVariants(), className)} />
  );
}
ColorPickerSwatch.displayName = "ColorPicker.Swatch";

export function ColorPickerSwatchIndicator({
  className,
  children,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.SwatchIndicator>) {
  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      className={cn(colorPickerSwatchIndicatorVariants(), className)}
    >
      {children || <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}
ColorPickerSwatchIndicator.displayName = "ColorPicker.SwatchIndicator";

export function ColorPickerValue({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.ValueText>) {
  return (
    <ColorPickerPrimitive.ValueText
      {...rest}
      className={cn(colorPickerValueVariants(), className)}
    />
  );
}
ColorPickerValue.displayName = "ColorPicker.Value";

export function ColorPickerValueSwatch({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.ValueSwatch>) {
  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      className={cn(colorPickerValueSwatchVariants(), className)}
    />
  );
}
ColorPickerValueSwatch.displayName = "ColorPicker.ValueSwatch";

export function ColorPickerArea({
  className,
  showDots = false,
  children,
  ...rest
}: ColorPickerAreaProps) {
  return (
    <ColorPickerPrimitive.Area
      {...rest}
      className={cn(
        colorPickerAreaVariants(),
        {
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
            showDots,
        },
        className,
      )}
    >
      <ColorPickerPrimitive.AreaBackground className={colorPickerAreaBackgroundVariants()} />

      {children}
    </ColorPickerPrimitive.Area>
  );
}
ColorPickerArea.displayName = "ColorPicker.Area";

export function ColorPickerAreaThumb({
  className,
  ...rest
}: ComponentProps<typeof ColorPickerPrimitive.AreaThumb>) {
  return (
    <ColorPickerPrimitive.AreaThumb
      {...rest}
      className={cn(colorPickerAreaThumbVariants(), className)}
    />
  );
}
ColorPickerAreaThumb.displayName = "ColorPicker.AreaThumb";

export function ColorPickerInput({
  channel = "hex",
  ...rest
}: Partial<ComponentProps<typeof ColorPickerPrimitive.ChannelInput>>) {
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={channel} />;
}
ColorPickerInput.displayName = "ColorPicker.Input";

export function ColorPickerSwatchPreview({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(colorPickerInputSwatchVariants(), className)}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid className={cn(colorPickerInline2Variants())} />
      <ColorPickerPrimitive.ValueSwatch className={colorPickerInline3Variants()} />
    </ark.div>
  );
}
ColorPickerSwatchPreview.displayName = "ColorPicker.SwatchPreview";

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
ColorPickerField.displayName = "ColorPicker.Field";
// #endregion
