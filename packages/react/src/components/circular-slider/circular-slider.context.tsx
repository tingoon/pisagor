import type { CircularSliderSlots } from "@pisagor/recipes/circular-slider";
import { createContext } from "../../internal/utils";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  slots: CircularSliderSlots;
  thickness: number;
  thumbSize: number;
}

export const { CircularSliderContext, useCircularSlider } =
  createContext<CircularSliderContextValue>()({
    name: "CircularSlider",
  });
