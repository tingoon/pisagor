import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { RichTextEditor } from "@pisagor/solid/rich-text-editor";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;
