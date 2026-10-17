import Clearable from "./clearable.svelte?raw";
import CustomFormat from "./custom-format.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Input from "./input.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Range from "./range.svelte?raw";
import Time from "./time.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithPresets from "./with-presets.svelte?raw";

export const imports = `import { DatePicker } from "@pisagor/svelte";`;

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
