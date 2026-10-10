import autoplayRaw from "./autoplay.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
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
  Autoplay: autoplayRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
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
