import { stripSvelteExample } from "@pisagor/utils";
import autoplayRaw from "./autoplay.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import loopRaw from "./loop.svelte?raw";
import mouse_dragRaw from "./mouse-drag.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import slides_per_pageRaw from "./slides-per-page.svelte?raw";
import spacingRaw from "./spacing.svelte?raw";
import thumbnail_indicatorRaw from "./thumbnail-indicator.svelte?raw";
import thumbnail_indicator_verticalRaw from "./thumbnail-indicator-vertical.svelte?raw";

export const imports = `import { Carousel } from "@pisagor/svelte";`;

export const sources = {
  Autoplay: stripSvelteExample(autoplayRaw),
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Loop: stripSvelteExample(loopRaw),
  MouseDrag: stripSvelteExample(mouse_dragRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  SlidesPerPage: stripSvelteExample(slides_per_pageRaw),
  Spacing: stripSvelteExample(spacingRaw),
  ThumbnailIndicator: stripSvelteExample(thumbnail_indicatorRaw),
  ThumbnailIndicatorVertical: stripSvelteExample(
    thumbnail_indicator_verticalRaw,
  ),
} as const;

export { default as Autoplay } from "./autoplay.svelte";
export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Loop } from "./loop.svelte";
export { default as MouseDrag } from "./mouse-drag.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as SlidesPerPage } from "./slides-per-page.svelte";
export { default as Spacing } from "./spacing.svelte";
export { default as ThumbnailIndicator } from "./thumbnail-indicator.svelte";
export { default as ThumbnailIndicatorVertical } from "./thumbnail-indicator-vertical.svelte";
