import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { SeparatedPanelsSource as SeparatedPanels } from "./separated-panels";
import { SizesSource as Sizes } from "./sizes";
import { WithFormControlsSource as WithFormControls } from "./with-form-controls";

export const imports = `import { Frame } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  Default,
  SeparatedPanels,
  Sizes,
  WithFormControls,
} as const;
