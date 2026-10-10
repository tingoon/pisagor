import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import separated_panelsRaw from "./separated-panels.tsx?raw";
import with_form_controlsRaw from "./with-form-controls.tsx?raw";

export const imports = `import { Frame } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  SeparatedPanels: separated_panelsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;
