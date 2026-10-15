import SliderShorthand from "./slider.svelte";
import SliderControl from "./slider-control.svelte";
import SliderHeader from "./slider-header.svelte";
import SliderLabel from "./slider-label.svelte";
import SliderMarker from "./slider-marker.svelte";
import SliderMarkerGroup from "./slider-marker-group.svelte";
import SliderMarkerLabel from "./slider-marker-label.svelte";
import SliderMarkerTick from "./slider-marker-tick.svelte";
import SliderRange from "./slider-range.svelte";
import SliderRoot from "./slider-root.svelte";
import SliderThumb from "./slider-thumb.svelte";
import SliderTrack from "./slider-track.svelte";
import SliderValue from "./slider-value.svelte";

export const Slider = Object.assign(SliderShorthand, {
  Control: SliderControl,
  Header: SliderHeader,
  Label: SliderLabel,
  Marker: SliderMarker,
  MarkerGroup: SliderMarkerGroup,
  MarkerLabel: SliderMarkerLabel,
  MarkerTick: SliderMarkerTick,
  Range: SliderRange,
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Value: SliderValue,
});
