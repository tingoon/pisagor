import { parseColor } from "@ark-ui/svelte";
import Area from "./color-picker-area.svelte";
import AreaThumb from "./color-picker-area-thumb.svelte";
import ChannelSlider from "./color-picker-channel-slider.svelte";
import ClearTrigger from "./color-picker-clear-trigger.svelte";
import Content from "./color-picker-content.svelte";
import Control from "./color-picker-control.svelte";
import EyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte";
import Field from "./color-picker-field.svelte";
import FormatSelect from "./color-picker-format-select.svelte";
import Input from "./color-picker-input.svelte";
import Label from "./color-picker-label.svelte";
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

export { parseColor };

export const ColorPicker = Object.assign(Root, {
  Area,
  AreaThumb,
  ChannelInput: Input,
  ChannelSlider,
  ClearTrigger,
  Content,
  Control,
  EyeDropperTrigger,
  Field,
  FormatSelect,
  Input,
  Label,
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
