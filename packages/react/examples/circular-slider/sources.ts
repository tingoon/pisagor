import controlledRaw from "./controlled.tsx?raw";
import custom_markersRaw from "./custom-markers.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import stepRaw from "./step.tsx?raw";
import thicknessRaw from "./thickness.tsx?raw";
import with_markersRaw from "./with-markers.tsx?raw";
import with_valueRaw from "./with-value.tsx?raw";

export const imports = `import { CircularSlider } from "@pisagor/react";`;

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
