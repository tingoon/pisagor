import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Group from "./group.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithClearButton from "./with-clear-button.vue?raw";
import WithStartIcon from "./with-start-icon.vue?raw";
import WithTrigger from "./with-trigger.vue?raw";

export const imports = `import { Autocomplete } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Sizes,
  Variants,
  WithClearButton,
  WithStartIcon,
  WithTrigger,
} as const;
