import CheckboxGroup from "./checkbox-group.vue?raw";
import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Indeterminate from "./indeterminate.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { Checkbox } from "@pisagor/vue";`;

export const sources = {
  CheckboxGroup,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Indeterminate,
  Invalid,
  Sizes,
  Variants,
} as const;
