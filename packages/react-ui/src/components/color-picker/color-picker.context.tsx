import type { ColorPickerVariants } from "@pisagor/recipes/color-picker";
import { createContext } from "../../utils";

interface ColorPickerContextValue {
  slots: ColorPickerVariants;
}

export const { ColorPickerContext: ColorPickerSlotsContext, useColorPicker } =
  createContext<ColorPickerContextValue>()({
    name: "ColorPicker",
  });
