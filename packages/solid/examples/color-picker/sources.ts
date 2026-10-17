import { AreaChannelsSource as AreaChannels } from "./area-channels";
import { AreaDotsSource as AreaDots } from "./area-dots";
import { ClearableSource as Clearable } from "./clearable";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InputChannelSource as InputChannel } from "./input-channel";
import { InputCompactSource as InputCompact } from "./input-compact";
import { InputControlledSource as InputControlled } from "./input-controlled";
import { InputWithPopoverSource as InputWithPopover } from "./input-with-popover";
import { InputWithSwatchPreviewSource as InputWithSwatchPreview } from "./input-with-swatch-preview";
import { InvalidSource as Invalid } from "./invalid";
import { LabelFormatSelectSource as LabelFormatSelect } from "./label-format-select";
import { PopoverDisabledSource as PopoverDisabled } from "./popover-disabled";
import { PopoverSlidersOnlySource as PopoverSlidersOnly } from "./popover-sliders-only";
import { PopoverWithChannelEditingSource as PopoverWithChannelEditing } from "./popover-with-channel-editing";
import { PopoverWithSwatchPickerSource as PopoverWithSwatchPicker } from "./popover-with-swatch-picker";
import { SliderAlphaChannelSource as SliderAlphaChannel } from "./slider-alpha-channel";
import { SliderControlledSource as SliderControlled } from "./slider-controlled";
import { SliderDisabledSource as SliderDisabled } from "./slider-disabled";
import { SliderHsbaChannelsSource as SliderHsbaChannels } from "./slider-hsba-channels";
import { SliderHslChannelsSource as SliderHslChannels } from "./slider-hsl-channels";
import { SliderRgbChannelsSource as SliderRgbChannels } from "./slider-rgb-channels";
import { SliderVerticalSource as SliderVertical } from "./slider-vertical";
import { SwatchPickerSource as SwatchPicker } from "./swatch-picker";
import { SwatchPickerControlledSource as SwatchPickerControlled } from "./swatch-picker-controlled";
import { SwatchPickerCustomIndicatorSource as SwatchPickerCustomIndicator } from "./swatch-picker-custom-indicator";
import { SwatchPickerCustomRadiusSource as SwatchPickerCustomRadius } from "./swatch-picker-custom-radius";
import { SwatchPickerCustomSizeSource as SwatchPickerCustomSize } from "./swatch-picker-custom-size";
import { SwatchPickerDisabledSource as SwatchPickerDisabled } from "./swatch-picker-disabled";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { ColorPicker } from "@pisagor/solid";`;

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
