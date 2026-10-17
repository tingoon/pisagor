import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import DrawerContentInner from "./drawer-content-inner.svelte?raw";
import Inset from "./inset.svelte?raw";
import SnapPoints from "./snap-points.svelte?raw";
import SwipeDirections from "./swipe-directions.svelte?raw";

export const imports = `import { Drawer } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  DrawerContentInner,
  Inset,
  SnapPoints,
  SwipeDirections,
} as const;
