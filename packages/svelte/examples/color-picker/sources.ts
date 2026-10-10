import area_channelsRaw from "./area-channels.svelte?raw";
import area_dotsRaw from "./area-dots.svelte?raw";
import clearableRaw from "./clearable.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import input_channelRaw from "./input-channel.svelte?raw";
import input_compactRaw from "./input-compact.svelte?raw";
import input_controlledRaw from "./input-controlled.svelte?raw";
import input_with_popoverRaw from "./input-with-popover.svelte?raw";
import input_with_swatch_previewRaw from "./input-with-swatch-preview.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import popover_disabledRaw from "./popover-disabled.svelte?raw";
import popover_sliders_onlyRaw from "./popover-sliders-only.svelte?raw";
import popover_with_channel_editingRaw from "./popover-with-channel-editing.svelte?raw";
import popover_with_swatch_pickerRaw from "./popover-with-swatch-picker.svelte?raw";
import slider_alpha_channelRaw from "./slider-alpha-channel.svelte?raw";
import slider_controlledRaw from "./slider-controlled.svelte?raw";
import slider_disabledRaw from "./slider-disabled.svelte?raw";
import slider_hsba_channelsRaw from "./slider-hsba-channels.svelte?raw";
import slider_hsl_channelsRaw from "./slider-hsl-channels.svelte?raw";
import slider_rgb_channelsRaw from "./slider-rgb-channels.svelte?raw";
import slider_verticalRaw from "./slider-vertical.svelte?raw";
import swatch_pickerRaw from "./swatch-picker.svelte?raw";
import swatch_picker_controlledRaw from "./swatch-picker-controlled.svelte?raw";
import swatch_picker_custom_indicatorRaw from "./swatch-picker-custom-indicator.svelte?raw";
import swatch_picker_custom_radiusRaw from "./swatch-picker-custom-radius.svelte?raw";
import swatch_picker_custom_sizeRaw from "./swatch-picker-custom-size.svelte?raw";
import swatch_picker_disabledRaw from "./swatch-picker-disabled.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { ColorPicker } from "@pisagor/svelte";`;

export const sources = {
  AreaChannels: area_channelsRaw,
  AreaDots: area_dotsRaw,
  Clearable: clearableRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  InputChannel: input_channelRaw,
  InputCompact: input_compactRaw,
  InputControlled: input_controlledRaw,
  InputWithPopover: input_with_popoverRaw,
  InputWithSwatchPreview: input_with_swatch_previewRaw,
  Invalid: invalidRaw,
  PopoverDisabled: popover_disabledRaw,
  PopoverSlidersOnly: popover_sliders_onlyRaw,
  PopoverWithChannelEditing: popover_with_channel_editingRaw,
  PopoverWithSwatchPicker: popover_with_swatch_pickerRaw,
  SliderAlphaChannel: slider_alpha_channelRaw,
  SliderControlled: slider_controlledRaw,
  SliderDisabled: slider_disabledRaw,
  SliderHsbaChannels: slider_hsba_channelsRaw,
  SliderHslChannels: slider_hsl_channelsRaw,
  SliderRgbChannels: slider_rgb_channelsRaw,
  SliderVertical: slider_verticalRaw,
  SwatchPicker: swatch_pickerRaw,
  SwatchPickerControlled: swatch_picker_controlledRaw,
  SwatchPickerCustomIndicator: swatch_picker_custom_indicatorRaw,
  SwatchPickerCustomRadius: swatch_picker_custom_radiusRaw,
  SwatchPickerCustomSize: swatch_picker_custom_sizeRaw,
  SwatchPickerDisabled: swatch_picker_disabledRaw,
  Variants: variantsRaw,
} as const;
