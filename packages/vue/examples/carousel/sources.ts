import autoplayRaw from "./autoplay.vue?raw";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import loopRaw from "./loop.vue?raw";
import mouse_dragRaw from "./mouse-drag.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import slides_per_pageRaw from "./slides-per-page.vue?raw";
import spacingRaw from "./spacing.vue?raw";
import thumbnail_indicatorRaw from "./thumbnail-indicator.vue?raw";
import thumbnail_indicator_verticalRaw from "./thumbnail-indicator-vertical.vue?raw";

export const imports = `import { Carousel } from "@pisagor/vue";`;

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
