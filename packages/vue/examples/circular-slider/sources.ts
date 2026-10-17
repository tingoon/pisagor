import Controlled from "./controlled.vue?raw";
import CustomMarkers from "./custom-markers.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Sizes from "./sizes.vue?raw";
import Step from "./step.vue?raw";
import Thickness from "./thickness.vue?raw";
import WithMarkers from "./with-markers.vue?raw";
import WithValue from "./with-value.vue?raw";

export const imports = `import { CircularSlider } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomMarkers,
  CustomRecipe,
  Default,
  Disabled,
  Sizes,
  Step,
  Thickness,
  WithMarkers,
  WithValue,
} as const;
