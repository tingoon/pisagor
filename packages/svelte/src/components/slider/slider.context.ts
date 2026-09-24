import type { SliderRecipe } from "@pisagor/recipes/slider";
import { createContext } from "../../utils/create-context";

export interface SliderContextValue {
  slots: SliderRecipe;
  thumbShadowClass: string | undefined;
  trackVariantClass: string;
}

const ctx = createContext<SliderContextValue>({ name: "Slider" });

export const setSliderContext = ctx.setContext;
export const useSlider = ctx.getContext;
