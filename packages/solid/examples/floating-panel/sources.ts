import { ControlledPositionSource as ControlledPosition } from "./controlled-position";
import { ControlledSizeSource as ControlledSize } from "./controlled-size";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";

export const imports = `import { FloatingPanel } from "@pisagor/solid";`;

export const sources = {
  ControlledPosition,
  ControlledSize,
  CustomRecipe,
  CustomSpacing,
  Default,
} as const;
