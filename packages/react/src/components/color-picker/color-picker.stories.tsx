import { PercentIcon, SparkleIcon } from "@phosphor-icons/react";
import {
  Button,
  ColorPicker,
  Field,
  Input,
  InputGroup,
  parseColor,
  Separator,
} from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose a color visually and fine-tune it with sliders or numeric inputs.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Area: ColorPicker.Area,
    AreaThumb: ColorPicker.AreaThumb,
    ChannelSlider: ColorPicker.ChannelSlider,
    ClearTrigger: ColorPicker.ClearTrigger,
    Content: ColorPicker.Content,
    Control: ColorPicker.Control,
    EyeDropperTrigger: ColorPicker.EyeDropperTrigger,
    Input: ColorPicker.Input,
    Swatch: ColorPicker.Swatch,
    SwatchGroup: ColorPicker.SwatchGroup,
    SwatchIndicator: ColorPicker.SwatchIndicator,
    SwatchPreview: ColorPicker.SwatchPreview,
    SwatchTrigger: ColorPicker.SwatchTrigger,
    TransparencyGrid: ColorPicker.TransparencyGrid,
    Trigger: ColorPicker.Trigger,
    ValueSwatch: ColorPicker.ValueSwatch,
    ValueText: ColorPicker.ValueText,
    View: ColorPicker.View,
  },
  title: "Components/Forms/Color Picker",
});

export const Default = meta.story({
  args: {
    defaultValue: "#eb5e41",
    format: "hsla",
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <div className="flex items-center gap-3">
            <ColorPicker.EyeDropperTrigger />
            <div className="flex flex-1 flex-col gap-2.5">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger asChild>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input asChild>
              <InputGroup.Input placeholder="Primary" />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger asChild>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input asChild>
              <InputGroup.Input placeholder="Secondary" />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const CustomSpacing = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" format="hsla">
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content className="[--space:--spacing(2)] sm:[--space:--spacing(4)]">
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <div className="flex items-center gap-3">
            <ColorPicker.EyeDropperTrigger />
            <div className="flex flex-1 flex-col gap-2.5">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const AreaChannels = meta.story({
  args: {
    defaultValue: "#182098",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.Area xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  ),
});

export const AreaDots = meta.story({
  args: {
    defaultValue: "#19932C",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  ),
});

export const InputChannel = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#0485F7").toString("rgba")}
        format="rgba"
      >
        <ColorPicker.View format="rgba">
          <Field orientation="horizontal">
            <Field.Label>RGB</Field.Label>
            <ColorPicker.Input asChild channel="red" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="green" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="blue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#EF4444").toString("hsba")}
        format="hsba"
      >
        <ColorPicker.View format="hsba">
          <Field orientation="horizontal">
            <Field.Label>HSB</Field.Label>
            <ColorPicker.Input asChild channel="hue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="saturation" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="brightness" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full"
        defaultValue={parseColor("#F59E0B").toString("hsla")}
        format="hsla"
      >
        <ColorPicker.View format="hsla">
          <Field orientation="horizontal">
            <Field.Label>HSL</Field.Label>
            <ColorPicker.Input asChild channel="hue" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="saturation" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="lightness" className="w-full">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </Field>
        </ColorPicker.View>
      </ColorPicker>
      <ColorPicker
        className="w-full items-center"
        defaultValue={parseColor("#10B981").toString("hex")}
      >
        <Field.Label>Hex</Field.Label>
        <Field orientation="horizontal">
          <ColorPicker.Control className="min-w-0 flex-1">
            <ColorPicker.Input asChild channel="hex">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input asChild channel="alpha">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.SwatchPreview className="size-6" />
          </ColorPicker.Control>
        </Field>
      </ColorPicker>
    </div>
  ),
});

export const InputCompact = meta.story({
  render: () => (
    <ColorPicker defaultValue={parseColor("#0485F7").toString("hsla")} format="hsla">
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview aria-hidden />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild channel="hex" className="flex-1">
            <InputGroup.Input />
          </ColorPicker.Input>
          <Separator orientation="vertical" />
          <ColorPicker.Input asChild channel="alpha">
            <InputGroup.Input aria-label="Opacity percentage" className="text-right" />
          </ColorPicker.Input>
          <InputGroup.Addon align="inline-end">
            <PercentIcon aria-hidden />
          </InputGroup.Addon>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area showDots>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="lightness" />
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
          </ColorPicker.ChannelSlider>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const InputControlled = meta.story({
  render: () => {
    const [value, setValue] = useState("#eb5e41");

    return (
      <div className="flex flex-col gap-2">
        <ColorPicker onValueChange={setValue} value={value}>
          <ColorPicker.Control>
            <ColorPicker.Input asChild>
              <Input />
            </ColorPicker.Input>
          </ColorPicker.Control>
        </ColorPicker>
        <p className="text-center text-muted-foreground text-sm">
          {parseColor(value).toString("hex")}
        </p>
      </div>
    );
  },
});

export const Disabled = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Input asChild>
          <Input placeholder="#EB5E41" />
        </ColorPicker.Input>
      </ColorPicker.Control>
    </ColorPicker>
  ),
});

export const Invalid = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" invalid>
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const InputWithPopover = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" format="hsla">
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const InputWithSwatchPreview = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41">
      <ColorPicker.Control>
        <InputGroup>
          <InputGroup.Addon align="inline-start">
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
    </ColorPicker>
  ),
});

export const PopoverDisabled = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick as color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area />
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const PopoverSlidersOnly = meta.story({
  render: () => (
    <ColorPicker defaultValue="#eb5e41" format="hsla">
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick a color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.View format="hsla">
          <div className="flex flex-col gap-2">
            <Field>
              <Field.Label>Hue</Field.Label>
              <ColorPicker.ChannelSlider channel="hue" />
            </Field>
            <Field>
              <Field.Label>Saturation</Field.Label>
              <ColorPicker.ChannelSlider channel="saturation" />
            </Field>
            <Field>
              <Field.Label>Lightness</Field.Label>
              <ColorPicker.ChannelSlider channel="lightness" />
            </Field>
            <Field>
              <Field.Label>Alpha</Field.Label>
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </Field>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const PopoverWithChannelEditing = meta.story({
  render: () => (
    <ColorPicker format="rgba">
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick a color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.ChannelSlider channel="hue" />
        <div className="grid grid-cols-3 gap-2">
          <ColorPicker.Input asChild channel="red">
            <Input />
          </ColorPicker.Input>
          <ColorPicker.Input asChild channel="green">
            <Input />
          </ColorPicker.Input>
          <ColorPicker.Input asChild channel="blue">
            <Input />
          </ColorPicker.Input>
        </div>
      </ColorPicker.Content>
    </ColorPicker>
  ),
});

export const PopoverWithSwatchPicker = meta.story({
  render: () => {
    const swatches = [
      "#ef4444",
      "#f97316",
      "#eab308",
      "#22c55e",
      "#06b6d4",
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f43f5e",
    ];
    return (
      <ColorPicker defaultValue="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <ColorPicker.Trigger asChild>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview className="size-6" />
              Pick a color
            </Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.ChannelSlider channel="hue" />
          </ColorPicker.View>
          <ColorPicker.SwatchGroup>
            {swatches.map((color) => (
              <ColorPicker.SwatchTrigger className="size-4" key={color} value={color}>
                <ColorPicker.Swatch value={color} />
              </ColorPicker.SwatchTrigger>
            ))}
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker>
    );
  },
});

export const SliderAlphaChannel = meta.story({
  args: {
    defaultValue: "hsla(0, 100%, 50%, 0.5)",
    format: "rgba",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="rgba">
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SliderControlled = meta.story({
  render: () => {
    const [color, setColor] = useState("rgba(82, 65, 235, 1)");

    return (
      <div className="flex flex-col gap-2">
        <ColorPicker className="w-full" format="hsla" inline onValueChange={setColor} value={color}>
          <ColorPicker.View format="hsla">
            <ColorPicker.ChannelSlider channel="hue" />
          </ColorPicker.View>
        </ColorPicker>
        <p className="text-center text-muted-foreground text-sm">{color}</p>
      </div>
    );
  },
});

export const SliderDisabled = meta.story({
  args: {
    defaultValue: "#EB5E41",
    disabled: true,
    format: "hsla",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="hsla">
        <ColorPicker.ChannelSlider channel="hue" />
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SliderHsbaChannels = meta.story({
  args: {
    defaultValue: "#0485F7",
    format: "hsba",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="hsba">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="brightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SliderHslChannels = meta.story({
  args: {
    defaultValue: "hsla(136, 69%, 50%, 1)",
    format: "hsla",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="hsla">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="lightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SliderRgbChannels = meta.story({
  args: {
    defaultValue: "#ff6432",
    format: "rgba",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="rgba">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="red" />
          <ColorPicker.ChannelSlider channel="green" />
          <ColorPicker.ChannelSlider channel="blue" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SliderVertical = meta.story({
  args: {
    className: "h-56 justify-between",
    defaultValue: "hsl(0, 100%, 50%)",
    format: "hsla",
    inline: true,
  },
  render: (args) => (
    <ColorPicker {...args}>
      <ColorPicker.View format="hsla">
        <div className="flex flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" orientation="vertical" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  ),
});

export const SwatchPickerControlled = meta.story({
  render: () => {
    const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
    const [value, setValue] = useState("#0485F7");

    return (
      <div className="flex flex-col items-center gap-2">
        <ColorPicker inline onValueChange={setValue} value={value}>
          <ColorPicker.SwatchGroup>
            {swatches.map((color) => (
              <ColorPicker.SwatchTrigger key={color} value={color}>
                <ColorPicker.Swatch value={color}>
                  <ColorPicker.SwatchIndicator />
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
            ))}
          </ColorPicker.SwatchGroup>
        </ColorPicker>
        <p className="text-center text-muted-foreground text-sm">
          {parseColor(value).toString("hex")}
        </p>
      </div>
    );
  },
});

export const SwatchPickerCustomIndicator = meta.story({
  render: () => {
    const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
    return (
      <ColorPicker inline>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger key={color} value={color}>
              <ColorPicker.Swatch value={color}>
                <ColorPicker.SwatchIndicator>
                  <SparkleIcon />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    );
  },
});

export const SwatchPickerCustomRadius = meta.story({
  render: () => (
    <ColorPicker inline>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-xs" value="#0485F7">
          <ColorPicker.Swatch value="#0485F7">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-md" value="#EF4444">
          <ColorPicker.Swatch value="#EF4444">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-lg" value="#F59E0B">
          <ColorPicker.Swatch value="#F59E0B">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="rounded-xl" value="#10B981">
          <ColorPicker.Swatch value="#10B981">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  ),
});

export const SwatchPickerCustomSize = meta.story({
  render: () => (
    <ColorPicker className="w-full flex-wrap justify-center gap-2" inline>
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger className="size-4" value="#0485F7">
          <ColorPicker.Swatch value="#0485F7" />
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-6" value="#EF4444">
          <ColorPicker.Swatch value="#EF4444">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-8" value="#F59E0B">
          <ColorPicker.Swatch value="#F59E0B">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
        <ColorPicker.SwatchTrigger className="size-10" value="#10B981">
          <ColorPicker.Swatch value="#10B981">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker>
  ),
});

export const SwatchPickerDisabled = meta.story({
  render: () => {
    const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
    return (
      <ColorPicker disabled>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger key={color} value={color}>
              <ColorPicker.Swatch value={color}>
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    );
  },
});

export const SwatchPicker = meta.story({
  render: () => {
    const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
    return (
      <ColorPicker inline>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger key={color} value={color}>
              <ColorPicker.Swatch value={color}>
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    );
  },
});

export const Clearable = meta.story({
  render: () => {
    const [value, setValue] = useState("#eb5e41");

    return (
      <div className="flex flex-col gap-6">
        <Field>
          <Field.Label>Compact field</Field.Label>
          <ColorPicker.Field onValueChange={setValue} value={value} />
        </Field>
        <Field>
          <Field.Label>Input group</Field.Label>
          <ColorPicker onValueChange={setValue} value={value}>
            <ColorPicker.Control clearable={false}>
              <InputGroup>
                <ColorPicker.Trigger asChild>
                  <InputGroup.Addon>
                    <ColorPicker.SwatchPreview />
                  </InputGroup.Addon>
                </ColorPicker.Trigger>
                <ColorPicker.Input asChild>
                  <InputGroup.Input clearable={false} />
                </ColorPicker.Input>
                <ColorPicker.ClearTrigger />
              </InputGroup>
            </ColorPicker.Control>
            <ColorPicker.Content>
              <ColorPicker.Area>
                <ColorPicker.AreaThumb />
              </ColorPicker.Area>
            </ColorPicker.Content>
          </ColorPicker>
        </Field>
      </div>
    );
  },
});
