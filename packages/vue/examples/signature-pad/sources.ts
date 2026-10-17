import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import ImagePreview from "./image-preview.vue?raw";
import Invalid from "./invalid.vue?raw";

export const imports = `import { SignaturePad } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  ImagePreview,
  Invalid,
} as const;
