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

export const imports = `import { ColorPicker } from "@pisagor/react/color-picker";`;

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

export { AreaChannels } from "./area-channels";
export { AreaDots } from "./area-dots";
export { Clearable } from "./clearable";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { InputChannel } from "./input-channel";
export { InputCompact } from "./input-compact";
export { InputControlled } from "./input-controlled";
export { InputWithPopover } from "./input-with-popover";
export { InputWithSwatchPreview } from "./input-with-swatch-preview";
export { Invalid } from "./invalid";
export { PopoverDisabled } from "./popover-disabled";
export { PopoverSlidersOnly } from "./popover-sliders-only";
export { PopoverWithChannelEditing } from "./popover-with-channel-editing";
export { PopoverWithSwatchPicker } from "./popover-with-swatch-picker";
export { SliderAlphaChannel } from "./slider-alpha-channel";
export { SliderControlled } from "./slider-controlled";
export { SliderDisabled } from "./slider-disabled";
export { SliderHsbaChannels } from "./slider-hsba-channels";
export { SliderHslChannels } from "./slider-hsl-channels";
export { SliderRgbChannels } from "./slider-rgb-channels";
export { SliderVertical } from "./slider-vertical";
export { SwatchPicker } from "./swatch-picker";
export { SwatchPickerControlled } from "./swatch-picker-controlled";
export { SwatchPickerCustomIndicator } from "./swatch-picker-custom-indicator";
export { SwatchPickerCustomRadius } from "./swatch-picker-custom-radius";
export { SwatchPickerCustomSize } from "./swatch-picker-custom-size";
export { SwatchPickerDisabled } from "./swatch-picker-disabled";
export { Variants } from "./variants";
