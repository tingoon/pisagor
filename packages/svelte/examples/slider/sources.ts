import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Marks from "./marks.svelte?raw";
import MinMax from "./min-max.svelte?raw";
import Range from "./range.svelte?raw";
import Step from "./step.svelte?raw";
import Variants from "./variants.svelte?raw";
import Vertical from "./vertical.svelte?raw";
import WithLabel from "./with-label.svelte?raw";

export const imports = `import { Slider } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  Invalid,
  Marks,
  MinMax,
  Range,
  Step,
  Variants,
  Vertical,
  WithLabel,
} as const;
