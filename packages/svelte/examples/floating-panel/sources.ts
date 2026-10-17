import ControlledPosition from "./controlled-position.svelte?raw";
import ControlledSize from "./controlled-size.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";

export const imports = `import { FloatingPanel } from "@pisagor/svelte";`;

export const sources = {
  ControlledPosition,
  ControlledSize,
  CustomRecipe,
  CustomSpacing,
  Default,
} as const;
