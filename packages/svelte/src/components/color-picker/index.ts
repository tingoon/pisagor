import { parseColor } from "@ark-ui/svelte/color-picker";
import ColorPickerArea from "./color-picker-area.svelte";
import ColorPickerAreaThumb from "./color-picker-area-thumb.svelte";
import ColorPickerChannelSlider from "./color-picker-channel-slider.svelte";
import ColorPickerClearTrigger from "./color-picker-clear-trigger.svelte";
import ColorPickerContent from "./color-picker-content.svelte";
import ColorPickerControl from "./color-picker-control.svelte";
import ColorPickerEyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte";
import ColorPickerField from "./color-picker-field.svelte";
import ColorPickerInput from "./color-picker-input.svelte";
import ColorPickerRoot from "./color-picker-root.svelte";
import ColorPickerSwatch from "./color-picker-swatch.svelte";
import ColorPickerSwatchGroup from "./color-picker-swatch-group.svelte";
import ColorPickerSwatchIndicator from "./color-picker-swatch-indicator.svelte";
import ColorPickerSwatchPreview from "./color-picker-swatch-preview.svelte";
import ColorPickerSwatchTrigger from "./color-picker-swatch-trigger.svelte";
import ColorPickerTransparencyGrid from "./color-picker-transparency-grid.svelte";
import ColorPickerTrigger from "./color-picker-trigger.svelte";
import ColorPickerValueSwatch from "./color-picker-value-swatch.svelte";
import ColorPickerValueText from "./color-picker-value-text.svelte";
import ColorPickerView from "./color-picker-view.svelte";

export { parseColor };

export const ColorPicker = Object.assign(ColorPickerRoot, {
  Area: ColorPickerArea,
  AreaThumb: ColorPickerAreaThumb,
  ChannelSlider: ColorPickerChannelSlider,
  ClearTrigger: ColorPickerClearTrigger,
  Content: ColorPickerContent,
  Control: ColorPickerControl,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  Field: ColorPickerField,
  Input: ColorPickerInput,
  Swatch: ColorPickerSwatch,
  SwatchGroup: ColorPickerSwatchGroup,
  SwatchIndicator: ColorPickerSwatchIndicator,
  SwatchPreview: ColorPickerSwatchPreview,
  SwatchTrigger: ColorPickerSwatchTrigger,
  TransparencyGrid: ColorPickerTransparencyGrid,
  Trigger: ColorPickerTrigger,
  ValueSwatch: ColorPickerValueSwatch,
  ValueText: ColorPickerValueText,
  View: ColorPickerView,
});
