import Controlled from "./controlled.svelte?raw";
import CustomMarkers from "./custom-markers.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Step from "./step.svelte?raw";
import Thickness from "./thickness.svelte?raw";
import WithMarkers from "./with-markers.svelte?raw";
import WithValue from "./with-value.svelte?raw";

export const imports = `import { CircularSlider } from "@pisagor/svelte";`;

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
