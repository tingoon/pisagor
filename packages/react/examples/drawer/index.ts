import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import drawer_content_innerRaw from "./drawer-content-inner.tsx?raw";
import insetRaw from "./inset.tsx?raw";
import snap_pointsRaw from "./snap-points.tsx?raw";
import swipe_directionsRaw from "./swipe-directions.tsx?raw";

export const imports = `import { Drawer } from "@pisagor/react";`;

export const sources = {
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  DrawerContentInner: drawer_content_innerRaw,
  Inset: insetRaw,
  SnapPoints: snap_pointsRaw,
  SwipeDirections: swipe_directionsRaw,
} as const;

export * from "./custom-spacing";
export * from "./default";
export * from "./drawer-content-inner";
export * from "./inset";
export * from "./snap-points";
export * from "./swipe-directions";
