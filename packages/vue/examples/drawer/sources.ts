import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import drawer_content_innerRaw from "./drawer-content-inner.ts?raw";
import insetRaw from "./inset.ts?raw";
import snap_pointsRaw from "./snap-points.ts?raw";
import swipe_directionsRaw from "./swipe-directions.ts?raw";

export const imports = `import { Drawer } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  DrawerContentInner: drawer_content_innerRaw,
  Inset: insetRaw,
  SnapPoints: snap_pointsRaw,
  SwipeDirections: swipe_directionsRaw,
} as const;
