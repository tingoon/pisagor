import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import image_previewRaw from "./image-preview.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { SignaturePad } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  ImagePreview: image_previewRaw,
  Invalid: invalidRaw,
} as const;
