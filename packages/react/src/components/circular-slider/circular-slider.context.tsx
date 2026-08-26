import type { CircularSliderVariants } from "@pisagor/styles/ui/circular-slider";
import { createContext } from "../../utils";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  slots: CircularSliderVariants;
  thickness: number;
  thumbSize: number;
}

export const { CircularSliderContext, useCircularSlider } =
  createContext<CircularSliderContextValue>()({
    name: "CircularSlider",
  });
