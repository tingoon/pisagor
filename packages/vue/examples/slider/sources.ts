import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import marksRaw from "./marks.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import rangeRaw from "./range.vue?raw";
import stepRaw from "./step.vue?raw";
import variantsRaw from "./variants.vue?raw";
import verticalRaw from "./vertical.vue?raw";
import with_labelRaw from "./with-label.vue?raw";

export const imports = `import { Slider } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Marks: marksRaw,
  MinMax: min_maxRaw,
  Range: rangeRaw,
  Step: stepRaw,
  Variants: variantsRaw,
  Vertical: verticalRaw,
  WithLabel: with_labelRaw,
} as const;
