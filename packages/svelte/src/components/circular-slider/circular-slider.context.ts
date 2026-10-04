import type { CircularSliderRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  slots: CircularSliderRecipe;
  thickness: number;
  thumbSize: number;
}

const ctx = createContext("CircularSlider")<CircularSliderContextValue>();
export const setCircularSliderContext = ctx.setContext;
export const useCircularSlider = ctx.getContext;
