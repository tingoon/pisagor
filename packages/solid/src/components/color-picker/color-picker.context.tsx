import type { ColorPickerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface ColorPickerContextValue {
  slots: ColorPickerRecipe;
}

export const { ColorPickerContext: ColorPickerSlotsContext, useColorPicker } =
  createContext("ColorPicker")<ColorPickerContextValue>();
