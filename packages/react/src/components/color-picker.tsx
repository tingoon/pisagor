import {
  ColorPicker as ColorPickerPrimitive,
  Portal,
  ark,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/react";
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
} from "@ark-ui/react";
import { useUncontrolled } from "@mantine/hooks";
import { EyedropperIcon, XIcon } from "@phosphor-icons/react";
import type {
  ColorPickerContract,
  ColorPickerRootContract,
} from "@pisagor/contracts";
import { colorPickerRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type ComponentPropsWithRef, type ReactNode, useMemo } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
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
  children?: ReactNode;
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

/** Root with string `value` / `defaultValue` / `onValueChange`. */
function Root({
  defaultValue,
  positioning = {
    placement: "top-start",
  },
  value,
  children,
  onValueChange,
  ...rest
}: ColorPickerRootProps) {
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

function Area({ showDots = false, className, ...rest }: ColorPickerAreaProps) {
  return (
    <AreaBase
      {...rest}
      className={cn(
        {
          "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
            showDots,
        },
        className,
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
function EyeDropperTrigger(props: ColorPickerEyeDropperTriggerProps) {
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
  {
    name: "Swatch",
  },
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
function ClearTrigger({
  className,
  onClick,
  ...rest
}: ColorPickerClearTriggerProps) {
  const { m } = useLocale();
  const { slots } = useStyles();
  const api = useColorPickerContext();

  return (
    <ark.button
      aria-label={m("colorPicker.clearColor")}
      type="button"
      {...rest}
      className={slots.clearTrigger({ className })}
      data-part="clear-trigger"
      data-scope="color-picker"
      onClick={(event) => {
        api.setValue(parseColor("rgba(0, 0, 0, 0)"));
        onClick?.(event);
      }}
    />
  );
}

/** Transparency grid with the current color on top, sized for input addons. */
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
// #endregion

// #region Shorthand
/** Clear button addon; hidden when disabled, read-only, or already cleared. */
function ShorthandClearTrigger({ className }: { className?: string }) {
  const { m } = useLocale();
  const api = useColorPickerContext();
  const controlProps = api.getControlProps() as {
    disabled?: boolean;
    readOnly?: boolean;
  };

  if (
    controlProps.disabled ||
    controlProps.readOnly ||
    api.value.getChannelValue("alpha") === 0
  ) {
    return null;
  }

  return (
    <InputGroup.Addon align="inline-end">
      <ClearTrigger asChild className={className}>
        <InputGroup.Button
          aria-label={m("colorPicker.clearColor")}
          size="icon-xs"
          variant="ghost"
        >
          <XIcon />
        </InputGroup.Button>
      </ClearTrigger>
    </InputGroup.Addon>
  );
}

/** Area plus eye dropper, hue and alpha sliders. */
function DefaultContent({ classNames }: Pick<ColorPickerProps, "classNames">) {
  const { slots } = useStyles();

  return (
    <>
      <Area className={classNames?.area}>
        <AreaBackground className={classNames?.areaBackground} />
        <AreaThumb className={classNames?.areaThumb} />
      </Area>

      <View className={classNames?.view} format="hsla">
        <div
          className={slots.channelRow({ className: classNames?.channelRow })}
        >
          <EyeDropperTrigger asChild className={classNames?.eyeDropperTrigger}>
            <Button size="icon-md" variant="outline">
              <EyedropperIcon />
            </Button>
          </EyeDropperTrigger>

          <div
            className={slots.channelStack({
              className: classNames?.channelStack,
            })}
          >
            {(["hue", "alpha"] as const).map((channel) => (
              <ChannelSlider
                channel={channel}
                className={classNames?.channelSlider}
                key={channel}
              >
                {channel === "alpha" && (
                  <TransparencyGrid className={classNames?.transparencyGrid} />
                )}
                <ChannelSliderTrack
                  className={classNames?.channelSliderTrack}
                />
                <ChannelSliderThumb
                  className={classNames?.channelSliderThumb}
                />
              </ChannelSlider>
            ))}
          </div>
        </div>
      </View>
    </>
  );
}

export function ColorPickerShorthand({
  children,
  classNames,
  clearable = false,
  variant,
  ...rest
}: ColorPickerProps) {
  return (
    <Root {...rest}>
      <Control className={classNames?.control}>
        <InputGroup variant={variant}>
          <Trigger asChild className={classNames?.trigger}>
            <InputGroup.Addon>
              <SwatchPreview className={classNames?.inputSwatch} />
            </InputGroup.Addon>
          </Trigger>

          <Input asChild className={classNames?.channelInput}>
            <InputGroup.Input />
          </Input>

          {clearable && (
            <ShorthandClearTrigger className={classNames?.clearTrigger} />
          )}
        </InputGroup>
      </Control>

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {children ?? <DefaultContent classNames={classNames} />}
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
} from "@ark-ui/react";

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
