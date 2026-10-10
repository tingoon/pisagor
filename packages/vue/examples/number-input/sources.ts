import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import field_onlyRaw from "./field-only.vue?raw";
import formattedRaw from "./formatted.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import mouse_wheelRaw from "./mouse-wheel.vue?raw";
import rangeRaw from "./range.vue?raw";
import scrubRaw from "./scrub.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import stepRaw from "./step.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { NumberInput } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  FieldOnly: field_onlyRaw,
  Formatted: formattedRaw,
  Invalid: invalidRaw,
  MouseWheel: mouse_wheelRaw,
  Range: rangeRaw,
  Scrub: scrubRaw,
  Sizes: sizesRaw,
  Step: stepRaw,
  Variants: variantsRaw,
} as const;
