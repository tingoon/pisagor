import type { CircularSliderRecipe } from "@pisagor/recipes/circular-slider";
import { createContext } from "../../utils/create-context";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  slots: CircularSliderRecipe;
  thickness: number;
  thumbSize: number;
}

const ctx = createContext<CircularSliderContextValue>({ name: "CircularSlider" });
export const setCircularSliderContext = ctx.setContext;
export const useCircularSlider = ctx.getContext;
