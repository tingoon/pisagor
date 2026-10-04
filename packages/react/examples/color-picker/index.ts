import { stripTsxExample } from "@pisagor/utils";
import area_channelsRaw from "./area-channels.tsx?raw";
import area_dotsRaw from "./area-dots.tsx?raw";
import clearableRaw from "./clearable.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import input_channelRaw from "./input-channel.tsx?raw";
import input_compactRaw from "./input-compact.tsx?raw";
import input_controlledRaw from "./input-controlled.tsx?raw";
import input_with_popoverRaw from "./input-with-popover.tsx?raw";
import input_with_swatch_previewRaw from "./input-with-swatch-preview.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import popover_disabledRaw from "./popover-disabled.tsx?raw";
import popover_sliders_onlyRaw from "./popover-sliders-only.tsx?raw";
import popover_with_channel_editingRaw from "./popover-with-channel-editing.tsx?raw";
import popover_with_swatch_pickerRaw from "./popover-with-swatch-picker.tsx?raw";
import slider_alpha_channelRaw from "./slider-alpha-channel.tsx?raw";
import slider_controlledRaw from "./slider-controlled.tsx?raw";
import slider_disabledRaw from "./slider-disabled.tsx?raw";
import slider_hsba_channelsRaw from "./slider-hsba-channels.tsx?raw";
import slider_hsl_channelsRaw from "./slider-hsl-channels.tsx?raw";
import slider_rgb_channelsRaw from "./slider-rgb-channels.tsx?raw";
import slider_verticalRaw from "./slider-vertical.tsx?raw";
import swatch_pickerRaw from "./swatch-picker.tsx?raw";
import swatch_picker_controlledRaw from "./swatch-picker-controlled.tsx?raw";
import swatch_picker_custom_indicatorRaw from "./swatch-picker-custom-indicator.tsx?raw";
import swatch_picker_custom_radiusRaw from "./swatch-picker-custom-radius.tsx?raw";
import swatch_picker_custom_sizeRaw from "./swatch-picker-custom-size.tsx?raw";
import swatch_picker_disabledRaw from "./swatch-picker-disabled.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { ColorPicker } from "@pisagor/react";`;

export const sources = {
  AreaChannels: stripTsxExample(area_channelsRaw),
  AreaDots: stripTsxExample(area_dotsRaw),
  Clearable: stripTsxExample(clearableRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  InputChannel: stripTsxExample(input_channelRaw),
  InputCompact: stripTsxExample(input_compactRaw),
  InputControlled: stripTsxExample(input_controlledRaw),
  InputWithPopover: stripTsxExample(input_with_popoverRaw),
  InputWithSwatchPreview: stripTsxExample(input_with_swatch_previewRaw),
  Invalid: stripTsxExample(invalidRaw),
  PopoverDisabled: stripTsxExample(popover_disabledRaw),
  PopoverSlidersOnly: stripTsxExample(popover_sliders_onlyRaw),
  PopoverWithChannelEditing: stripTsxExample(popover_with_channel_editingRaw),
  PopoverWithSwatchPicker: stripTsxExample(popover_with_swatch_pickerRaw),
  SliderAlphaChannel: stripTsxExample(slider_alpha_channelRaw),
  SliderControlled: stripTsxExample(slider_controlledRaw),
  SliderDisabled: stripTsxExample(slider_disabledRaw),
  SliderHsbaChannels: stripTsxExample(slider_hsba_channelsRaw),
  SliderHslChannels: stripTsxExample(slider_hsl_channelsRaw),
  SliderRgbChannels: stripTsxExample(slider_rgb_channelsRaw),
  SliderVertical: stripTsxExample(slider_verticalRaw),
  SwatchPicker: stripTsxExample(swatch_pickerRaw),
  SwatchPickerControlled: stripTsxExample(swatch_picker_controlledRaw),
  SwatchPickerCustomIndicator: stripTsxExample(
    swatch_picker_custom_indicatorRaw,
  ),
  SwatchPickerCustomRadius: stripTsxExample(swatch_picker_custom_radiusRaw),
  SwatchPickerCustomSize: stripTsxExample(swatch_picker_custom_sizeRaw),
  SwatchPickerDisabled: stripTsxExample(swatch_picker_disabledRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export * from "./area-channels";
export * from "./area-dots";
export * from "./clearable";
export * from "./custom-spacing";
export * from "./default";
export * from "./disabled";
export * from "./input-channel";
export * from "./input-compact";
export * from "./input-controlled";
export * from "./input-with-popover";
export * from "./input-with-swatch-preview";
export * from "./invalid";
export * from "./popover-disabled";
export * from "./popover-sliders-only";
export * from "./popover-with-channel-editing";
export * from "./popover-with-swatch-picker";
export * from "./slider-alpha-channel";
export * from "./slider-controlled";
export * from "./slider-disabled";
export * from "./slider-hsba-channels";
export * from "./slider-hsl-channels";
export * from "./slider-rgb-channels";
export * from "./slider-vertical";
export * from "./swatch-picker";
export * from "./swatch-picker-controlled";
export * from "./swatch-picker-custom-indicator";
export * from "./swatch-picker-custom-radius";
export * from "./swatch-picker-custom-size";
export * from "./swatch-picker-disabled";
export * from "./variants";
