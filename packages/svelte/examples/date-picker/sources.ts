import clearableRaw from "./clearable.svelte?raw";
import custom_formatRaw from "./custom-format.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import inputRaw from "./input.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import timeRaw from "./time.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_presetsRaw from "./with-presets.svelte?raw";

export const imports = `import { DatePicker } from "@pisagor/svelte";`;

export const sources = {
  Clearable: clearableRaw,
  CustomFormat: custom_formatRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Input: inputRaw,
  Invalid: invalidRaw,
  Range: rangeRaw,
  Time: timeRaw,
  Variants: variantsRaw,
  WithPresets: with_presetsRaw,
} as const;
