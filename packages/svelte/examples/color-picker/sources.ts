import AreaChannels from "./area-channels.svelte?raw";
import AreaDots from "./area-dots.svelte?raw";
import Clearable from "./clearable.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import InputChannel from "./input-channel.svelte?raw";
import InputCompact from "./input-compact.svelte?raw";
import InputControlled from "./input-controlled.svelte?raw";
import InputWithPopover from "./input-with-popover.svelte?raw";
import InputWithSwatchPreview from "./input-with-swatch-preview.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import LabelFormatSelect from "./label-format-select.svelte?raw";
import PopoverDisabled from "./popover-disabled.svelte?raw";
import PopoverSlidersOnly from "./popover-sliders-only.svelte?raw";
import PopoverWithChannelEditing from "./popover-with-channel-editing.svelte?raw";
import PopoverWithSwatchPicker from "./popover-with-swatch-picker.svelte?raw";
import SliderAlphaChannel from "./slider-alpha-channel.svelte?raw";
import SliderControlled from "./slider-controlled.svelte?raw";
import SliderDisabled from "./slider-disabled.svelte?raw";
import SliderHsbaChannels from "./slider-hsba-channels.svelte?raw";
import SliderHslChannels from "./slider-hsl-channels.svelte?raw";
import SliderRgbChannels from "./slider-rgb-channels.svelte?raw";
import SliderVertical from "./slider-vertical.svelte?raw";
import SwatchPicker from "./swatch-picker.svelte?raw";
import SwatchPickerControlled from "./swatch-picker-controlled.svelte?raw";
import SwatchPickerCustomIndicator from "./swatch-picker-custom-indicator.svelte?raw";
import SwatchPickerCustomRadius from "./swatch-picker-custom-radius.svelte?raw";
import SwatchPickerCustomSize from "./swatch-picker-custom-size.svelte?raw";
import SwatchPickerDisabled from "./swatch-picker-disabled.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { ColorPicker } from "@pisagor/svelte";`;

export const sources = {
  AreaChannels,
  AreaDots,
  Clearable,
  CustomRecipe,
  CustomSpacing,
  Default,
  Disabled,
  InputChannel,
  InputCompact,
  InputControlled,
  InputWithPopover,
  InputWithSwatchPreview,
  Invalid,
  LabelFormatSelect,
  PopoverDisabled,
  PopoverSlidersOnly,
  PopoverWithChannelEditing,
  PopoverWithSwatchPicker,
  SliderAlphaChannel,
  SliderControlled,
  SliderDisabled,
  SliderHsbaChannels,
  SliderHslChannels,
  SliderRgbChannels,
  SliderVertical,
  SwatchPicker,
  SwatchPickerControlled,
  SwatchPickerCustomIndicator,
  SwatchPickerCustomRadius,
  SwatchPickerCustomSize,
  SwatchPickerDisabled,
  Variants,
} as const;
