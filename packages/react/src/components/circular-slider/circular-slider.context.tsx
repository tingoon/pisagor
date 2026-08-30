import type { CircularSliderRecipe } from "@pisagor/recipes/circular-slider";
import { createContext } from "../../utils";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  slots: CircularSliderRecipe;
  thickness: number;
  thumbSize: number;
}

export const { CircularSliderContext, useCircularSlider } =
  createContext<CircularSliderContextValue>()({
    name: "CircularSlider",
  });
