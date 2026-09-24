import type {
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerContentProps,
  ColorPickerAreaProps as ColorPickerPrimitiveAreaProps,
  ColorPickerControlProps as ColorPickerPrimitiveControlProps,
  ColorPickerRootProps as ColorPickerPrimitiveRootProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchProps,
  ColorPickerTriggerProps,
  ColorPickerValueChangeDetails,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/solid/color-picker";
import {
  ColorPicker as ColorPickerPrimitive,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/solid/color-picker";
import { ark } from "@ark-ui/solid/factory";
import { colorPickerRecipe } from "@pisagor/recipes/color-picker";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, createSignal, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { CheckIcon, EyedropperIcon, XIcon } from "../../internal/icons";
import { Button, type ButtonProps } from "../button";
import { InputGroup, type InputGroupButtonProps } from "../input-group";
import { ColorPickerSlotsContext, useColorPicker } from "./color-picker.context";

type FormControlVariant = "primary" | "secondary";

export type ColorPickerRootProps = Omit<
  ColorPickerPrimitiveRootProps,
  "defaultValue" | "value" | "onValueChange"
>;

export interface ColorPickerProps extends ColorPickerRootProps {
  variant?: FormControlVariant;
  clearable?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  recipe?: typeof colorPickerRecipe;
}

export interface ColorPickerClearTriggerProps extends InputGroupButtonProps {
  clearable?: boolean;
}

export interface ColorPickerControlProps extends ColorPickerPrimitiveControlProps {
  clearable?: boolean;
}

export type ColorPickerEyeDropperTriggerProps = ComponentProps<
  typeof ColorPickerPrimitive.EyeDropperTrigger
> &
  ButtonProps;

export interface ColorPickerAreaProps extends ColorPickerPrimitiveAreaProps {
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

export type ColorPickerSwatchPreviewProps = ComponentProps<typeof ark.div>;

export const parseColor = parseColorArk;

export function ColorPickerRoot(props: ColorPickerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "defaultValue",
    "positioning",
    "value",
    "children",
    "onValueChange",
    "recipe",
    "class",
    "clearable",
  ]);

  const slots = () => (local.recipe ?? colorPickerRecipe)();
  const isControlled = () => local.value !== undefined;
  const [uncontrolled, setUncontrolled] = createSignal(local.defaultValue);
  const color = createMemo(() => (isControlled() ? local.value : uncontrolled()));
  const parsedColor = createMemo(() => (color() ? parseColor(color()!) : undefined));

  const handleValueChange = (e: ColorPickerValueChangeDetails) => {
    if (!isControlled()) setUncontrolled(e.valueAsString);
    local.onValueChange?.(e.valueAsString);
  };

  return (
    <ColorPickerSlotsContext value={{ slots: slots() }}>
      <ColorPickerPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        defaultValue={!isControlled() ? parsedColor() : undefined}
        onValueChange={handleValueChange}
        positioning={local.positioning ?? { placement: "top-start" }}
        value={isControlled() ? parsedColor() : undefined}
      >
        {local.children}
        <ColorPickerPrimitive.HiddenInput />
      </ColorPickerPrimitive.Root>
    </ColorPickerSlotsContext>
  );
}

export function ColorPickerClearTrigger(props: ColorPickerClearTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "onClick", "class"]);
  const api = useColorPickerContext();
  const clearable = () => local.clearable ?? false;

  const visible = createMemo(() => {
    if (!clearable()) return false;
    const controlProps = api().getControlProps() as { disabled?: boolean; readOnly?: boolean };
    if (controlProps.disabled || controlProps.readOnly) return false;
    return api().value.getChannelValue("alpha") !== 0;
  });

  return (
    <Show when={visible()}>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button
          {...rest}
          aria-label="Clear color"
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

export function ColorPickerControl(props: ColorPickerControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.Control {...rest} class={slots.control({ class: cn(local.class) })}>
      {local.children}
      <Show when={local.clearable}>
        <ColorPickerClearTrigger />
      </Show>
    </ColorPickerPrimitive.Control>
  );
}

export function ColorPickerTrigger(props: ColorPickerTriggerProps): JSX.Element {
  return <ColorPickerPrimitive.Trigger {...props} />;
}

export function ColorPickerTransparencyGrid(props: ColorPickerTransparencyGridProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.TransparencyGrid
      {...rest}
      class={slots.transparencyGrid({ class: cn(local.class) })}
    />
  );
}

export function ColorPickerContent(props: ColorPickerContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();

  return (
    <Portal>
      <ColorPickerPrimitive.Positioner>
        <ColorPickerPrimitive.Content {...rest} class={slots.content({ class: cn(local.class) })} />
      </ColorPickerPrimitive.Positioner>
    </Portal>
  );
}

export function ColorPickerView(props: ColorPickerViewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return <ColorPickerPrimitive.View {...rest} class={slots.view({ class: cn(local.class) })} />;
}

export function ColorPickerChannelSlider(props: ColorPickerChannelSliderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.ChannelSlider
      {...rest}
      class={slots.channelSlider({ class: cn(local.class) })}
    >
      {local.children}
      <ColorPickerPrimitive.ChannelSliderTrack class={slots.channelSliderTrack()} />
      <ColorPickerPrimitive.ChannelSliderThumb class={slots.channelSliderThumb()} />
    </ColorPickerPrimitive.ChannelSlider>
  );
}

export function ColorPickerEyeDropperTrigger(
  props: ColorPickerEyeDropperTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);
  return (
    <ColorPickerPrimitive.EyeDropperTrigger
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

export function ColorPickerSwatchGroup(props: ColorPickerSwatchGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.SwatchGroup
      {...rest}
      class={slots.swatchGroup({ class: cn(local.class) })}
    />
  );
}

export function ColorPickerSwatchTrigger(props: ColorPickerSwatchTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.SwatchTrigger
      {...rest}
      class={slots.swatchTrigger({ class: cn(local.class) })}
    />
  );
}

export function ColorPickerSwatch(props: ColorPickerSwatchProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return <ColorPickerPrimitive.Swatch {...rest} class={slots.swatch({ class: cn(local.class) })} />;
}

export function ColorPickerSwatchIndicator(props: ColorPickerSwatchIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.SwatchIndicator
      {...rest}
      class={slots.swatchIndicator({ class: cn(local.class) })}
    >
      {local.children ?? <CheckIcon />}
    </ColorPickerPrimitive.SwatchIndicator>
  );
}

export function ColorPickerValueText(props: ColorPickerValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.ValueText {...rest} class={slots.valueText({ class: cn(local.class) })} />
  );
}

export function ColorPickerValueSwatch(props: ColorPickerValueSwatchProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.ValueSwatch
      {...rest}
      class={slots.valueSwatch({ class: cn(local.class) })}
    />
  );
}

export function ColorPickerArea(props: ColorPickerAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["showDots", "children", "class"]);
  const { slots } = useColorPicker();

  return (
    <ColorPickerPrimitive.Area
      {...rest}
      class={slots.area({
        class: cn(
          local.showDots &&
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]",
          local.class,
        ),
      })}
    >
      <ColorPickerPrimitive.AreaBackground class={slots.areaBackground()} />
      {local.children}
    </ColorPickerPrimitive.Area>
  );
}

export function ColorPickerAreaThumb(props: ColorPickerAreaThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();
  return (
    <ColorPickerPrimitive.AreaThumb {...rest} class={slots.areaThumb({ class: cn(local.class) })} />
  );
}

export function ColorPickerInput(props: ColorPickerInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["channel"]);
  return <ColorPickerPrimitive.ChannelInput {...rest} channel={local.channel ?? "hex"} />;
}

export function ColorPickerSwatchPreview(props: ColorPickerSwatchPreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useColorPicker();

  return (
    <ark.div
      {...rest}
      class={slots.inputSwatch({ class: cn(local.class) })}
      data-part="input-swatch"
      data-scope="color-picker"
    >
      <ColorPickerPrimitive.TransparencyGrid class={slots.inputSwatchGrid()} />
      <ColorPickerPrimitive.ValueSwatch class={slots.inputSwatchSwatch()} />
    </ark.div>
  );
}

export function ColorPickerField(props: ColorPickerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable"]);
  const clearable = () => local.clearable ?? false;

  return (
    <ColorPickerRoot {...rest} clearable={clearable()}>
      <ColorPickerControl clearable={false}>
        <InputGroup>
          <ColorPickerTrigger
            asChild={(triggerProps) => (
              <InputGroup.Addon {...triggerProps()}>
                <ColorPickerSwatchPreview />
              </InputGroup.Addon>
            )}
          />
          <ColorPickerInput
            asChild={(inputProps) => <InputGroup.Input {...inputProps()} clearable={false} />}
          />
          <Show when={clearable()}>
            <ColorPickerClearTrigger clearable />
          </Show>
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

function ColorPickerFieldView(): JSX.Element {
  const { slots } = useColorPicker();

  return (
    <ColorPickerView format="hsla">
      <div class={slots.channelRow()}>
        <ColorPickerEyeDropperTrigger />
        <div class={slots.channelStack()}>
          <ColorPickerChannelSlider channel="hue" />
          <ColorPickerChannelSlider channel="alpha">
            <ColorPickerTransparencyGrid />
          </ColorPickerChannelSlider>
        </div>
      </div>
    </ColorPickerView>
  );
}
