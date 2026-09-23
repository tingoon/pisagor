import { ColorPicker } from "@pisagor/react";
import * as Examples from "@pisagor/react/color-picker/examples";

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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const AreaChannels = meta.story({
  render: Examples.AreaChannels,
});

export const AreaDots = meta.story({
  render: Examples.AreaDots,
});

export const InputChannel = meta.story({
  render: Examples.InputChannel,
});

export const InputCompact = meta.story({
  render: Examples.InputCompact,
});

export const InputControlled = meta.story({
  render: Examples.InputControlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const InputWithPopover = meta.story({
  render: Examples.InputWithPopover,
});

export const InputWithSwatchPreview = meta.story({
  render: Examples.InputWithSwatchPreview,
});

export const PopoverDisabled = meta.story({
  render: Examples.PopoverDisabled,
});

export const PopoverSlidersOnly = meta.story({
  render: Examples.PopoverSlidersOnly,
});

export const PopoverWithChannelEditing = meta.story({
  render: Examples.PopoverWithChannelEditing,
});

export const PopoverWithSwatchPicker = meta.story({
  render: Examples.PopoverWithSwatchPicker,
});

export const SliderAlphaChannel = meta.story({
  render: Examples.SliderAlphaChannel,
});

export const SliderControlled = meta.story({
  render: Examples.SliderControlled,
});

export const SliderDisabled = meta.story({
  render: Examples.SliderDisabled,
});

export const SliderHsbaChannels = meta.story({
  render: Examples.SliderHsbaChannels,
});

export const SliderHslChannels = meta.story({
  render: Examples.SliderHslChannels,
});

export const SliderRgbChannels = meta.story({
  render: Examples.SliderRgbChannels,
});

export const SliderVertical = meta.story({
  render: Examples.SliderVertical,
});

export const SwatchPickerControlled = meta.story({
  render: Examples.SwatchPickerControlled,
});

export const SwatchPickerCustomIndicator = meta.story({
  render: Examples.SwatchPickerCustomIndicator,
});

export const SwatchPickerCustomRadius = meta.story({
  render: Examples.SwatchPickerCustomRadius,
});

export const SwatchPickerCustomSize = meta.story({
  render: Examples.SwatchPickerCustomSize,
});

export const SwatchPickerDisabled = meta.story({
  render: Examples.SwatchPickerDisabled,
});

export const SwatchPicker = meta.story({
  render: Examples.SwatchPicker,
});

export const Clearable = meta.story({
  render: Examples.Clearable,
});

export const Default = meta.story({
  render: Examples.Default,
});
