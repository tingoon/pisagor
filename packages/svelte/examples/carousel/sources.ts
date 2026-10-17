import Autoplay from "./autoplay.svelte?raw";
import AutoplayControls from "./autoplay-controls.svelte?raw";
import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Loop from "./loop.svelte?raw";
import MouseDrag from "./mouse-drag.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import SlidesPerPage from "./slides-per-page.svelte?raw";
import Spacing from "./spacing.svelte?raw";
import ThumbnailIndicator from "./thumbnail-indicator.svelte?raw";
import ThumbnailIndicatorVertical from "./thumbnail-indicator-vertical.svelte?raw";

export const imports = `import { Carousel } from "@pisagor/svelte";`;

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
