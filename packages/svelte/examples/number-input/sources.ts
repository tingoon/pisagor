import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import FieldOnly from "./field-only.svelte?raw";
import Formatted from "./formatted.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import MouseWheel from "./mouse-wheel.svelte?raw";
import Range from "./range.svelte?raw";
import Scrub from "./scrub.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Step from "./step.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { NumberInput } from "@pisagor/svelte";`;

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
