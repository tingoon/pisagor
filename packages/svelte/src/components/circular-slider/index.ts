import CircularSliderControl from "./circular-slider-control.svelte";
import CircularSliderMarker from "./circular-slider-marker.svelte";
import CircularSliderMarkerGroup from "./circular-slider-marker-group.svelte";
import CircularSliderRoot from "./circular-slider-root.svelte";
import CircularSliderThumb from "./circular-slider-thumb.svelte";
import CircularSliderValueText from "./circular-slider-value-text.svelte";

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  ValueText: CircularSliderValueText,
});
