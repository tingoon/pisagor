import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { DrawerContentInnerSource as DrawerContentInner } from "./drawer-content-inner";
import { InsetSource as Inset } from "./inset";
import { SnapPointsSource as SnapPoints } from "./snap-points";
import { SwipeDirectionsSource as SwipeDirections } from "./swipe-directions";

export const imports = `import { Drawer } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  DrawerContentInner,
  Inset,
  SnapPoints,
  SwipeDirections,
} as const;
