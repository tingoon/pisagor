import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Nested from "./nested.svelte?raw";
import PartialCollapse from "./partial-collapse.svelte?raw";

export const imports = `import { Collapsible } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Nested,
  PartialCollapse,
} as const;
