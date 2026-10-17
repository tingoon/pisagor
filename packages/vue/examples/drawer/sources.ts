import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.ts?raw";
import Default from "./default.ts?raw";
import DrawerContentInner from "./drawer-content-inner.ts?raw";
import Inset from "./inset.ts?raw";
import SnapPoints from "./snap-points.ts?raw";
import SwipeDirections from "./swipe-directions.ts?raw";

export const imports = `import { Drawer } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  DrawerContentInner,
  Inset,
  SnapPoints,
  SwipeDirections,
} as const;
