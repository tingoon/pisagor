import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte";
import CircularSliderShorthand from "./circular-slider.svelte";
import Control from "./circular-slider-control.svelte";
import Label from "./circular-slider-label.svelte";
import Marker from "./circular-slider-marker.svelte";
import MarkerGroup from "./circular-slider-marker-group.svelte";
import Ring from "./circular-slider-ring.svelte";
import Root from "./circular-slider-root.svelte";
import Thumb from "./circular-slider-thumb.svelte";
import ValueText from "./circular-slider-value-text.svelte";

export type {
  AngleSliderControlProps as CircularSliderControlProps,
  AngleSliderHiddenInputProps as CircularSliderHiddenInputProps,
  AngleSliderLabelProps as CircularSliderLabelProps,
  AngleSliderMarkerGroupProps as CircularSliderMarkerGroupProps,
  AngleSliderMarkerProps as CircularSliderMarkerProps,
  AngleSliderThumbProps as CircularSliderThumbProps,
  AngleSliderValueTextProps as CircularSliderValueTextProps,
} from "@ark-ui/svelte";

export const CircularSlider = Object.assign(CircularSliderShorthand, {
  Context: AngleSliderPrimitive.Context,
  Control,
  HiddenInput: AngleSliderPrimitive.HiddenInput,
  Label,
  Marker,
  MarkerGroup,
  Ring,
  Root,
  Thumb,
  ValueText,
});
