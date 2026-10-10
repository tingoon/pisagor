import controlled_positionRaw from "./controlled-position.svelte?raw";
import controlled_sizeRaw from "./controlled-size.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { FloatingPanel } from "@pisagor/svelte";`;

export const sources = {
  ControlledPosition: controlled_positionRaw,
  ControlledSize: controlled_sizeRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
} as const;
