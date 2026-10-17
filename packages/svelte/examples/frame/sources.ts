import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import SeparatedPanels from "./separated-panels.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import WithFormControls from "./with-form-controls.svelte?raw";

export const imports = `import { Frame } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  SeparatedPanels,
  Sizes,
  WithFormControls,
} as const;
