import type { SliderRecipe } from "@pisagor/recipes/slider";
import { createContext } from "../../utils";

interface SliderContextValue {
  slots: SliderRecipe;
  thumbShadowClass?: string;
  trackVariantClass: string;
}

export const { SliderContext, useSlider } = createContext<SliderContextValue>()({
  name: "Slider",
});
