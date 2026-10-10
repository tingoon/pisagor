import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import marksRaw from "./marks.svelte?raw";
import min_maxRaw from "./min-max.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import stepRaw from "./step.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";
import with_labelRaw from "./with-label.svelte?raw";

export const imports = `import { Slider } from "@pisagor/svelte";`;

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
