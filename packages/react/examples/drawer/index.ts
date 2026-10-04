import { stripTsxExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import drawer_content_innerRaw from "./drawer-content-inner.tsx?raw";
import insetRaw from "./inset.tsx?raw";
import snap_pointsRaw from "./snap-points.tsx?raw";
import swipe_directionsRaw from "./swipe-directions.tsx?raw";

export const imports = `import { Drawer } from "@pisagor/react/drawer";`;

export const sources = {
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  DrawerContentInner: stripTsxExample(drawer_content_innerRaw),
  Inset: stripTsxExample(insetRaw),
  SnapPoints: stripTsxExample(snap_pointsRaw),
  SwipeDirections: stripTsxExample(swipe_directionsRaw),
} as const;

export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { DrawerContentInner } from "./drawer-content-inner";
export { Inset } from "./inset";
export { SnapPoints } from "./snap-points";
export { SwipeDirections } from "./swipe-directions";
