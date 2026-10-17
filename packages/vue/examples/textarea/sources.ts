import Autoresize from "./autoresize.vue?raw";
import Clearable from "./clearable.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { Textarea } from "@pisagor/vue";`;

export const sources = {
  Autoresize,
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
