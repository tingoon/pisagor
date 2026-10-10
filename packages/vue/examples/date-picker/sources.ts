import clearableRaw from "./clearable.vue?raw";
import custom_formatRaw from "./custom-format.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import inputRaw from "./input.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import rangeRaw from "./range.vue?raw";
import timeRaw from "./time.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_presetsRaw from "./with-presets.vue?raw";

export const imports = `import { DatePicker } from "@pisagor/vue";`;

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
