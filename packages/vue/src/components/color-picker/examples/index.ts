import { stripVueExample } from "@pisagor/utils";
import area_channelsRaw from "./area-channels.vue?raw";
import area_dotsRaw from "./area-dots.vue?raw";
import clearableRaw from "./clearable.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import input_channelRaw from "./input-channel.vue?raw";
import input_compactRaw from "./input-compact.vue?raw";
import input_controlledRaw from "./input-controlled.vue?raw";
import input_with_popoverRaw from "./input-with-popover.vue?raw";
import input_with_swatch_previewRaw from "./input-with-swatch-preview.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import popover_disabledRaw from "./popover-disabled.vue?raw";
import popover_sliders_onlyRaw from "./popover-sliders-only.vue?raw";
import popover_with_channel_editingRaw from "./popover-with-channel-editing.vue?raw";
import popover_with_swatch_pickerRaw from "./popover-with-swatch-picker.vue?raw";
import slider_alpha_channelRaw from "./slider-alpha-channel.vue?raw";
import slider_controlledRaw from "./slider-controlled.vue?raw";
import slider_disabledRaw from "./slider-disabled.vue?raw";
import slider_hsba_channelsRaw from "./slider-hsba-channels.vue?raw";
import slider_hsl_channelsRaw from "./slider-hsl-channels.vue?raw";
import slider_rgb_channelsRaw from "./slider-rgb-channels.vue?raw";
import slider_verticalRaw from "./slider-vertical.vue?raw";
import swatch_pickerRaw from "./swatch-picker.vue?raw";
import swatch_picker_controlledRaw from "./swatch-picker-controlled.vue?raw";
import swatch_picker_custom_indicatorRaw from "./swatch-picker-custom-indicator.vue?raw";
import swatch_picker_custom_radiusRaw from "./swatch-picker-custom-radius.vue?raw";
import swatch_picker_custom_sizeRaw from "./swatch-picker-custom-size.vue?raw";
import swatch_picker_disabledRaw from "./swatch-picker-disabled.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { ColorPicker } from "@pisagor/vue/color-picker";`;

export const sources = {
  AreaChannels: stripVueExample(area_channelsRaw),
  AreaDots: stripVueExample(area_dotsRaw),
  Clearable: stripVueExample(clearableRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  InputChannel: stripVueExample(input_channelRaw),
  InputCompact: stripVueExample(input_compactRaw),
  InputControlled: stripVueExample(input_controlledRaw),
  InputWithPopover: stripVueExample(input_with_popoverRaw),
  InputWithSwatchPreview: stripVueExample(input_with_swatch_previewRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  PopoverDisabled: stripVueExample(popover_disabledRaw),
  PopoverSlidersOnly: stripVueExample(popover_sliders_onlyRaw),
  PopoverWithChannelEditing: stripVueExample(popover_with_channel_editingRaw),
  PopoverWithSwatchPicker: stripVueExample(popover_with_swatch_pickerRaw),
  SliderAlphaChannel: stripVueExample(slider_alpha_channelRaw),
  SliderControlled: stripVueExample(slider_controlledRaw),
  SliderDisabled: stripVueExample(slider_disabledRaw),
  SliderHsbaChannels: stripVueExample(slider_hsba_channelsRaw),
  SliderHslChannels: stripVueExample(slider_hsl_channelsRaw),
  SliderRgbChannels: stripVueExample(slider_rgb_channelsRaw),
  SliderVertical: stripVueExample(slider_verticalRaw),
  SwatchPicker: stripVueExample(swatch_pickerRaw),
  SwatchPickerControlled: stripVueExample(swatch_picker_controlledRaw),
  SwatchPickerCustomIndicator: stripVueExample(
    swatch_picker_custom_indicatorRaw,
  ),
  SwatchPickerCustomRadius: stripVueExample(swatch_picker_custom_radiusRaw),
  SwatchPickerCustomSize: stripVueExample(swatch_picker_custom_sizeRaw),
  SwatchPickerDisabled: stripVueExample(swatch_picker_disabledRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as AreaChannels } from "./area-channels.vue";
export { default as AreaDots } from "./area-dots.vue";
export { default as Clearable } from "./clearable.vue";
export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as InputChannel } from "./input-channel.vue";
export { default as InputCompact } from "./input-compact.vue";
export { default as InputControlled } from "./input-controlled.vue";
export { default as InputWithPopover } from "./input-with-popover.vue";
export { default as InputWithSwatchPreview } from "./input-with-swatch-preview.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as PopoverDisabled } from "./popover-disabled.vue";
export { default as PopoverSlidersOnly } from "./popover-sliders-only.vue";
export { default as PopoverWithChannelEditing } from "./popover-with-channel-editing.vue";
export { default as PopoverWithSwatchPicker } from "./popover-with-swatch-picker.vue";
export { default as SliderAlphaChannel } from "./slider-alpha-channel.vue";
export { default as SliderControlled } from "./slider-controlled.vue";
export { default as SliderDisabled } from "./slider-disabled.vue";
export { default as SliderHsbaChannels } from "./slider-hsba-channels.vue";
export { default as SliderHslChannels } from "./slider-hsl-channels.vue";
export { default as SliderRgbChannels } from "./slider-rgb-channels.vue";
export { default as SliderVertical } from "./slider-vertical.vue";
export { default as SwatchPicker } from "./swatch-picker.vue";
export { default as SwatchPickerControlled } from "./swatch-picker-controlled.vue";
export { default as SwatchPickerCustomIndicator } from "./swatch-picker-custom-indicator.vue";
export { default as SwatchPickerCustomRadius } from "./swatch-picker-custom-radius.vue";
export { default as SwatchPickerCustomSize } from "./swatch-picker-custom-size.vue";
export { default as SwatchPickerDisabled } from "./swatch-picker-disabled.vue";
export { default as Variants } from "./variants.vue";
