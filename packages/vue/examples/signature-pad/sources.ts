import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import image_previewRaw from "./image-preview.vue?raw";
import invalidRaw from "./invalid.vue?raw";

export const imports = `import { SignaturePad } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  ImagePreview: image_previewRaw,
  Invalid: invalidRaw,
} as const;
