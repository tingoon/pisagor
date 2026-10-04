import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { Carousel } from "@pisagor/solid";`;

export const sources = {
  Autoplay: stripTsxExample(autoplayRaw),
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Loop: stripTsxExample(loopRaw),
  MouseDrag: stripTsxExample(mouse_dragRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  SlidesPerPage: stripTsxExample(slides_per_pageRaw),
  Spacing: stripTsxExample(spacingRaw),
  ThumbnailIndicator: stripTsxExample(thumbnail_indicatorRaw),
  ThumbnailIndicatorVertical: stripTsxExample(thumbnail_indicator_verticalRaw),
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
