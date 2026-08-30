import type { ColorPickerRecipe } from "@pisagor/recipes/color-picker";
import { createContext } from "../../utils";

interface ColorPickerContextValue {
  slots: ColorPickerRecipe;
}

export const { ColorPickerContext: ColorPickerSlotsContext, useColorPicker } =
  createContext<ColorPickerContextValue>()({
    name: "ColorPicker",
  });
