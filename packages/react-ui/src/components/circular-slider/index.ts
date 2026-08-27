import {
  CircularSliderControl,
  CircularSliderMarker,
  CircularSliderMarkerGroup,
  CircularSliderRoot,
  CircularSliderThumb,
  CircularSliderValueText,
} from "./circular-slider";

export type {
  CircularSliderControlProps,
  CircularSliderHiddenInputProps,
  CircularSliderMarkerGroupProps,
  CircularSliderMarkerProps,
  CircularSliderProps,
  CircularSliderRootProps,
  CircularSliderThumbProps,
  CircularSliderValueTextProps,
} from "./circular-slider";

export const CircularSlider = Object.assign(CircularSliderRoot, {
  Control: CircularSliderControl,
  Marker: CircularSliderMarker,
  MarkerGroup: CircularSliderMarkerGroup,
  Thumb: CircularSliderThumb,
  ValueText: CircularSliderValueText,
});
