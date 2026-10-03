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

export const imports = `import { Carousel } from "@pisagor/react/carousel";`;

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

export { Autoplay } from "./autoplay";
export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Loop } from "./loop";
export { MouseDrag } from "./mouse-drag";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { SlidesPerPage } from "./slides-per-page";
export { Spacing } from "./spacing";
export { ThumbnailIndicator } from "./thumbnail-indicator";
export { ThumbnailIndicatorVertical } from "./thumbnail-indicator-vertical";
