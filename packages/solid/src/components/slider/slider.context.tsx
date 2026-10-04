import type { SliderRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface SliderContextValue {
  slots: SliderRecipe;
  thumbShadowClass?: string;
  trackVariantClass: string;
}

export const { SliderContext, useSlider } =
  createContext("Slider")<SliderContextValue>();
