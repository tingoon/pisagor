import { colorPickerRecipe } from "@pisagor/recipes";
import { ColorPicker } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ColorPicker.Field defaultValue="#3b82f6" recipe={brandColorPickerRecipe} />
  );
}
