import {
  ColorPicker as ColorPickerPrimitive,
  Portal,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/react";
import type {
  ColorPickerAreaProps as ColorPickerAreaPrimitiveProps,
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerContentProps,
  ColorPickerControlProps,
  ColorPickerRootProps as ColorPickerRootPrimitiveProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchProps,
  ColorPickerTriggerProps,
  ColorPickerValueChangeDetails,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/react";
import { useUncontrolled } from "@mantine/hooks";
import { CheckIcon, EyedropperIcon, XIcon } from "@phosphor-icons/react";
import type { ColorPickerRootContract } from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useMemo } from "react";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
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

export type ColorPickerClearTriggerProps = InputGroupButtonProps;

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

export type ColorPickerSwatchPreviewProps = ComponentPropsWithRef<"div">;
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

function Root({
  variant: _variant,
  clearable: _clearable,
  defaultValue,
  positioning = {
    placement: "top-start",
  },
  value,
  children,
  onValueChange,
  className,
  ...rest
}: ColorPickerProps) {
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
    <RootBase
      {...rest}
      className={className}
      defaultValue={!isControlled ? parsedColor : undefined}
      onValueChange={handleValueChange}
      positioning={positioning}
      value={isControlled ? parsedColor : undefined}
    >
      {children}

      <ColorPickerPrimitive.HiddenInput />
    </RootBase>
  );
}

function ClearTrigger({
  onClick,
  className,
  ...rest
}: ColorPickerClearTriggerProps) {
  const { m } = useLocale();
  const api = useColorPickerContext();

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

const Control = withContext<ColorPickerControlProps>(
  ColorPickerPrimitive.Control,
  {
    name: "Control",
  },
);

function Trigger(props: ColorPickerTriggerProps) {
  return <ColorPickerPrimitive.Trigger {...props} />;
}

function TransparencyGrid({
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

function Content({ className, ...rest }: ColorPickerContentProps) {
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

function View({ className, ...rest }: ColorPickerViewProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.View
      {...rest}
      className={slots.view({ className })}
    />
  );
}

function ChannelSlider({
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

function EyeDropperTrigger({
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

function SwatchGroup({ className, ...rest }: ColorPickerSwatchGroupProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      className={slots.swatchGroup({ className })}
    />
  );
}

function SwatchTrigger({ className, ...rest }: ColorPickerSwatchTriggerProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      className={slots.swatchTrigger({ className })}
    />
  );
}

function Swatch({ className, ...rest }: ColorPickerSwatchProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.Swatch
      {...rest}
      className={slots.swatch({ className })}
    />
  );
}

function SwatchIndicator({
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

function ValueText({ className, ...rest }: ColorPickerValueTextProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.ValueText
      {...rest}
      className={slots.valueText({ className })}
    />
  );
}

function ValueSwatch({ className, ...rest }: ColorPickerValueSwatchProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      className={slots.valueSwatch({ className })}
    />
  );
}

function Area({
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

function AreaThumb({ className, ...rest }: ColorPickerAreaThumbProps) {
  const { slots } = useStyles();

  return (
    <ColorPickerPrimitive.AreaThumb
      {...rest}
      className={slots.areaThumb({ className })}
    />
  );
}

function Input({ channel = "hex", ...rest }: ColorPickerInputProps) {
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={channel} />;
}

function Label({
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

function FormatSelect({
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

function SwatchPreview({ className, ...rest }: ColorPickerSwatchPreviewProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.inputSwatch({ className })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid
        className={slots.inputSwatchGrid()}
      />
      <ColorPickerPrimitive.ValueSwatch className={slots.inputSwatchSwatch()} />
    </div>
  );
}

/**
 * Compact preset that renders a swatch trigger, hex input, and standard color
 * picker popover in one component.
 */
function Field({ clearable = false, variant, ...rest }: ColorPickerProps) {
  return (
    <Root {...rest}>
      <Control>
        <InputGroup variant={variant}>
          <Trigger asChild>
            <InputGroup.Addon>
              <SwatchPreview />
            </InputGroup.Addon>
          </Trigger>
          <Input asChild>
            <InputGroup.Input />
          </Input>
          {clearable ? <ClearTrigger /> : null}
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

function FieldView() {
  const { slots } = useStyles();

  return (
    <View format="hsla">
      <div className={slots.channelRow()}>
        <EyeDropperTrigger />
        <div className={slots.channelStack()}>
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
  ColorPickerControlProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchProps,
  ColorPickerTriggerProps,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/react";

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
