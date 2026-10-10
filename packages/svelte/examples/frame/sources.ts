import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import separated_panelsRaw from "./separated-panels.svelte?raw";
import with_form_controlsRaw from "./with-form-controls.svelte?raw";

export const imports = `import { Frame } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  SeparatedPanels: separated_panelsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;
