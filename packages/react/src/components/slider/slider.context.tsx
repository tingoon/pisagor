import type { SliderSlots } from "@pisagor/recipes/slider";
import { createContext } from "../../internal/utils";

interface SliderContextValue {
  slots: SliderSlots;
  thumbShadowClass?: string;
  trackVariantClass: string;
}

export const { SliderContext, useSlider } = createContext<SliderContextValue>()({
  name: "Slider",
});
