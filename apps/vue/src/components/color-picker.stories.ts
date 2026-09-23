import { ColorPicker } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/color-picker/examples";
import { exampleRender } from "#/storybook/example-render";
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
  },
  title: "Components/Forms/Color Picker",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const AreaChannels = meta.story({
  render: exampleRender(Examples.AreaChannels),
});

export const AreaDots = meta.story({
  render: exampleRender(Examples.AreaDots),
});

export const InputChannel = meta.story({
  render: exampleRender(Examples.InputChannel),
});

export const InputCompact = meta.story({
  render: exampleRender(Examples.InputCompact),
});

export const InputControlled = meta.story({
  render: exampleRender(Examples.InputControlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const InputWithPopover = meta.story({
  render: exampleRender(Examples.InputWithPopover),
});

export const InputWithSwatchPreview = meta.story({
  render: exampleRender(Examples.InputWithSwatchPreview),
});

export const PopoverDisabled = meta.story({
  render: exampleRender(Examples.PopoverDisabled),
});

export const PopoverSlidersOnly = meta.story({
  render: exampleRender(Examples.PopoverSlidersOnly),
});

export const PopoverWithChannelEditing = meta.story({
  render: exampleRender(Examples.PopoverWithChannelEditing),
});

export const PopoverWithSwatchPicker = meta.story({
  render: exampleRender(Examples.PopoverWithSwatchPicker),
});

export const SliderAlphaChannel = meta.story({
  render: exampleRender(Examples.SliderAlphaChannel),
});

export const SliderControlled = meta.story({
  render: exampleRender(Examples.SliderControlled),
});

export const SliderDisabled = meta.story({
  render: exampleRender(Examples.SliderDisabled),
});

export const SliderHsbaChannels = meta.story({
  render: exampleRender(Examples.SliderHsbaChannels),
});

export const SliderHslChannels = meta.story({
  render: exampleRender(Examples.SliderHslChannels),
});

export const SliderRgbChannels = meta.story({
  render: exampleRender(Examples.SliderRgbChannels),
});

export const SliderVertical = meta.story({
  render: exampleRender(Examples.SliderVertical),
});

export const SwatchPickerControlled = meta.story({
  render: exampleRender(Examples.SwatchPickerControlled),
});

export const SwatchPickerCustomIndicator = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomIndicator),
});

export const SwatchPickerCustomRadius = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomRadius),
});

export const SwatchPickerCustomSize = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomSize),
});

export const SwatchPickerDisabled = meta.story({
  render: exampleRender(Examples.SwatchPickerDisabled),
});

export const SwatchPicker = meta.story({
  render: exampleRender(Examples.SwatchPicker),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
