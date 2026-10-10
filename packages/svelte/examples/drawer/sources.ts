import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import drawer_content_innerRaw from "./drawer-content-inner.svelte?raw";
import insetRaw from "./inset.svelte?raw";
import snap_pointsRaw from "./snap-points.svelte?raw";
import swipe_directionsRaw from "./swipe-directions.svelte?raw";

export const imports = `import { Drawer } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  DrawerContentInner: drawer_content_innerRaw,
  Inset: insetRaw,
  SnapPoints: snap_pointsRaw,
  SwipeDirections: swipe_directionsRaw,
} as const;
