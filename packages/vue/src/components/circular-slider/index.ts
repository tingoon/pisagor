import {
  CircularSliderControl,
  CircularSliderMarker,
  CircularSliderMarkerGroup,
  CircularSliderRoot,
  CircularSliderThumb,
  CircularSliderValueText,
} from "./circular-slider";

export type { CircularSliderProps } from "./circular-slider";

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  ValueText: CircularSliderValueText,
});
