import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { NestedSource as Nested } from "./nested";
import { PaddingSource as Padding } from "./padding";
import { VariantsSource as Variants } from "./variants";
import { WithFormControlsSource as WithFormControls } from "./with-form-controls";

export const imports = `import { Surface } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Nested,
  Padding,
  Variants,
  WithFormControls,
} as const;
