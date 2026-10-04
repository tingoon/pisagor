import autoplayRaw from "./autoplay.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import loopRaw from "./loop.tsx?raw";
import mouse_dragRaw from "./mouse-drag.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import slides_per_pageRaw from "./slides-per-page.tsx?raw";
import spacingRaw from "./spacing.tsx?raw";
import thumbnail_indicatorRaw from "./thumbnail-indicator.tsx?raw";
import thumbnail_indicator_verticalRaw from "./thumbnail-indicator-vertical.tsx?raw";

export const imports = `import { Carousel } from "@pisagor/react";`;

export const sources = {
  Autoplay: autoplayRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Loop: loopRaw,
  MouseDrag: mouse_dragRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  SlidesPerPage: slides_per_pageRaw,
  Spacing: spacingRaw,
  ThumbnailIndicator: thumbnail_indicatorRaw,
  ThumbnailIndicatorVertical: thumbnail_indicator_verticalRaw,
} as const;

export * from "./autoplay";
export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./loop";
export * from "./mouse-drag";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./slides-per-page";
export * from "./spacing";
export * from "./thumbnail-indicator";
export * from "./thumbnail-indicator-vertical";
