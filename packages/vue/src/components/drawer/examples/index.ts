import { stripVueExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import drawer_content_innerRaw from "./drawer-content-inner.ts?raw";
import insetRaw from "./inset.ts?raw";
import snap_pointsRaw from "./snap-points.ts?raw";
import swipe_directionsRaw from "./swipe-directions.ts?raw";

export const imports = `import { Drawer } from "@pisagor/vue/drawer";`;

export const sources = {
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  DrawerContentInner: stripVueExample(drawer_content_innerRaw),
  Inset: stripVueExample(insetRaw),
  SnapPoints: stripVueExample(snap_pointsRaw),
  SwipeDirections: stripVueExample(swipe_directionsRaw),
} as const;

export { default as CustomSpacing } from "./custom-spacing";
export { default as Default } from "./default";
export { default as DrawerContentInner } from "./drawer-content-inner";
export { default as Inset } from "./inset";
export { default as SnapPoints } from "./snap-points";
export { default as SwipeDirections } from "./swipe-directions";
