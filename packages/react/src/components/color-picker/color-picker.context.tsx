import { createContext } from "../../utils";

export const { ColorPickerRootContext, useColorPickerRoot } = createContext<{ testId?: string }>()({
  name: "ColorPickerRoot",
  strict: false,
});
