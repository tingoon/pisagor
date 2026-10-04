import type { SliderRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface SliderContextValue {
  slots: SliderRecipe;
  thumbShadowClass: string | undefined;
  trackVariantClass: string;
}

const ctx = createContext("Slider")<SliderContextValue>();

export const setSliderContext = ctx.setContext;
