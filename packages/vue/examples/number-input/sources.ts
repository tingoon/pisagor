import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import FieldOnly from "./field-only.vue?raw";
import Formatted from "./formatted.vue?raw";
import Invalid from "./invalid.vue?raw";
import MouseWheel from "./mouse-wheel.vue?raw";
import Range from "./range.vue?raw";
import Scrub from "./scrub.vue?raw";
import Sizes from "./sizes.vue?raw";
import Step from "./step.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { NumberInput } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  FieldOnly,
  Formatted,
  Invalid,
  MouseWheel,
  Range,
  Scrub,
  Sizes,
  Step,
  Variants,
} as const;
