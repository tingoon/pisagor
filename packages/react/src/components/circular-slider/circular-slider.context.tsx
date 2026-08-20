import { createContext } from "../../utils";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

export const { CircularSliderContext, useCircularSlider } =
  createContext<CircularSliderContextValue>()({
    name: "CircularSlider",
  });
