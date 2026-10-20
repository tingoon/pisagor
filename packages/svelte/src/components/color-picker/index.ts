import { parseColor } from "@ark-ui/svelte";
import ColorPickerShorthand from "./color-picker.svelte";
import Area from "./color-picker-area.svelte";
import AreaBackground from "./color-picker-area-background.svelte";
import AreaThumb from "./color-picker-area-thumb.svelte";
import ChannelSlider from "./color-picker-channel-slider.svelte";
import ChannelSliderLabel from "./color-picker-channel-slider-label.svelte";
import ChannelSliderThumb from "./color-picker-channel-slider-thumb.svelte";
import ChannelSliderTrack from "./color-picker-channel-slider-track.svelte";
import ChannelSliderValueText from "./color-picker-channel-slider-value-text.svelte";
import ClearTrigger from "./color-picker-clear-trigger.svelte";
import Content from "./color-picker-content.svelte";
import Control from "./color-picker-control.svelte";
import EyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte";
import FormatSelect from "./color-picker-format-select.svelte";
import FormatTrigger from "./color-picker-format-trigger.svelte";
import Input from "./color-picker-input.svelte";
import Label from "./color-picker-label.svelte";
import Positioner from "./color-picker-positioner.svelte";
import Root from "./color-picker-root.svelte";
import Swatch from "./color-picker-swatch.svelte";
import SwatchGroup from "./color-picker-swatch-group.svelte";
import SwatchIndicator from "./color-picker-swatch-indicator.svelte";
import SwatchPreview from "./color-picker-swatch-preview.svelte";
import SwatchTrigger from "./color-picker-swatch-trigger.svelte";
import TransparencyGrid from "./color-picker-transparency-grid.svelte";
import Trigger from "./color-picker-trigger.svelte";
import ValueSwatch from "./color-picker-value-swatch.svelte";
import ValueText from "./color-picker-value-text.svelte";
import View from "./color-picker-view.svelte";

export type {
  ColorPickerAreaBackgroundProps,
  ColorPickerAreaThumbProps,
  ColorPickerChannelInputProps,
  ColorPickerChannelSliderLabelProps,
  ColorPickerChannelSliderProps,
  ColorPickerChannelSliderThumbProps,
  ColorPickerChannelSliderTrackProps,
  ColorPickerChannelSliderValueTextProps,
  ColorPickerContentProps,
  ColorPickerControlProps,
  ColorPickerEyeDropperTriggerProps,
  ColorPickerFormatSelectProps,
  ColorPickerFormatTriggerProps,
  ColorPickerLabelProps,
  ColorPickerPositionerProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchIndicatorProps,
  ColorPickerSwatchProps,
  ColorPickerSwatchTriggerProps,
  ColorPickerTransparencyGridProps,
  ColorPickerTriggerProps,
  ColorPickerValueSwatchProps,
  ColorPickerValueTextProps,
  ColorPickerViewProps,
} from "@ark-ui/svelte";
export { parseColor };

export const ColorPicker = Object.assign(ColorPickerShorthand, {
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput: Input,
  ChannelSlider,
  ChannelSliderLabel,
  ChannelSliderThumb,
  ChannelSliderTrack,
  ChannelSliderValueText,
  ClearTrigger,
  Content,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  Input,
  Label,
  Positioner,
  Root,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchPreview,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueSwatch,
  ValueText,
  View,
});
