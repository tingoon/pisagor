import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Marks from "./marks.vue?raw";
import MinMax from "./min-max.vue?raw";
import Range from "./range.vue?raw";
import Step from "./step.vue?raw";
import Variants from "./variants.vue?raw";
import Vertical from "./vertical.vue?raw";
import WithLabel from "./with-label.vue?raw";

export const imports = `import { Slider } from "@pisagor/vue";`;

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
