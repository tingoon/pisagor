import { stripSvelteExample } from "@pisagor/utils";
import area_channelsRaw from "./area-channels.svelte?raw";
import area_dotsRaw from "./area-dots.svelte?raw";
import clearableRaw from "./clearable.svelte?raw";
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

export const imports = `import { ColorPicker } from "@pisagor/svelte/color-picker";`;

export const sources = {
  AreaChannels: stripSvelteExample(area_channelsRaw),
  AreaDots: stripSvelteExample(area_dotsRaw),
  Clearable: stripSvelteExample(clearableRaw),
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  InputChannel: stripSvelteExample(input_channelRaw),
  InputCompact: stripSvelteExample(input_compactRaw),
  InputControlled: stripSvelteExample(input_controlledRaw),
  InputWithPopover: stripSvelteExample(input_with_popoverRaw),
  InputWithSwatchPreview: stripSvelteExample(input_with_swatch_previewRaw),
  Invalid: stripSvelteExample(invalidRaw),
  PopoverDisabled: stripSvelteExample(popover_disabledRaw),
  PopoverSlidersOnly: stripSvelteExample(popover_sliders_onlyRaw),
  PopoverWithChannelEditing: stripSvelteExample(
    popover_with_channel_editingRaw,
  ),
  PopoverWithSwatchPicker: stripSvelteExample(popover_with_swatch_pickerRaw),
  SliderAlphaChannel: stripSvelteExample(slider_alpha_channelRaw),
  SliderControlled: stripSvelteExample(slider_controlledRaw),
  SliderDisabled: stripSvelteExample(slider_disabledRaw),
  SliderHsbaChannels: stripSvelteExample(slider_hsba_channelsRaw),
  SliderHslChannels: stripSvelteExample(slider_hsl_channelsRaw),
  SliderRgbChannels: stripSvelteExample(slider_rgb_channelsRaw),
  SliderVertical: stripSvelteExample(slider_verticalRaw),
  SwatchPicker: stripSvelteExample(swatch_pickerRaw),
  SwatchPickerControlled: stripSvelteExample(swatch_picker_controlledRaw),
  SwatchPickerCustomIndicator: stripSvelteExample(
    swatch_picker_custom_indicatorRaw,
  ),
  SwatchPickerCustomRadius: stripSvelteExample(swatch_picker_custom_radiusRaw),
  SwatchPickerCustomSize: stripSvelteExample(swatch_picker_custom_sizeRaw),
  SwatchPickerDisabled: stripSvelteExample(swatch_picker_disabledRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as AreaChannels } from "./area-channels.svelte";
export { default as AreaDots } from "./area-dots.svelte";
export { default as Clearable } from "./clearable.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as InputChannel } from "./input-channel.svelte";
export { default as InputCompact } from "./input-compact.svelte";
export { default as InputControlled } from "./input-controlled.svelte";
export { default as InputWithPopover } from "./input-with-popover.svelte";
export { default as InputWithSwatchPreview } from "./input-with-swatch-preview.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as PopoverDisabled } from "./popover-disabled.svelte";
export { default as PopoverSlidersOnly } from "./popover-sliders-only.svelte";
export { default as PopoverWithChannelEditing } from "./popover-with-channel-editing.svelte";
export { default as PopoverWithSwatchPicker } from "./popover-with-swatch-picker.svelte";
export { default as SliderAlphaChannel } from "./slider-alpha-channel.svelte";
export { default as SliderControlled } from "./slider-controlled.svelte";
export { default as SliderDisabled } from "./slider-disabled.svelte";
export { default as SliderHsbaChannels } from "./slider-hsba-channels.svelte";
export { default as SliderHslChannels } from "./slider-hsl-channels.svelte";
export { default as SliderRgbChannels } from "./slider-rgb-channels.svelte";
export { default as SliderVertical } from "./slider-vertical.svelte";
export { default as SwatchPicker } from "./swatch-picker.svelte";
export { default as SwatchPickerControlled } from "./swatch-picker-controlled.svelte";
export { default as SwatchPickerCustomIndicator } from "./swatch-picker-custom-indicator.svelte";
export { default as SwatchPickerCustomRadius } from "./swatch-picker-custom-radius.svelte";
export { default as SwatchPickerCustomSize } from "./swatch-picker-custom-size.svelte";
export { default as SwatchPickerDisabled } from "./swatch-picker-disabled.svelte";
export { default as Variants } from "./variants.svelte";
