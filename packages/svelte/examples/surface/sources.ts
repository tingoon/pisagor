import CustomRecipe from "./custom-recipe.svelte?raw";
import FormControlsDemo from "./form-controls-demo.svelte?raw";
import Nested from "./nested.svelte?raw";
import Padding from "./padding.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithFormControls from "./with-form-controls.svelte?raw";

export const imports = `import { Surface } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  FormControlsDemo,
  Nested,
  Padding,
  Variants,
  WithFormControls,
} as const;
