import { ColorPicker } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/color-picker";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
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

export const InputWithPopover = meta.story({
  render: exampleRender(Examples.InputWithPopover),
});

export const InputWithSwatchPreview = meta.story({
  render: exampleRender(Examples.InputWithSwatchPreview),
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

export const SwatchPicker = meta.story({
  render: exampleRender(Examples.SwatchPicker),
});

export const SwatchPickerCustomIndicator = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomIndicator),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const InputControlled = meta.story({
  render: exampleRender(Examples.InputControlled),
});

export const SliderControlled = meta.story({
  render: exampleRender(Examples.SliderControlled),
});

export const SwatchPickerControlled = meta.story({
  render: exampleRender(Examples.SwatchPickerControlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const PopoverDisabled = meta.story({
  render: exampleRender(Examples.PopoverDisabled),
});

export const SliderDisabled = meta.story({
  render: exampleRender(Examples.SliderDisabled),
});

export const SwatchPickerDisabled = meta.story({
  render: exampleRender(Examples.SwatchPickerDisabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const SwatchPickerCustomRadius = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomRadius),
});

export const SwatchPickerCustomSize = meta.story({
  render: exampleRender(Examples.SwatchPickerCustomSize),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
