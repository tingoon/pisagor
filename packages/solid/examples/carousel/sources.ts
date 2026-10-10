import autoplayRaw from "./autoplay.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import helpersRaw from "./helpers.tsx?raw";
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
  Autoplay: autoplayRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Helpers: helpersRaw,
  Loop: loopRaw,
  MouseDrag: mouse_dragRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  SlidesPerPage: slides_per_pageRaw,
  Spacing: spacingRaw,
  ThumbnailIndicator: thumbnail_indicatorRaw,
  ThumbnailIndicatorVertical: thumbnail_indicator_verticalRaw,
} as const;
