import { PhPercent, PhSparkle } from "@phosphor-icons/vue";
import {
  Button,
  ColorPicker,
  Field,
  Input,
  InputGroup,
  parseColor,
  Separator,
  Surface,
} from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

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
    ClearTrigger: ColorPicker.ClearTrigger,
    Content: ColorPicker.Content,
    Control: ColorPicker.Control,
    EyeDropperTrigger: ColorPicker.EyeDropperTrigger,
    Input: ColorPicker.Input,
    Slider: ColorPicker.Slider,
    Swatch: ColorPicker.Swatch,
    SwatchGroup: ColorPicker.SwatchGroup,
    SwatchIndicator: ColorPicker.SwatchIndicator,
    SwatchPreview: ColorPicker.SwatchPreview,
    SwatchTrigger: ColorPicker.SwatchTrigger,
    TransparencyGrid: ColorPicker.TransparencyGrid,
    Trigger: ColorPicker.Trigger,
    Value: ColorPicker.Value,
    ValueSwatch: ColorPicker.ValueSwatch,
    View: ColorPicker.View,
  },
  title: "Components/Forms/Color Picker",
});

export const Default = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <ColorPicker default-value="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child>
              <InputGroup.Input />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <div class="flex items-center gap-3">
              <ColorPicker.EyeDropperTrigger />
              <div class="flex flex-1 flex-col gap-2.5">
                <ColorPicker.Slider channel="hue" />
                <ColorPicker.Slider channel="alpha">
                  <ColorPicker.TransparencyGrid />
                </ColorPicker.Slider>
              </div>
            </div>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <div class="flex flex-col gap-2">
        <ColorPicker default-value="#eb5e41" format="hsla" variant="primary">
          <ColorPicker.Control>
            <InputGroup>
              <ColorPicker.Trigger as-child>
                <InputGroup.Addon>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              </ColorPicker.Trigger>
              <ColorPicker.Input as-child>
                <InputGroup.Input placeholder="Primary" />
              </ColorPicker.Input>
            </InputGroup>
          </ColorPicker.Control>
        </ColorPicker>
        <ColorPicker default-value="#eb5e41" format="hsla" variant="secondary">
          <ColorPicker.Control>
            <InputGroup>
              <ColorPicker.Trigger as-child>
                <InputGroup.Addon>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              </ColorPicker.Trigger>
              <ColorPicker.Input as-child>
                <InputGroup.Input placeholder="Secondary" />
              </ColorPicker.Input>
            </InputGroup>
          </ColorPicker.Control>
        </ColorPicker>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { ColorPicker, InputGroup, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <ColorPicker default-value="#eb5e41" format="hsla" variant="primary">
            <ColorPicker.Control>
              <InputGroup>
                <ColorPicker.Trigger as-child>
                  <InputGroup.Addon>
                    <ColorPicker.SwatchPreview />
                  </InputGroup.Addon>
                </ColorPicker.Trigger>
                <ColorPicker.Input as-child>
                  <InputGroup.Input placeholder="Primary" />
                </ColorPicker.Input>
              </InputGroup>
            </ColorPicker.Control>
          </ColorPicker>
          <ColorPicker default-value="#eb5e41" format="hsla" variant="secondary">
            <ColorPicker.Control>
              <InputGroup>
                <ColorPicker.Trigger as-child>
                  <InputGroup.Addon>
                    <ColorPicker.SwatchPreview />
                  </InputGroup.Addon>
                </ColorPicker.Trigger>
                <ColorPicker.Input as-child>
                  <InputGroup.Input placeholder="Secondary" />
                </ColorPicker.Input>
              </InputGroup>
            </ColorPicker.Control>
          </ColorPicker>
        </div>
      </Surface>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <ColorPicker default-value="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child>
              <InputGroup.Input />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Content class="[--space:--spacing(2)] sm:[--space:--spacing(4)]">
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <div class="flex items-center gap-3">
              <ColorPicker.EyeDropperTrigger />
              <div class="flex flex-1 flex-col gap-2.5">
                <ColorPicker.Slider channel="hue" />
                <ColorPicker.Slider channel="alpha">
                  <ColorPicker.TransparencyGrid />
                </ColorPicker.Slider>
              </div>
            </div>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const AreaChannels = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="#182098" inline>
        <ColorPicker.Area x-channel="hue" y-channel="alpha">
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
      </ColorPicker>
    `,
  }),
});

export const AreaDots = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="#19932C" inline>
        <ColorPicker.Area show-dots x-channel="hue" y-channel="alpha">
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
      </ColorPicker>
    `,
  }),
});

export const InputChannel = meta.story({
  render: () => ({
    components: { ColorPicker, Field, Input },
    setup() {
      const rgbaValue = parseColor("#0485F7").toString("rgba");
      const hsbaValue = parseColor("#EF4444").toString("hsba");
      const hslaValue = parseColor("#F59E0B").toString("hsla");
      const hexValue = parseColor("#10B981").toString("hex");
      return { hexValue, hsbaValue, hslaValue, rgbaValue };
    },
    template: `
      <div class="flex flex-col gap-2">
        <ColorPicker class="w-full" :default-value="rgbaValue" format="rgba">
          <ColorPicker.View format="rgba">
            <Field orientation="horizontal">
              <Field.Label>RGB</Field.Label>
              <ColorPicker.Input as-child channel="red" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="green" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="blue" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.SwatchPreview class="size-6" />
            </Field>
          </ColorPicker.View>
        </ColorPicker>
        <ColorPicker class="w-full" :default-value="hsbaValue" format="hsba">
          <ColorPicker.View format="hsba">
            <Field orientation="horizontal">
              <Field.Label>HSB</Field.Label>
              <ColorPicker.Input as-child channel="hue" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="saturation" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="brightness" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.SwatchPreview class="size-6" />
            </Field>
          </ColorPicker.View>
        </ColorPicker>
        <ColorPicker class="w-full" :default-value="hslaValue" format="hsla">
          <ColorPicker.View format="hsla">
            <Field orientation="horizontal">
              <Field.Label>HSL</Field.Label>
              <ColorPicker.Input as-child channel="hue" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="saturation" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="lightness" class="w-full">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.SwatchPreview class="size-6" />
            </Field>
          </ColorPicker.View>
        </ColorPicker>
        <ColorPicker class="w-full items-center" :default-value="hexValue">
          <Field.Label>Hex</Field.Label>
          <Field orientation="horizontal">
            <ColorPicker.Control class="min-w-0 flex-1">
              <ColorPicker.Input as-child channel="hex">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input as-child channel="alpha">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.SwatchPreview class="size-6" />
            </ColorPicker.Control>
          </Field>
        </ColorPicker>
      </div>
    `,
  }),
});

export const InputCompact = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup, PhPercent, Separator },
    setup() {
      const defaultValue = parseColor("#0485F7").toString("hsla");
      return { defaultValue };
    },
    template: `
      <ColorPicker :default-value="defaultValue" format="hsla">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview aria-hidden />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child channel="hex" class="flex-1">
              <InputGroup.Input />
            </ColorPicker.Input>
            <Separator orientation="vertical" />
            <ColorPicker.Input as-child channel="alpha">
              <InputGroup.Input aria-label="Opacity percentage" class="text-right" />
            </ColorPicker.Input>
            <InputGroup.Addon align="inline-end">
              <PhPercent aria-hidden />
            </InputGroup.Addon>
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area show-dots>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.Slider channel="hue" />
            <ColorPicker.Slider channel="saturation" />
            <ColorPicker.Slider channel="lightness" />
            <ColorPicker.Slider channel="alpha">
              <ColorPicker.TransparencyGrid />
            </ColorPicker.Slider>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const InputControlled = meta.story({
  render: () => ({
    components: { ColorPicker, Input },
    setup() {
      const value = ref("#eb5e41");
      const hexValue = computed(() => parseColor(value.value).toString("hex"));
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { hexValue, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <ColorPicker :onValueChange="onValueChange" :value="value">
          <ColorPicker.Control>
            <ColorPicker.Input as-child>
              <Input />
            </ColorPicker.Input>
          </ColorPicker.Control>
        </ColorPicker>
        <p class="text-center text-muted-foreground text-sm">{{ hexValue }}</p>
      </div>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { ColorPicker, Input },
    template: `
      <ColorPicker default-value="#eb5e41" disabled>
        <ColorPicker.Control>
          <ColorPicker.Input as-child>
            <Input placeholder="#EB5E41" />
          </ColorPicker.Input>
        </ColorPicker.Control>
      </ColorPicker>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <ColorPicker default-value="#eb5e41" invalid>
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child>
              <InputGroup.Input />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.Slider channel="hue" />
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const InputWithPopover = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <ColorPicker default-value="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child>
              <InputGroup.Input />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.Slider channel="hue" />
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const InputWithSwatchPreview = meta.story({
  render: () => ({
    components: { ColorPicker, InputGroup },
    template: `
      <ColorPicker default-value="#eb5e41">
        <ColorPicker.Control>
          <InputGroup>
            <InputGroup.Addon align="inline-start">
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
            <ColorPicker.Input as-child>
              <InputGroup.Input />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
    `,
  }),
});

export const PopoverDisabled = meta.story({
  render: () => ({
    components: { Button, ColorPicker },
    template: `
      <ColorPicker default-value="#eb5e41" disabled>
        <ColorPicker.Control>
          <ColorPicker.Trigger as-child>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick as color
            </Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area />
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const PopoverSlidersOnly = meta.story({
  render: () => ({
    components: { Button, ColorPicker, Field },
    template: `
      <ColorPicker default-value="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <ColorPicker.Trigger as-child>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick a color
            </Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.View format="hsla">
            <div class="flex flex-col gap-2">
              <Field>
                <Field.Label>Hue</Field.Label>
                <ColorPicker.Slider channel="hue" />
              </Field>
              <Field>
                <Field.Label>Saturation</Field.Label>
                <ColorPicker.Slider channel="saturation" />
              </Field>
              <Field>
                <Field.Label>Lightness</Field.Label>
                <ColorPicker.Slider channel="lightness" />
              </Field>
              <Field>
                <Field.Label>Alpha</Field.Label>
                <ColorPicker.Slider channel="alpha">
                  <ColorPicker.TransparencyGrid />
                </ColorPicker.Slider>
              </Field>
            </div>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const PopoverWithChannelEditing = meta.story({
  render: () => ({
    components: { Button, ColorPicker, Input },
    template: `
      <ColorPicker format="rgba">
        <ColorPicker.Control>
          <ColorPicker.Trigger as-child>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick a color
            </Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.Slider channel="hue" />
          <div class="grid grid-cols-3 gap-2">
            <ColorPicker.Input as-child channel="red">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input as-child channel="green">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input as-child channel="blue">
              <Input />
            </ColorPicker.Input>
          </div>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const PopoverWithSwatchPicker = meta.story({
  render: () => ({
    components: { Button, ColorPicker },
    setup() {
      const swatchPalette = [
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
      return { swatchPalette };
    },
    template: `
      <ColorPicker default-value="#eb5e41" format="hsla">
        <ColorPicker.Control>
          <ColorPicker.Trigger as-child>
            <Button size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick a color
            </Button>
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.Slider channel="hue" />
          </ColorPicker.View>
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger
              v-for="color in swatchPalette"
              class="size-4"
              :key="color"
              :value="color"
            >
              <ColorPicker.Swatch :value="color" />
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker>
    `,
  }),
});

export const SliderAlphaChannel = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="hsla(0, 100%, 50%, 0.5)" format="rgba" inline>
        <ColorPicker.View format="rgba">
          <ColorPicker.Slider channel="alpha">
            <ColorPicker.TransparencyGrid />
          </ColorPicker.Slider>
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SliderControlled = meta.story({
  render: () => ({
    components: { ColorPicker },
    setup() {
      const color = ref("rgba(82, 65, 235, 1)");
      const onValueChange = (next: string) => {
        color.value = next;
      };
      return { color, onValueChange };
    },
    template: `
      <div class="flex flex-col gap-2">
        <ColorPicker class="w-full" format="hsla" inline :onValueChange="onValueChange" :value="color">
          <ColorPicker.View format="hsla">
            <ColorPicker.Slider channel="hue" />
          </ColorPicker.View>
        </ColorPicker>
        <p class="text-center text-muted-foreground text-sm">{{ color }}</p>
      </div>
    `,
  }),
});

export const SliderDisabled = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="#EB5E41" disabled format="hsla" inline>
        <ColorPicker.View format="hsla">
          <ColorPicker.Slider channel="hue" />
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SliderHsbaChannels = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="#0485F7" format="hsba" inline>
        <ColorPicker.View format="hsba">
          <div class="flex w-full flex-col gap-2">
            <ColorPicker.Slider channel="hue" />
            <ColorPicker.Slider channel="saturation" />
            <ColorPicker.Slider channel="brightness" />
          </div>
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SliderHslChannels = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="hsla(136, 69%, 50%, 1)" format="hsla" inline>
        <ColorPicker.View format="hsla">
          <div class="flex w-full flex-col gap-2">
            <ColorPicker.Slider channel="hue" />
            <ColorPicker.Slider channel="saturation" />
            <ColorPicker.Slider channel="lightness" />
          </div>
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SliderRgbChannels = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker default-value="#ff6432" format="rgba" inline>
        <ColorPicker.View format="rgba">
          <div class="flex w-full flex-col gap-2">
            <ColorPicker.Slider channel="red" />
            <ColorPicker.Slider channel="green" />
            <ColorPicker.Slider channel="blue" />
          </div>
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SliderVertical = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker class="h-56 justify-between" default-value="hsl(0, 100%, 50%)" format="hsla" inline>
        <ColorPicker.View format="hsla">
          <div class="flex flex-col gap-2">
            <ColorPicker.Slider channel="hue" orientation="vertical" />
          </div>
        </ColorPicker.View>
      </ColorPicker>
    `,
  }),
});

export const SwatchPickerControlled = meta.story({
  render: () => ({
    components: { ColorPicker },
    setup() {
      const value = ref("#0485F7");
      const hexValue = computed(() => parseColor(value.value).toString("hex"));
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { hexValue, onValueChange, swatches, value };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <ColorPicker inline :onValueChange="onValueChange" :value="value">
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
              <ColorPicker.Swatch :value="color">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker>
        <p class="text-center text-muted-foreground text-sm">{{ hexValue }}</p>
      </div>
    `,
  }),
});

export const SwatchPickerCustomIndicator = meta.story({
  render: () => ({
    components: { ColorPicker, PhSparkle },
    setup() {
      return { swatches };
    },
    template: `
      <ColorPicker inline>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
            <ColorPicker.Swatch :value="color">
              <ColorPicker.SwatchIndicator>
                <PhSparkle />
              </ColorPicker.SwatchIndicator>
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    `,
  }),
});

export const SwatchPickerCustomRadius = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker inline>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger class="rounded-xs" value="#0485F7">
            <ColorPicker.Swatch value="#0485F7">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger class="rounded-md" value="#EF4444">
            <ColorPicker.Swatch value="#EF4444">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger class="rounded-lg" value="#F59E0B">
            <ColorPicker.Swatch value="#F59E0B">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger class="rounded-xl" value="#10B981">
            <ColorPicker.Swatch value="#10B981">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    `,
  }),
});

export const SwatchPickerCustomSize = meta.story({
  render: () => ({
    components: { ColorPicker },
    template: `
      <ColorPicker class="w-full flex-wrap justify-center gap-2" inline>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger class="size-4" value="#0485F7">
            <ColorPicker.Swatch value="#0485F7" />
          </ColorPicker.SwatchTrigger>
          <ColorPicker.SwatchTrigger class="size-6" value="#EF4444">
            <ColorPicker.Swatch value="#EF4444">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
          <ColorPicker.SwatchTrigger class="size-8" value="#F59E0B">
            <ColorPicker.Swatch value="#F59E0B">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
          <ColorPicker.SwatchTrigger class="size-10" value="#10B981">
            <ColorPicker.Swatch value="#10B981">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    `,
  }),
});

export const SwatchPickerDisabled = meta.story({
  render: () => ({
    components: { ColorPicker },
    setup() {
      return { swatches };
    },
    template: `
      <ColorPicker disabled>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
            <ColorPicker.Swatch :value="color">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    `,
  }),
});

export const SwatchPicker = meta.story({
  render: () => ({
    components: { ColorPicker },
    setup() {
      return { swatches };
    },
    template: `
      <ColorPicker inline>
        <ColorPicker.SwatchGroup>
          <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
            <ColorPicker.Swatch :value="color">
              <ColorPicker.SwatchIndicator />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        </ColorPicker.SwatchGroup>
      </ColorPicker>
    `,
  }),
});

export const Clearable = meta.story({
  render: () => ({
    components: { ColorPicker, Field, InputGroup },
    setup() {
      const value = ref("#eb5e41");
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-6">
        <Field>
          <Field.Label>Compact field</Field.Label>
          <ColorPicker.Field :onValueChange="onValueChange" :value="value" />
        </Field>
        <Field>
          <Field.Label>Input group</Field.Label>
          <ColorPicker :onValueChange="onValueChange" :value="value">
            <ColorPicker.Control :clearable="false">
              <InputGroup>
                <ColorPicker.Trigger as-child>
                  <InputGroup.Addon>
                    <ColorPicker.SwatchPreview />
                  </InputGroup.Addon>
                </ColorPicker.Trigger>
                <ColorPicker.Input as-child>
                  <InputGroup.Input :clearable="false" />
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
    `,
  }),
});

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
