import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import ImagePreview from "./image-preview.svelte?raw";
import Invalid from "./invalid.svelte?raw";

export const imports = `import { SignaturePad } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  ImagePreview,
  Invalid,
} as const;
