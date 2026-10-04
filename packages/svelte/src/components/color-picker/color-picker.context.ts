import type { ColorPickerRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ColorPickerContextValue {
  slots: ColorPickerRecipe;
}

const ctx = createContext("ColorPicker")<ColorPickerContextValue>();
export const setColorPickerContext = ctx.setContext;
export const useColorPicker = ctx.getContext;
