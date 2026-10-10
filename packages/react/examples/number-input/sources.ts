import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import field_onlyRaw from "./field-only.tsx?raw";
import formattedRaw from "./formatted.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import mouse_wheelRaw from "./mouse-wheel.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import scrubRaw from "./scrub.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import stepRaw from "./step.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { NumberInput } from "@pisagor/react";`;

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
