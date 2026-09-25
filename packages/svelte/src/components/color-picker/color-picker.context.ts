import type { ColorPickerRecipe } from "@pisagor/recipes/color-picker";
import { createContext } from "../../utils/create-context";

interface ColorPickerContextValue {
  slots: ColorPickerRecipe;
}

const ctx = createContext<ColorPickerContextValue>({ name: "ColorPicker" });
export const setColorPickerContext = ctx.setContext;
export const useColorPicker = ctx.getContext;
