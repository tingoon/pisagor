import controlledRaw from "./controlled.vue?raw";
import custom_markersRaw from "./custom-markers.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import stepRaw from "./step.vue?raw";
import thicknessRaw from "./thickness.vue?raw";
import with_markersRaw from "./with-markers.vue?raw";
import with_valueRaw from "./with-value.vue?raw";

export const imports = `import { CircularSlider } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomMarkers: custom_markersRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Sizes: sizesRaw,
  Step: stepRaw,
  Thickness: thicknessRaw,
  WithMarkers: with_markersRaw,
  WithValue: with_valueRaw,
} as const;
