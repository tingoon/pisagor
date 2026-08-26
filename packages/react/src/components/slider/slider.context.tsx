import type { SliderVariants } from "@pisagor/recipes/slider";
import { createContext } from "../../utils";

interface SliderContextValue {
  slots: SliderVariants;
  thumbShadowClass?: string;
  trackVariantClass: string;
}

export const { SliderContext, useSlider } = createContext<SliderContextValue>()({
  name: "Slider",
});
