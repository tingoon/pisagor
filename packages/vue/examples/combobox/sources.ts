import Autohighlight from "./autohighlight.vue?raw";
import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Group from "./group.vue?raw";
import Invalid from "./invalid.vue?raw";
import Multiple from "./multiple.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithClearButton from "./with-clear-button.vue?raw";
import WithScroll from "./with-scroll.vue?raw";
import WithStartIcon from "./with-start-icon.vue?raw";

export const imports = `import { Combobox } from "@pisagor/vue";`;

export const sources = {
  Autohighlight,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Multiple,
  Sizes,
  Variants,
  WithClearButton,
  WithScroll,
  WithStartIcon,
} as const;
