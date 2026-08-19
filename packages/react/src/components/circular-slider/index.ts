import {
  CircularSliderControl,
  CircularSliderMarker,
  CircularSliderMarkerGroup,
  CircularSliderRoot,
  CircularSliderThumb,
  CircularSliderValue,
} from "./circular-slider";

export type { CircularSliderProps } from "./circular-slider";

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  Value: CircularSliderValue,
});
