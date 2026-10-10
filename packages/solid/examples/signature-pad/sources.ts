import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import image_previewRaw from "./image-preview.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { SignaturePad } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  ImagePreview: image_previewRaw,
  Invalid: invalidRaw,
} as const;
