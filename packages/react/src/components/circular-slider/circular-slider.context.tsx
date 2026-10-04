import type { CircularSliderRecipe } from "@pisagor/recipes";

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
  createContext("CircularSlider")<CircularSliderContextValue>();
