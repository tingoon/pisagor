import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Empty from "./empty.vue?raw";
import Grouping from "./grouping.vue?raw";
import Invalid from "./invalid.vue?raw";
import MaxSelection from "./max-selection.vue?raw";
import Multiple from "./multiple.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithScroll from "./with-scroll.vue?raw";

export const imports = `import { Select } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Empty,
  Grouping,
  Invalid,
  MaxSelection,
  Multiple,
  Sizes,
  Variants,
  WithScroll,
} as const;
