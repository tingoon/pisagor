import type { SliderRecipe } from "@pisagor/recipes";
import { sliderRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useSliderStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Slider",
  recipe: sliderRecipe,
});

export interface SliderExtrasValue {
  thumbShadowClass: string | undefined;
  trackVariantClass: string;
}

const extrasCtx = createContext("SliderExtras")<SliderExtrasValue>();
export const setSliderExtrasContext = extrasCtx.setContext;

export function setSliderContext(
  value: SliderExtrasValue & { slots: SliderRecipe },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setSliderExtrasContext({
    get thumbShadowClass() {
      return value.thumbShadowClass;
    },
    get trackVariantClass() {
      return value.trackVariantClass;
    },
  });
}
