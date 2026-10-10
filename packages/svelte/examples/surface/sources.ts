import custom_recipeRaw from "./custom-recipe.svelte?raw";
import form_controls_demoRaw from "./form-controls-demo.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import paddingRaw from "./padding.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_form_controlsRaw from "./with-form-controls.svelte?raw";

export const imports = `import { Surface } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  FormControlsDemo: form_controls_demoRaw,
  Nested: nestedRaw,
  Padding: paddingRaw,
  Variants: variantsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;
