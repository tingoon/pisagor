import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Nested from "./nested.vue?raw";
import PartialCollapse from "./partial-collapse.vue?raw";

export const imports = `import { Collapsible } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Nested,
  PartialCollapse,
} as const;
