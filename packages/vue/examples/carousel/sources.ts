import Autoplay from "./autoplay.vue?raw";
import AutoplayControls from "./autoplay-controls.vue?raw";
import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Loop from "./loop.vue?raw";
import MouseDrag from "./mouse-drag.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import SlidesPerPage from "./slides-per-page.vue?raw";
import Spacing from "./spacing.vue?raw";
import ThumbnailIndicator from "./thumbnail-indicator.vue?raw";
import ThumbnailIndicatorVertical from "./thumbnail-indicator-vertical.vue?raw";

export const imports = `import { Carousel } from "@pisagor/vue";`;

export const sources = {
  Autoplay,
  AutoplayControls,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Loop,
  MouseDrag,
  OrientationHorizontal,
  OrientationVertical,
  SlidesPerPage,
  Spacing,
  ThumbnailIndicator,
  ThumbnailIndicatorVertical,
} as const;
