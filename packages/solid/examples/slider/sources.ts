import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import marksRaw from "./marks.tsx?raw";
import min_maxRaw from "./min-max.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import stepRaw from "./step.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Slider } from "@pisagor/solid";`;

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
