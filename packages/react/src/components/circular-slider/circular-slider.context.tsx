import { createContext } from "../../utils";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

const [CircularSliderContext, useCircularSliderContext] = createContext<CircularSliderContextValue>(
  {
    name: "CircularSlider",
  },
);

export { CircularSliderContext, useCircularSliderContext };
