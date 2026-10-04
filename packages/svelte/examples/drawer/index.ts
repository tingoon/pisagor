import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import drawer_content_innerRaw from "./drawer-content-inner.svelte?raw";
import insetRaw from "./inset.svelte?raw";
import snap_pointsRaw from "./snap-points.svelte?raw";
import swipe_directionsRaw from "./swipe-directions.svelte?raw";

export const imports = `import { Drawer } from "@pisagor/svelte";`;

export const sources = {
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  DrawerContentInner: drawer_content_innerRaw,
  Inset: insetRaw,
  SnapPoints: snap_pointsRaw,
  SwipeDirections: swipe_directionsRaw,
} as const;

export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as DrawerContentInner } from "./drawer-content-inner.svelte";
export { default as Inset } from "./inset.svelte";
export { default as SnapPoints } from "./snap-points.svelte";
export { default as SwipeDirections } from "./swipe-directions.svelte";
