import { AutoplaySource as Autoplay } from "./autoplay";
import { AutoplayControlsSource as AutoplayControls } from "./autoplay-controls";
import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { LoopSource as Loop } from "./loop";
import { MouseDragSource as MouseDrag } from "./mouse-drag";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SlidesPerPageSource as SlidesPerPage } from "./slides-per-page";
import { SpacingSource as Spacing } from "./spacing";
import { ThumbnailIndicatorSource as ThumbnailIndicator } from "./thumbnail-indicator";
import { ThumbnailIndicatorVerticalSource as ThumbnailIndicatorVertical } from "./thumbnail-indicator-vertical";

export const imports = `import { Carousel } from "@pisagor/solid";`;

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
