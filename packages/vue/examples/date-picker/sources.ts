import Clearable from "./clearable.vue?raw";
import CustomFormat from "./custom-format.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Input from "./input.vue?raw";
import Invalid from "./invalid.vue?raw";
import Range from "./range.vue?raw";
import Time from "./time.vue?raw";
import Variants from "./variants.vue?raw";
import WithPresets from "./with-presets.vue?raw";

export const imports = `import { DatePicker } from "@pisagor/vue";`;

export const sources = {
  Clearable,
  CustomFormat,
  CustomRecipe,
  Default,
  Disabled,
  Input,
  Invalid,
  Range,
  Time,
  Variants,
  WithPresets,
} as const;
