import { createContext } from "../../utils";

const [ColorPickerRootContext, useColorPickerRoot] = createContext<{ testId?: string }>({
  name: "ColorPickerRoot",
  strict: false,
});

export { ColorPickerRootContext, useColorPickerRoot };
