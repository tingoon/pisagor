import { stripVueExample } from "@pisagor/utils";
import autoplayRaw from "./autoplay.vue?raw";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import loopRaw from "./loop.vue?raw";
import mouse_dragRaw from "./mouse-drag.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import slides_per_pageRaw from "./slides-per-page.vue?raw";
import spacingRaw from "./spacing.vue?raw";
import thumbnail_indicatorRaw from "./thumbnail-indicator.vue?raw";
import thumbnail_indicator_verticalRaw from "./thumbnail-indicator-vertical.vue?raw";

export const imports = `import { Carousel } from "@pisagor/vue/carousel";`;

export const sources = {
  Autoplay: stripVueExample(autoplayRaw),
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Loop: stripVueExample(loopRaw),
  MouseDrag: stripVueExample(mouse_dragRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  SlidesPerPage: stripVueExample(slides_per_pageRaw),
  Spacing: stripVueExample(spacingRaw),
  ThumbnailIndicator: stripVueExample(thumbnail_indicatorRaw),
  ThumbnailIndicatorVertical: stripVueExample(thumbnail_indicator_verticalRaw),
} as const;

export { default as Autoplay } from "./autoplay.vue";
export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Loop } from "./loop.vue";
export { default as MouseDrag } from "./mouse-drag.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as SlidesPerPage } from "./slides-per-page.vue";
export { default as Spacing } from "./spacing.vue";
export { default as ThumbnailIndicator } from "./thumbnail-indicator.vue";
export { default as ThumbnailIndicatorVertical } from "./thumbnail-indicator-vertical.vue";
