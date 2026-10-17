import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.ts?raw";
import Disabled from "./disabled.vue?raw";
import Placements from "./placements.vue?raw";
import TriggersDelays from "./triggers-delays.vue?raw";
import WithoutArrow from "./without-arrow.vue?raw";

export const imports = `import { HoverCard } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  TriggersDelays,
  WithoutArrow,
} as const;
