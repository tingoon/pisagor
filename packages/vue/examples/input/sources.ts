import Clearable from "./clearable.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import File from "./file.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { Input } from "@pisagor/vue";`;

export const sources = {
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  File,
  Invalid,
  Sizes,
  Variants,
} as const;
