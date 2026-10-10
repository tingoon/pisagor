import controlledRaw from "./controlled.svelte?raw";
import custom_markersRaw from "./custom-markers.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import stepRaw from "./step.svelte?raw";
import thicknessRaw from "./thickness.svelte?raw";
import with_markersRaw from "./with-markers.svelte?raw";
import with_valueRaw from "./with-value.svelte?raw";

export const imports = `import { CircularSlider } from "@pisagor/svelte";`;

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
