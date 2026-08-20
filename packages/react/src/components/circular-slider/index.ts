import {
  CircularSliderControl,
  CircularSliderMarker,
  CircularSliderMarkerGroup,
  CircularSliderRoot,
  CircularSliderThumb,
  CircularSliderValue,
} from "./circular-slider";

export type {
  CircularSliderControlProps,
  CircularSliderHiddenInputProps,
  CircularSliderMarkerGroupProps,
  CircularSliderMarkerProps,
  CircularSliderProps,
  CircularSliderRootProps,
  CircularSliderThumbProps,
  CircularSliderValueProps,
} from "./circular-slider";

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  Value: CircularSliderValue,
});
