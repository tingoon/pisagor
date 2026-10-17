import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";

export const imports = `import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Invalid,
} as const;
