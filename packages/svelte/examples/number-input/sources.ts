import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import field_onlyRaw from "./field-only.svelte?raw";
import formattedRaw from "./formatted.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import mouse_wheelRaw from "./mouse-wheel.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import scrubRaw from "./scrub.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import stepRaw from "./step.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { NumberInput } from "@pisagor/svelte";`;

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
