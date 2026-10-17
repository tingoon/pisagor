import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { IndeterminateSource as Indeterminate } from "./indeterminate";
import { SizesSource as Sizes } from "./sizes";
import { ThicknessSource as Thickness } from "./thickness";
import { WithValueSource as WithValue } from "./with-value";

export const imports = `import { CircularProgress } from "@pisagor/react";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  Sizes,
  Thickness,
  WithValue,
} as const;
