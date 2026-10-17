import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import DisabledItem from "./disabled-item.vue?raw";
import FontWeight from "./font-weight.vue?raw";
import Horizontal from "./horizontal.vue?raw";
import Single from "./single.vue?raw";
import Sizes from "./sizes.vue?raw";
import Spacing from "./spacing.vue?raw";
import Variants from "./variants.vue?raw";
import Vertical from "./vertical.vue?raw";

export const imports = `import { ToggleGroup } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  DisabledItem,
  FontWeight,
  Horizontal,
  Single,
  Sizes,
  Spacing,
  Variants,
  Vertical,
} as const;
