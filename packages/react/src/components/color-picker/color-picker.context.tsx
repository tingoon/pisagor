import type { ColorPickerSlots } from "@pisagor/recipes/color-picker";
import { createContext } from "../../internal/utils";

interface ColorPickerContextValue {
  slots: ColorPickerSlots;
}

export const { ColorPickerContext: ColorPickerSlotsContext, useColorPicker } =
  createContext<ColorPickerContextValue>()({
    name: "ColorPicker",
  });
